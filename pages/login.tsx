import React from 'react'
import { Container, Flex, Box, Input, Button } from 'ooni-components'
// import Axios from 'axios'

import Layout from '../components/Layout'

// const axios = Axios.create({
//   baseURL: process.env.NEXT_PUBLIC_OONI_API_SERVER,
//   withCredentials: true,
// })

// const fetcher = (url) => axios.get(url).then((res) => res.data)

export default function Login(): JSX.Element {
  const onLogin = React.useCallback(() => {
    // 1. Send `/api/v1/user_login?key=<key_from_mail>
  }, [])

  // // Trials on Glitch.me that worked
  // const onRegister = React.useCallback(() => {
  //   const userRegister = async () => {
  //     const res = await fetcher(
  //       `${process.env.NEXT_PUBLIC_OONI_API_SERVER}/api/v1/user_register`,
  //       {
  //         method: 'POST',
  //         body: JSON.stringify({
  //           email_address: 'sarath+test1@openobservatory.org',
  //           nickname: 'Sarath Dev',
  //         }),
  //       }
  //     )
  //     console.log(res)
  //   }
  //   userRegister()
  // }, [])

  // const onLogin = React.useCallback(() => {
  //   const loginGlitch = async () => {
  //     const res = await fetch(
  //       `${process.env.NEXT_PUBLIC_OONI_API_SERVER}/api/v1/user_login?k=${
  //         'token' || key
  //       }`
  //     )
  //     console.log(res)
  //   }
  //   loginGlitch()
  // }, [])

  // const onCheck = React.useCallback(() => {
  //   const checkReqWithCookie = async () => {
  //     const res = await fetch(
  //       `${process.env.NEXT_PUBLIC_OONI_API_SERVER}/dashboard`,
  //       {
  //         credentials: 'include',
  //       }
  //     )
  //     console.log(res)
  //   }
  //   checkReqWithCookie()
  // }, [])

  // const onLogout = React.useCallback(() => {
  //   const logout = async () => {
  //     const res = await fetch(
  //       `${process.env.NEXT_PUBLIC_OONI_API_SERVER}/logout`,
  //       {
  //         credentials: 'include',
  //       }
  //     )
  //     console.log(res)
  //   }
  //   logout()
  // }, [])

  return (
    <Layout>
      <Container>
        <Flex flexDirection="column" justifyContent="center">
          <Box>
            <Flex
              flexDirection={['column', 'row']}
              alignItems={['center', 'center']}
              justifyContent="center"
            >
              <Input
                px={2}
                id="email"
                name="email"
                type="email"
                my={3}
                placeholder="Email"
              />
              <Box ml={5}>
                <Button onClick={onLogin}> Login </Button>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Layout>
  )
}
