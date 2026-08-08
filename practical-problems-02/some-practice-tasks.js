/*
  Practice Task 1: Tag Expensive Products
  Given an array of products, return a NEW array where each product
  also has an "expensive" boolean field (true if price >= 1000).
  Original array must not change.

  Input:
    [{ name: "Mouse", price: 600 }, { name: "Monitor", price: 12000 }]

  Output:
    [
      { name: "Mouse", price: 600, expensive: false },
      { name: "Monitor", price: 12000, expensive: true },
    ]
*/

const tagExpensiveProducts = (products) => {
  return products.map((product)=>{
    const {price} = product;
    let statement = price >= 1000;
    return {...product, expensive: statement}
  })
};



/*
  Practice Task 2: Find the First Out-of-Stock Item
  Given an array of items with a "stock" field, return the first item
  where stock === 0. Return undefined if everything is in stock.

  Input:
    [{ name: "Pen", stock: 5 }, { name: "Bag", stock: 0 }]

  Output:
    { name: "Bag", stock: 0 }
*/

const findOutOfStock = (items) => {
  return items.find((item)=>{
    const {stock} = item;
    return stock === 0? true : undefined;
  })
};



/*
  Practice Task 3: Total Marks of Passing Students (Chaining)
  Given students with marks, filter students who passed (marks >= 40),
  then sum their marks — in one chained expression.

  Input:
    [{ name: "Rafi", marks: 80 }, { name: "Karim", marks: 30 }]

  Output:
    80
*/

const totalPassingMarks = (students) => {
  return students.filter((student)=>{
    if(student.marks >= 40) return true
  }).reduce((accumulator, student)=>{
    return accumulator += student.marks;
  }, 0)
};



/*
  Practice Task 4: Closure — Bank Balance Tracker
  createAccount(startingBalance) returns an object with deposit(amount)
  and getBalance() methods. Balance must be private — no direct access
  except through getBalance().

  Input:
    const acc = createAccount(100);
    acc.deposit(50);
    acc.getBalance();

  Output:
    150
*/

// I added name also

const createAccount = (name, startingBalance) => {
  let balance = startingBalance;
  return {
    deposit: (amount)=>{
      balance += amount;
    },
    getBalance: ()=>{
      console.log(`${name}'s account balance is ${balance}`);
    }
  }
};

/*
  Practice Task 5: Sort Products by Price (Ascending) — No Mutation
  Return a NEW array of products sorted by price, low to high. The
  original products array must stay in its original order.

  Input:
    [{ name: "Bag", price: 500 }, { name: "Pen", price: 20 }]

  Output:
    [{ name: "Pen", price: 20 }, { name: "Bag", price: 500 }]
*/

const sortByPriceAscending = (products) => {
  return [...products].sort((a,b)=>{
    return a.price - b.price
  })
};
