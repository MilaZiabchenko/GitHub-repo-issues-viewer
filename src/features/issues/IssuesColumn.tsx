import { Heading, Box } from '@chakra-ui/react';
import type { Issue } from '../../models/Issues';
import IssuesList from './IssuesList';

type IssuesColumnProps = {
  title: string;
  issues: Issue[];
};

const IssuesColumn = ({ title, issues }: IssuesColumnProps) => (
  <>
    <Heading
      as='h3'
      size='lg'
      py={6}
      color='whatsapp.700'
      textAlign='center'
      bg='white'
    >
      {title}
    </Heading>
    <Box p={4} minH='200px' style={{ borderRadius: '1rem' }}>
      {issues.length > 0 ? (
        <IssuesList issues={issues} />
      ) : (
        <Heading
          as='h4'
          size='md'
          color='whatsapp.700'
          textAlign='center'
          py={6}
        >
          No issues found
        </Heading>
      )}
    </Box>
  </>
);

export default IssuesColumn;
