export async function getAllCharacters<T>(
  method: string,
  searchValue: string,
  limit: string,
  page: string
): Promise<T> {
  const response = await fetch(`https://api.myshows.me/v2/rpc/`, {
    method: 'POST',
    body: JSON.stringify({
      jsonrpc: '2.0',
      method: method,
      params: {
        search: {
          network: 0,
          genre: 0,
          country: 'string',
          year: 0,
          watching: 0,
          category: 'string',
          status: 'string',
          sort: 'string',
          query: searchValue,
        },
        page: page,
        pageSize: limit,
      },
      id: 1,
    }),
  });
  const data = await response.json();
  console.log(data);
  return data;
}
