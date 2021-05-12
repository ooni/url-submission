import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Container, Flex, Box } from 'ooni-components'
import Axios from 'axios'
import useSWR from 'swr'

import Layout from '../../components/Layout'

const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_OONI_API_SERVER,
  withCredentials: true,
})

const fetcher = (url) => axios.get(url).then((res) => res.data)

const redirectionDelay = 3

export default function Login(): JSX.Element {
  const router = useRouter()
  const { data } = useSWR(`/api/v1/user_login?k=${router.query.token}`, fetcher)

  useEffect(() => {
    if (data && data?.login === true) {
      setTimeout(() => {
        router.push('/')
      }, redirectionDelay * 1000)
    }
  }, [data])

  return (
    <Layout>
      <Container>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box fontSize={32} fontWeight="bold" my={5}>
            {data
              ? `Logged in. Redirecting in ${redirectionDelay} seconds`
              : 'Loggin in...'}
          </Box>
          <Flex>
            <Box color="gray5">With token: {router.query.token}</Box>
          </Flex>
        </Flex>
      </Container>
    </Layout>
  )
}
