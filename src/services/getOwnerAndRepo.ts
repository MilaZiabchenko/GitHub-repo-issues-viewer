import instance from '../lib/getAxiosInstance';
import { type Owner, OwnerSchema } from '../models/Owner';
import { type Repo, RepoSchema } from '../models/Repo';

const getOwnerAndRepoFromQuery = (query: string) => {
  const [owner, repo] = query.split('/');

  return { owner, repo };
};

const getOwnerAndRepoInfo = async (query: string) => {
  const { owner, repo } = getOwnerAndRepoFromQuery(query);

  const [ownerInfo, repoInfo] = await Promise.all([
    instance.get<Owner>(`/users/${owner}`),
    instance.get<Repo>(`/repos/${owner}/${repo}`)
  ]);

  return {
    owner: OwnerSchema.parse(ownerInfo.data),
    repo: RepoSchema.parse(repoInfo.data)
  };
};

export { getOwnerAndRepoFromQuery, getOwnerAndRepoInfo };
