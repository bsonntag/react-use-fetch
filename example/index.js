import { render } from 'react-dom';
import React from 'react';
import useFetch, { useJsonResponse } from '../src';

const Example = () => {
  const { error, response } = useFetch('https://api.github.com/users/bsonntag');
  const [json] = useJsonResponse(response);

  if (error) {
    return <p>{error.message}</p>;
  }

  if (!json) {
    return 'Loading...';
  }

  if (!response.ok) {
    return (
      <p>
        {'Error: '}
        {json.message}
      </p>
    );
  }

  return (
    <>
      <h1>{json.name}</h1>
      <img src={json.avatar_url} />
    </>
  );
};

render(<Example />, document.getElementById('root'));
