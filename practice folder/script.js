// synchronus programing
// console.log("hello");
// console.log("beautiful");
// console.log("world");
// end   everthing will exceute respectively

// asynchronus programing

// setTimeout(() => {
//   console.log("hello world");
// }, 4000);

// setTimeout(() => {
//   console.log("hello mars");
// }, 2000);

// function khaanaBanao(callback) {
//   console.log("Order diya, ab khaana ban raha hai...");
//   setTimeout(() => {
//     console.log("Khaana tayar hai!");
//     callback(); // Jab khaana ban jaye, callback bulao
//   }, 3000); // 3 sec ka delay
// }

// function serveKaro() {
//   console.log("Khaana table par aa gaya!");
// }

// khaanaBanao(serveKaro);

// function pizzaOrder(callback) {
//   console.log("pizza ka order agya");
//   setTimeout(() => {
//     console.log("pizza bn rha he......");
//     callback();
//   }, 3000);
// }

// function cookPizza(callback) {
//   setTimeout(() => {
//     console.log("Pizza tayyaaaar hogya");
//     callback();
//   }, 1500);
// }

// function deliveringPizza(callback) {
//   setTimeout(() => {
//     console.log("Pizza deliver horha he........");
//     callback();
//   }, 2000);
// }

// function deliveredPizza() {
//   setTimeout(() => {
//     console.log("Pizza deliver hogya");
//   }, 2000);
// }

// pizzaOrder(() => {
//   cookPizza(() => {
//     deliveringPizza(() => {
//       deliveredPizza();
//     });
//   });
// });

// Database

// function getData(dataId) {
//   console.log("data", dataId);
// }
// getData(123);

// function orderPizza(callback) {
//   console.log("We Get Burger Order");
//   callback();
// }

// function pizzaDone() {
//   console.log("Order Done");
// }

// function kiaHalhe() {
//   console.log("kiya hal he pas hogya");
// }

// orderPizza(kiaHalhe);

// second example

// const friend1 = (key) => {
//   console.log("khalo beta mom phali");
//   key();
// };

// const friend2 = () => {
//   console.log("shokat mia ko goli lagi");
// };

// friend1(friend2);

// const orderOne = (data) => {
//   console.log("Order Recipe is .......");
//   setTimeout(() => {
//     console.log("Order is preparing...... ");
//     data();
//   }, 2000);
// };

// const orderTwo = () => {
//   console.log("Order Done.........!");
// };

// orderOne(orderTwo);

// const getData = (data, getNextData) => {
//   setTimeout(() => {
//     if (getNextData) {
//       getNextData();
//     }
//     console.log("data", data);
//   }, 2000);
// };

// getData(1, () => {
//   getData(2, () => {
//     getData(3, () => {
//       getData(4);
//     });
//   });
// });

//promises

// let promise = new Promise((resolve, reject) => {
//   console.log("I am Promise");
//   resolve("Promise Promised");
// });

// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       if (getNextData) {
//         getNextData();
//       }
//     }, 3000);
//   });
// }

// getData(123);

// let myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Burger is Ordered");
//   }, 3000);
// });

// myPromise
//   .then((message) => {
//     console.log(message);
//     return "Step 2: Burger is Cooking 🔥";
//   })
//   .then((message) => {
//     console.log(message);
//     return "Step 3: Burger is Ready 🍽️";
//   })
//   .then((message) => {
//     console.log(message);
//     return "Step 4: Eating the Burger 😋";
//   })
//   .then((message) => {
//     console.log(message);
//     return "Step 5: Meal Finished ✅";
//   })
//   .then((message) => {
//     console.log(message);
//   });

// let myPromise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Step 1: Burger Ordered 🍔");
//   }, 2000);
// });

// myPromise
//   .then((message) => {
//     console.log(message);
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("Step 2: Burger is Cooking 🔥");
//       }, 2000);
//     });
//   })
//   .then((message) => {
//     console.log(message);
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("Step 3: Burger is Ready 🍽️");
//       }, 2000);
//     });
//   })
//   .then((message) => {
//     console.log(message);
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("Step 4: Eating the Burger 😋");
//       }, 2000);
//     });
//   })
//   .then((message) => {
//     console.log(message);
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("Step 5: Meal Finished ✅");
//       }, 2000);
//     });
//   })
//   .then((message) => {
//     console.log(message);
//   });

// let randomNumber = Math.floor(Math.random() * 10);

// let ans = new Promise((resolve, reject) => {
//   if (randomNumber <= 5) {
//     return resolve();
//   } else {
//     return reject();
//   }
// });

// ans
//   .then(() => {
//     console.log("Resolved cuz Number is", randomNumber);
//   })
//   .catch(() => {
//     console.log("Rejected cuz Number is", randomNumber);
//   });

let firstPromise = new Promise((resolve, reject) => {
  return resolve("sogya");
});

let secondPromise = firstPromise.then((data) => {
  console.log(data);
  return new Promise((resolve, reject) => {
    return resolve("uthgya");
  });
});

let thirdPromise = secondPromise.then((data) => {
  console.log(data);
  return new Promise((resolve, reject) => {
    return resolve("namaz pr gya");
  });
});

let fourthPromise = thirdPromise.then((data) => {
  console.log(data);
  return new Promise((resolve, reject) => {
    return resolve("coding shru krdi");
  });
});

fourthPromise.then((data) => {
  console.log(data);
});
