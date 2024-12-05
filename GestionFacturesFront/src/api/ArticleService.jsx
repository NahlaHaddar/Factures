import axios from "axios";

const appUrl = "http://localhost:8090/articles";

export async function saveArticle(article) {
  return await axios.post(`${appUrl}/nouvelArticle`, article);
}

export async function getArticles() {
  return await axios.get(`${appUrl}`);
}

export async function updateArticle(article) {
  return await axios.post(`${appUrl}/nouvelArticle`, article);
}
