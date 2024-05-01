import { Box, Container, Heading } from '@chakra-ui/react';

const Header = () => (
  <Box as='header' py={6} color='white' bg='whatsapp.600'>
    <Container maxW='container.lg'>
      <Heading as='h1' size='xl'>
        GitHub Repo Issues Viewer
      </Heading>
    </Container>
  </Box>
);

export default Header;
