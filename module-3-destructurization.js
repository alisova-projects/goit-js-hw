// const authors = { kiwi: 4, poly: 7, ajax: 9, mango: 6 };

// const entries = Object.entries(authors);

// for (const entry of entries) {
//   //   const name = entry[0]; // 1 variant
//   //   const rating = entry[1];

//   const [name, rating] = entry; // 2 variant

//   console.log(name, rating);
// }
// for (const [name, rating] of entries) {
//   console.log(name, rating);
// } // 3 variant

// ------------------------------------------------------------------------------------

/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    this.items.push(product);
  },
  remove(productName) {
    // for (let i = 0; i < this.items.length; i += 1) {
    //   const item = this.items[i];
    //   //   console.log(item);

    //   if (productName === item.name) {
    //     console.log("нашли такой продукт ", productName);
    //   }
    // }       ------------------------- или
    for (let i = 0; i < this.items.length; i += i) {
      const item = this.items[i];

      if (productName === item.name) {
        console.log("нашли такой продукт ", productName);
      }
    }
  },
  clear() {},
  countTotalPrice() {},
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};

// console.log(cart.getItems());

cart.add({ name: "🍎", price: 50 });
cart.add({ name: "🍇", price: 60 });
cart.add({ name: "🍋", price: 60 });
cart.add({ name: "🍋", price: 60 });
cart.add({ name: "🍓", price: 110 });
cart.add({ name: "🍓", price: 110 });
cart.add({ name: "🍓", price: 110 });

// console.table(cart.getItems());

// console.log("Total: ", cart.countTotalPrice());

cart.remove("🍇");
// console.table(cart.getItems());

// // cart.clear();
// // console.log(cart.getItems());

// console.log("Total: ", cart.countTotalPrice());

// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());
