const express = require('express');
const { GenerateNewShortURL,
    GetAnalytics,
    handleRedirectURL,
 } = require("../controllers/url")
const router = express.Router();

router.post("/",GenerateNewShortURL);
router.get("/analytics/:shortId",GetAnalytics);
router.get("/:shortId",handleRedirectURL);

module.exports = router;