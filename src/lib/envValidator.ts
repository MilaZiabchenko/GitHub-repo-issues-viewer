import { cleanEnv, str, url } from 'envalid';

const env = cleanEnv(import.meta.env, {
  VITE_GITHUB_TOKEN: str(),
  VITE_GITHUB_API_URL: url()
});

export default env;
