const myCart = [100, 20, 3330];

// const myTotal = myCart.reduce(function (acc, curval) {
//   console.log(`acc: ${acc} and curval: ${curval}`);
//   return acc + curval;
// }, 0);

const myTotal = myCart.reduce((acc, curval) => acc + curval, 0);
console.log(myTotal);
