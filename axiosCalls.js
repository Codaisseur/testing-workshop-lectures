const axios = require("axios");

const getArticleTitles = async () => {
  try {
    const url = `https://codaisseur-coders-network.herokuapp.com/posts`;

    const response = await axios.get(url);

    const { data } = response;

    const articles = data.rows;

    if (!articles.length) {
      return "No articles found";
    }
    return articles.map((a) => a.title);
  } catch (error) {
    console.log(error.message);
    throw new Error("Something went wrong");
  }
};

const getOneArticle = async (id) => {
  try {
    const response = await axios.get(
      `https://codaisseur-coders-network.herokuapp.com/posts/${id}`
    );
    const article = response.data;

    if (!article.title) {
      throw new Error("404 article not found");
    }

    return article;
  } catch (e) {
    throw new Error("Something went wrong");
  }
};

module.exports = { getArticleTitles, getOneArticle };
