import React, { useState } from 'react'
import Link from 'next/link'
import { Container, Flex, Box, Input, Button } from 'ooni-components'
// import Axios from 'axios'

import Layout from '../components/Layout'

// const axios = Axios.create({
//   baseURL: process.env.NEXT_PUBLIC_OONI_API_SERVER,
//   withCredentials: true,
// })

const fetcher = (input, ...args) =>
  fetch(input, ...args).then((res) => res.json())

export default function Register(): JSX.Element {
  const [linkInEmail, setLinkInEmail] = useState(null)
  const onRegister = React.useCallback(() => {
    const userRegister = async () => {
      const res = await fetcher(
        `${process.env.NEXT_PUBLIC_OONI_API_SERVER}/api/v1/user_register`,
        {
          method: 'POST',
          body: JSON.stringify({
            email_address: 'sarath+test1@openobservatory.org',
            nickname: 'Sarath Dev',
          }),
        }
      )
      setLinkInEmail(res.linkInEmail)
    }
    userRegister()
  }, [])

  return (
    <Layout>
      <Container>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <Flex
              flexDirection={['column']}
              alignItems={'center'}
              justifyContent="center"
            >
              <Input
                px={2}
                my={2}
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                disabled={true}
              />
              <Input
                px={2}
                my={2}
                id="nickname"
                name="nickname"
                type="text"
                placeholder="Nick name"
                disabled={true}
              />
              <Box my={4}>
                <Button onClick={onRegister}> Register </Button>
              </Box>
            </Flex>
          </Box>
          {linkInEmail && (
            <Box>
              <Link href={linkInEmail}>Link sent in Email</Link>
            </Box>
          )}
        </Flex>
      </Container>
    </Layout>
  )
}
