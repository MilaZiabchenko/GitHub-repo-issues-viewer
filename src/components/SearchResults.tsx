import { useAppSelector } from '../app/hooks';
import Hero from './Hero';
import UrlError from './UrlError';
import RepoInfo from '../features/repo/RepoInfo';
import IssuesContainer from '../features/issues/IssuesContainer';

const SearchResults = () => {
  const { data_fetched, url_error } = useAppSelector(state => state.issues);

  if (!data_fetched && !url_error) return <Hero />;

  if (url_error) return <UrlError />;

  return (
    <>
      <RepoInfo />
      <IssuesContainer />
    </>
  );
};

export default SearchResults;
