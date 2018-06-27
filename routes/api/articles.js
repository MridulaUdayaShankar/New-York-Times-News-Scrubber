const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/books"
  router.route("/")
    .get(articlesController.getArticles);

  // Matches with "/api/articles"
  router.route("/api/articles")
    .get(articlesController.findAll)
    .post(articlesController.create);

  // Matches with "/api/articles/:id"
  router
    .route("/api/articles/:id")
    .get(articlesController.findById)
    .put(articlesController.update)
    .delete(articlesController.remove);



  router.route("/search")

module.exports = router;
