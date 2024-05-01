import { Container, Box } from '@chakra-ui/react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

const MainContent = () => (
  <Container as='main' maxW='container.lg' my={6}>
    <Box>
      <SearchForm />
      <SearchResults />
    </Box>
  </Container>
);

export default MainContent;
