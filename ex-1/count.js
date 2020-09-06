const count = () => {
  let number = 0;
  return () => {
    return (number = number + 1);
  };
};

console.log(count());
console.log(count());
console.log(count());
