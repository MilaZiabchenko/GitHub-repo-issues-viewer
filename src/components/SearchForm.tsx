import { useState, type ChangeEvent, type FormEvent } from 'react';
import {
  Heading,
  Flex,
  FormControl,
  InputGroup,
  InputLeftAddon,
  Input,
  Button
} from '@chakra-ui/react';
import { useAppDispatch } from '../app/hooks';
import { getOwnerAndRepoInfo } from '../services/getOwnerAndRepo';
import { getIssuesByQualifier } from '../services/searchRepoIssues';
import { getOwnerAndRepo } from '../features/repo/repoSlice';
import { getFetchError, getIssues } from '../features/issues/issuesSlice';
import { logErrorDetails } from '../lib/logErrorDetails';

const SearchForm = () => {
  const [issuesSearch, setIssuesSearch] = useState('');
  const dispatch = useAppDispatch();

  const handleIssuesSearchChange = (e: ChangeEvent<HTMLInputElement>) =>
    setIssuesSearch(e.target.value);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const repoInfo = await getOwnerAndRepoInfo(issuesSearch);

      dispatch(getOwnerAndRepo(repoInfo));

      const issues = await getIssuesByQualifier(issuesSearch);

      dispatch(getIssues(issues));

      setIssuesSearch('');
    } catch (error) {
      logErrorDetails(error);

      dispatch(getFetchError());
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Heading as='h2' size='lg' color='whatsapp.700' py={2}>
        Enter repo URL
      </Heading>
      <Flex gap={2} wrap={{ base: 'wrap', md: 'nowrap' }}>
        <FormControl isRequired flexGrow={{ md: 1 }}>
          <InputGroup size='lg'>
            <InputLeftAddon bg='blackAlpha.50'>
              https://github.com/
            </InputLeftAddon>
            <Input
              name='q'
              type='search'
              value={issuesSearch}
              onChange={handleIssuesSearchChange}
              color='gray.500'
              placeholder='owner/repo'
              _placeholder={{ color: 'inherit' }}
            />
          </InputGroup>
        </FormControl>
        <Button
          type='submit'
          w={{ base: '100%', md: '200px' }}
          size='lg'
          colorScheme='whatsapp'
        >
          Load issues
        </Button>
      </Flex>
    </form>
  );
};

export default SearchForm;
