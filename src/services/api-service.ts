export async function getAllCharacters(pageNumber: number) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${pageNumber}`
  );
  const data = await response.json();
  return data;
}
