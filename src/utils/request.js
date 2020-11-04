export class ResponseError extends Error {
  constructor(response) {
    super(response.statusText);
    this.response = response;
  }
}

function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

function checkStatusCode(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new ResponseError(response);
  error.response = response;
  throw error;
}

async function request(url, options) {
  const fetchResponse = await fetch(url, options);
  const response = checkStatusCode(fetchResponse);
  return parseJSON(response);
}

export default request;
