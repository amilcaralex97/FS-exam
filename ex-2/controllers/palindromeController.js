class Palindrome {
  constructor() {}

  static isPalindrome(req, res) {
    try {
      const { palindrome } = req.body;
      const lowerPalindrome = palindrome.toLowerCase();
      let reverseString = [];
      for (let char = lowerPalindrome.length - 1; char >= 0; char--) {
        if (lowerPalindrome[char] === " ") {
          continue;
        } else {
          reverseString.push(lowerPalindrome[char]);
        }
      }

      if (
        palindrome.split(" ").join("").toLowerCase() === reverseString.join("")
      ) {
        return res.json(true);
      } else {
        return res.json(false);
      }
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Palindrome;
