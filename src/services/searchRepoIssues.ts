import instance from '../lib/getAxiosInstance';
import { type Issues, IssuesSchema } from '../models/Issues';
import { getOwnerAndRepoFromQuery } from './getOwnerAndRepo';
import { logErrorDetails } from '../lib/logErrorDetails';

const searchIssues = async (query: string, qualifier: string) => {
  const { owner, repo } = getOwnerAndRepoFromQuery(query);

  try {
    const response = await instance.get<Issues>(
      `/search/issues?q=repo:${owner}/${repo}+is:issue+${qualifier}&per_page=10`
    );

    const issuesResults: Issues = IssuesSchema.parse(response.data);

    if (issuesResults.total_count === 0) return undefined;

    return issuesResults.items;
  } catch (error) {
    logErrorDetails(error);
  }
};

const getIssuesByQualifier = async (query: string) => {
  const [open, assigned, closed] = await Promise.all([
    searchIssues(query, 'is:open'),
    searchIssues(query, 'is:open+assignee:*'),
    searchIssues(query, 'is:closed')
  ]);

  return {
    open: open ?? [],
    assigned: assigned ?? [],
    closed: closed ?? []
  };
};

export { getIssuesByQualifier };
