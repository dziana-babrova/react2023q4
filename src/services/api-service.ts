export async function getAllData<T>(
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
  const data: T = await response.json();
  return data;
}

export async function getShow(id: string) {
  const response = await fetch(`https://api.myshows.me/v2/rpc/`, {
    method: 'POST',
    body: JSON.stringify({
      jsonrpc: '2.0',
      method: 'shows.GetById',
      params: {
        showId: id,
        withEpisodes: false,
      },
      id: 1,
    }),
  });
  const data = await response.json();
  return data;
}
