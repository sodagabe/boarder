async function makeRequest({ url, queryParams }) {
  if (queryParams) {
    url += "?";
    let firstParam = true;
    for (let [key, value] of queryParams) {
      url += `${firstParam ? "" : "&"}${key}=${value}`;
    }
  }
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

export default makeRequest;
