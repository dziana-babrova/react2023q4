export async function getAllCharacters(searchValue: string, limit: string) {
  const response = await fetch(
    `https://dummyjson.com/products/search?q=${searchValue}&limit=${limit}`
  );
  const data = await response.json();
  return data;
}
