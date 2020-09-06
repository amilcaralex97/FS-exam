//A closure gives you access to an outer function’s scope from an inner function.
//It makes counter variable "private in coount function and"
//the child function can access to it and modify it and can protect the counter variable

const count = (function () {
  let counter = 0;
  return function () {
    return (counter += 1);
  };
})();

module.exports = count;
