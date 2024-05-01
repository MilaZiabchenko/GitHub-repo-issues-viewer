import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text
} from '@chakra-ui/react';
import { formatDistanceToNow } from 'date-fns';

import type { Issue } from '../../models/Issues';

const IssuesCard = ({ issue }: { issue: Issue }) => {
  return (
    <Card
      p={2}
      size='sm'
      borderTop='10px solid'
      borderColor='whatsapp.500'
      borderRadius='xl'
      color='whatsapp.700'
      bg='white'
    >
      <CardHeader>
        <Heading as='h4' size='md'>
          {issue.title}
        </Heading>
      </CardHeader>
      <CardBody>
        <Text>
          # {issue.number} opened{' '}
          {formatDistanceToNow(new Date(issue.created_at), {
            addSuffix: true
          })}
        </Text>
      </CardBody>
      <CardFooter>
        <Text>
          {issue.user.type} | Comments: {issue.comments}
        </Text>
      </CardFooter>
    </Card>
  );
};

export default IssuesCard;
