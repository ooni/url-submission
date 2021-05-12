import NLink from 'next/link'
import { Box, Flex, Link } from 'ooni-components'
// @ts-expect-error because ooni-components is not typescript-ed yet
import OONILogo from 'ooni-components/components/svgs/logos/OONI-HorizontalMonochromeInverted.svg'
import { BoxProps } from 'rebass'
import styled from 'styled-components'

type NavItemProps = BoxProps & {
  href: string
  children: React.ReactChildren | string | JSX.Element
}

const NavItem = ({ href, children, ...rest }: NavItemProps) => (
  <Box px={2} {...rest}>
    <NLink passHref href={href}>
      <Link color="white">{children}</Link>
    </NLink>
  </Box>
)
styled(Box).attrs({
  px: 2,
  color: 'white',
})``

const NavBar: React.FC = () => (
  <Flex
    flexDirection="row"
    mb={3}
    py={2}
    bg="blue5"
    justifyContent="flex-end"
    alignItems="center"
  >
    <NavItem href="/" mr="auto">
      <OONILogo height={32} />
    </NavItem>
    <NavItem href="/register"> Regsiter </NavItem>
    {/* <NavItem href="/login">Login</NavItem> */}
    {/* <NavItem href="/logout"> Logout </NavItem> */}
  </Flex>
)

export default NavBar
