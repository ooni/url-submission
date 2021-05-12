import { Flex, Heading } from 'ooni-components'
import Layout from '../components/Layout'

export const Home = (): JSX.Element => (
  <Layout>
    <Flex flexDirection="column">
      <Heading h={1} my={3}>
        Test List Management Dashboard
      </Heading>
    </Flex>
  </Layout>
)

export default Home
