export async function getAllCharacters(searchValue: string, limit: string) {
  const response = await fetch(`https://api.myshows.me/v2/rpc/`, {
    method: 'POST',
    body: JSON.stringify({
      jsonrpc: '2.0',
      method: 'shows.Get',
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
        page: 2,
        pageSize: limit,
      },
      id: 1,
    }),
  });
  const data = await response.json();
  return data;
}
