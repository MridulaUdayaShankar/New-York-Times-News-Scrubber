// request.get({
//     url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
//     qs: {
//       'api-key': "e36ab4b6d37340628bcf1cff5838b879"
//     },
//   }, function(err, response, body) {
//     body = JSON.parse(body);
//     console.log(body);
//   })

  import axios from "axios";

  export default {
    // Gets all articles
    getArticles: function() {
      return axios.get("/api/articles");
    },
    // Gets the article with the given id
    getArticle: function(id) {
      return axios.get("/api/articles/" + id);
    },
    // Deletes the article with the given id
    deleteArticle: function(id) {
      return axios.delete("/api/articles/" + id);
    },
    // Saves a article to the database
    saveArticle: function(articleData) {
      return axios.post("/api/articles", articleData);
    }
  };
