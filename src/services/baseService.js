const baseApi = 'https://jsonplaceholder.typicode.com/';

export const get = (path, params) => {
  const url = new URL(path, baseApi);
  url.search = new URLSearchParams(params).toString();
  return fetch(url).then((response) => response.json());
};

export const post = (path, body) => {
  const url = new URL(path, baseApi);

  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json());
};
