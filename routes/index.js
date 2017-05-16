const router = require("express").Router();

router.use(require("./yelpApi.js"));
router.use(require("./business.js"));
router.use(require("./twitterAuth.js"));

router.get("*", function (req, res) {
    res.render("index.ejs");
});

module.exports = router;