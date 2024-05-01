import { Box, Container, Divider, Text } from '@chakra-ui/react';

const Footer = () => (
  <Box as='footer' py={6} color='white' bg='whatsapp.600'>
    <Container maxW='container.lg'>
      <Text fontSize='lg' mb={{ base: 0, md: 2 }}>
        © 2024 GitHub Repo Issues Viewer
      </Text>
      <Box display={{ base: 'none', md: 'block' }}>
        <Divider />
        <Text fontSize='md' mt={2}>
          Designed & developed with 💚 by Mila Ziabchenko
        </Text>
        <Text fontSize='sm'>
          using React, Redux Toolkit, TypeScript, Axios, Zod, Vite, Chakra UI &
          Framer Motion
        </Text>
      </Box>
    </Container>
  </Box>
);

export default Footer;
