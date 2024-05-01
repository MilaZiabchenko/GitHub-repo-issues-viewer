import { Flex, Image, Heading } from '@chakra-ui/react';
import octocat from '../assets/octocat.png';

const UrlError = () => (
  <Flex direction='column' align='center' justify='center' my={12} gap={4}>
    <Image
      src={octocat}
      alt='Octocat'
      boxSize={{ base: '225px', md: '250px' }}
      objectFit='cover'
    />
    <Heading as='h2' size={'xl'} px={4} color='whatsapp.600' textAlign='center'>
      Oops, this URL isn't working... Try another one!
    </Heading>
  </Flex>
);

export default UrlError;
