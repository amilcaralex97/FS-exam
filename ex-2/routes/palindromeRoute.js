const { Router } = require("express");
const Palindrome = require("../controllers/palindromeController");
const router = Router();

router.route("/").post(Palindrome.isPalindrome);

module.exports = router;
