import { Flex, Box } from '@chakra-ui/react';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';

const Home = () => (
  <Flex direction='column' justify='space-between' minH='100vh'>
    <Box>
      <Header />
      <MainContent />
    </Box>
    <Footer />
  </Flex>
);

export default Home;
