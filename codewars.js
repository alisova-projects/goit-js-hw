// 1.
// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
// i.e.

// const friend = function (friends) {
//   const myFriends = [];

//   for (const friend of friends) {
//     if (friend.split("").length === 4) {
//       myFriends.push(friend);
//     }
//   }

//   return myFriends;
// };

// console.log(friend(["Ryan", "Kieran", "Mark"]));
// console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]));
// console.log(
//   friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])
// );
// console.log(friend(["Love", "Your", "Face", "1"]));

// 2.
// Very simple, given a number, find its opposite.

// function opposite(number) {
//   if (number > 0 || number < 0) {
//     return number * -1;
//   }
//   return 0;
// }

// console.log(opposite(-34));

// Best Practices:
// function opposite(number) {
//   return (-number);
// }

// или
// function opposite(number) {
//   return number * (-1);
// }

// 3.
