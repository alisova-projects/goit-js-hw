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
    for (const item of this.items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
    }

    const newProduct = {
      ...product,
      quantity: 1,
    };

    this.items.push(newProduct);
  },
  remove(productName) {
    // for (let i = 0; i < this.items.length; i += i) {
    //   const item = this.items[i];

    //   if (productName === item.name) {
    //     console.log("нашли такой продукт ", productName);
    //   }
    // } ------------------------------------- или

    const { items } = this;

    for (let i = 0; i < items.length; i += 1) {
      const { name } = items[i];

      if (productName === name) {
        console.log("нашли такой продукт ", productName);
        console.log("индекс: ", i);

        items.splice(i, 1);
      }
    }
  },

  clear() {
    this.items = [];
  },
  countTotalPrice() {
    // console.log(this.items);
    const { items } = this;
    let total = 0;

    for (const { price, quantity } of this.items) {
      total += price * quantity;
    }
    return total;
  },
  increaseQuantity(productName) {
    //передаёшь продукт. если продукт есть в
    // корзине, функция увеличивает количество на 1. если нет, ничё не делает.
  },
  decreaseQuantity(productName) {
    // функция получает имя продукта, ищет его в корзине, если находит -
    //уменьшает значение свойства квонтити на 1, если не находит - ничё не делает.
  },
};

console.log(cart.getItems());

cart.add({ name: "🍎", price: 50 });
cart.add({ name: "🍇", price: 60 });
cart.add({ name: "🍋", price: 60 });
cart.add({ name: "🍋", price: 60 });
cart.add({ name: "🍓", price: 110 });
cart.add({ name: "🍓", price: 110 });
cart.add({ name: "🍓", price: 110 });

console.table(cart.getItems());

console.log("Total: ", cart.countTotalPrice());

cart.remove("🍇");
console.table(cart.getItems());

cart.clear();
console.log(cart.getItems());

console.log("Total: ", cart.countTotalPrice());

// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());
