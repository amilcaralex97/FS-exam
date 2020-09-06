const count = require("./count");

test("Count 4 function calls should return 4", () => {
  count();
  count();
  count();
  expect(count()).toBe(4);
});
