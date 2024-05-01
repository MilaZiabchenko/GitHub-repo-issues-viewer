import { List, ListItem } from '@chakra-ui/react';
import type { Issue } from '../../models/Issues';
import IssuesCard from './IssuesCard';

const IssuesList = ({ issues }: { issues: Issue[] }) => (
  <List spacing={4}>
    {issues.map(issue => (
      <ListItem key={issue.id}>
        <IssuesCard issue={issue} />
      </ListItem>
    ))}
  </List>
);

export default IssuesList;
