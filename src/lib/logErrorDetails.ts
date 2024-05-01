import axios from 'axios';

const logErrorDetails = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      console.error(error.response.data);
    } else if (error.request) {
      console.error(error.request.data);
    }
  } else if (error instanceof Error) {
    console.error(error.stack);
  } else {
    console.error(`An unexpected error occurred: ${String(error)}`);
  }
};

export { logErrorDetails };
