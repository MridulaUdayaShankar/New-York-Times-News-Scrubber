const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/books"
router.route("/")
  .get(articlesController.getArticles);
  
module.exports = router;
