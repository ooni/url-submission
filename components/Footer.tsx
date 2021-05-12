import { Container, Flex, Box } from 'ooni-components'

const Footer = (): JSX.Element => (
  <Flex
    width={1}
    py={2}
    bg="blue7"
    color="white"
    sx={{
      position: 'fixed',
      bottom: 0,
    }}
  >
    <Container>
      <Box> Footer </Box>
    </Container>
  </Flex>
)

export default Footer
