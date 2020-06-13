# react-use-fetch

[![CircleCI](https://circleci.com/gh/bsonntag/react-use-fetch.svg?style=svg)](https://circleci.com/gh/bsonntag/react-use-fetch)

React hook for using fetch.

## Disclaimer

This module uses the upcoming [React Hooks API Proposal](https://reactjs.org/docs/hooks-intro.html)
which is **subject to change** until released to a final version.

This means that the API of this module is also subject to change.
Please **don't** use it on a production application.

## Disclaimer #2

While this works and is an interesting use of hooks,
it might be a better idea to use Suspense for fetching data.

Suspense isn't still fully released, but you can start using it with
[`React.lazy`](https://reactjs.org/docs/code-splitting.html#suspense).

## Installation

Using npm:

```sh
$ npm install --save react-use-fetch
```

Using yarn:

```sh
$ yarn add react-use-fetch
```

Since this module uses React's upcoming Hooks feature,
to try this out you'll need to install the `16.7.0-alpha.0` version
of `react` and `react-dom`:

```sh
$ yarn add react@16.7.0-alpha.0 react-dom@16.7.0-alpha.0
```

## Usage

```js
import React from 'react';
import useFetch, { useJsonResponse } from 'react-use-fetch';

function Example() {
  const { response } = useFetch('https://api.github.com/users/bsonntag');
  const [json] = useJsonResponse(response);

  if (!json) {
    return <p>Loading...</p>;
  }

  if (!response.ok) {
    return <p>Error: {json.message}</p>;
  }

  return (
    <>
      <h1>{json.name}</h1>
      <img src={json.avatar_url} />
    </>
  );
}
```

## API

```js
useFetch(input: string | Request, init?: Object): {
  error: ?Error,
  response: ?Response
}
```

Receives the same arguments as [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch)
and returns an object with the [response](https://developer.mozilla.org/en-US/docs/Web/API/Response)
and the request error.

```js
useJsonResponse(response: ?Response): [?Object, ?Error];
```

Receives a [fetch response](https://developer.mozilla.org/en-US/docs/Web/API/Response)
and returns a tuple with the result of [`response.json()`](https://developer.mozilla.org/en-US/docs/Web/API/Body/json)
and the error of parsing.
If the response is `null` or `undefined` nothing is done.

## Contributing

Please feel free to submit any issues or pull requests.

## License

MIT
