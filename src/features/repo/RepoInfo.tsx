import {
  Stack,
  HStack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text
} from '@chakra-ui/react';
import { ChevronRightIcon, StarIcon } from '@chakra-ui/icons';
import { useAppSelector } from '../../app/hooks';
import { formatNumber } from '../../utils/formatNumber';

const RepoInfo = () => {
  const { owner, repo } = useAppSelector(state => state.repository);

  const starsCount = formatNumber(repo.stargazers_count);

  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      my={6}
      spacing={{ base: 2, md: 6 }}
      fontSize={{ base: '1.2em', md: '1.35em' }}
      fontWeight={700}
    >
      <Breadcrumb
        spacing={1}
        separator={<ChevronRightIcon />}
        color='whatsapp.600'
      >
        <BreadcrumbItem>
          <BreadcrumbLink href={owner.html_url} target='_blank'>
            {owner.login}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href={repo.html_url} target='_blank'>
            {repo.name}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <HStack>
        <StarIcon boxSize={5} color='yellow.400' />
        <Text color='whatsapp.800'>{starsCount} stars</Text>
      </HStack>
    </Stack>
  );
};

export default RepoInfo;
