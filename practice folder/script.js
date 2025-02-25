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

function orderPizza(callback) {
  console.log("We Get Burger Order");
  callback();
}

function pizzaDone() {
  console.log("Order Done");
}

function kiaHalhe() {
  console.log("kiya hal he pas hogya");
}

orderPizza(kiaHalhe);
