import { Flex } from 'ooni-components'
import NavBar from './NavBar'
import Footer from './Footer'

type LayoutProps = {
  children: JSX.Element
}

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
  return (
    <Flex flexDirection="column">
      <NavBar />
      <main>{children}</main>
      <Footer />
    </Flex>
  )
}

export default Layout
