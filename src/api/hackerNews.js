const baseUrl = "http://hn.algolia.com/api/v1";

export async function searchQuery(query) {
  const response = await fetch(`${baseUrl}/search?query=${query}`);

  return response.json();
}
