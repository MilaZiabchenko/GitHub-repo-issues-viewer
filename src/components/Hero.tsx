import { Flex, Image, Heading } from '@chakra-ui/react';
import octocat from '../assets/octocat.png';

const Hero = () => (
  <Flex direction='column' align='center' justify='center' my={12} gap={4}>
    <Image
      src={octocat}
      alt='Octocat'
      boxSize={{ base: '225px', md: '250px' }}
      objectFit='cover'
    />
    <Heading
      as='h2'
      size={{ base: '2xl', md: '3xl' }}
      color='whatsapp.600'
      textAlign='center'
    >
      Welcome to Issues!
    </Heading>
  </Flex>
);

export default Hero;
