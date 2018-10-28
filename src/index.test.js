import { render, wait } from 'react-testing-library';
import React from 'react';
import nock from 'nock';
import useFetch, { useJsonResponse } from '.';

const Test = () => {
  const { error, response } = useFetch('http://example.com/foo');
  const [json] = useJsonResponse(response);

  if (error) {
    return error.message;
  }

  if (!json) {
    return 'loading';
  }

  return json.foo;
};

beforeEach(() => nock.cleanAll());

test('should return the response', async () => {
  nock('http://example.com')
    .get('/foo')
    .reply(200, { foo: 'bar' });

  const { container, rerender } = render(<Test />);

  expect(container).toHaveTextContent('loading');

  await wait(() => {
    rerender(<Test />);

    expect(container).toHaveTextContent('bar');
  });
});
