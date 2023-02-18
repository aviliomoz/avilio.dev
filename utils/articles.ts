const api_route = "https://dev.to/api/articles?username=iamluisj";

export const getArticles = async () => {
  const data = await fetch(api_route);
  const articles = await data.json();

  return articles;
};
