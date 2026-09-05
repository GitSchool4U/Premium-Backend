// PRODUCTS***********
db.products.insertMany([
  {
    _id: 101,
    name: "iPhone 15",
    category: "Mobile",
    brand: "Apple",
    price: 85000,
    stock: 12,
    tags: ["electronics", "phone", "ios"],
    ratings: [5, 4, 5, 3, 4],
    createdAt: new Date("2025-01-10")
  },
  {
    _id: 102,
    name: "Samsung S24",
    category: "Mobile",
    brand: "Samsung",
    price: 72000,
    stock: 20,
    tags: ["android", "electronics"],
    ratings: [4, 4, 5],
    createdAt: new Date("2025-02-11")
  },
  {
    _id: 103,
    name: "MacBook Air",
    category: "Laptop",
    brand: "Apple",
    price: 120000,
    stock: 7,
    tags: ["laptop", "macos"],
    ratings: [5, 5, 5],
    createdAt: new Date("2024-09-01")
  },
  {
    _id: 104,
    name: "Boat Headphones",
    category: "Accessories",
    brand: "Boat",
    price: 2500,
    stock: 50,
    tags: ["audio", "music"],
    ratings: [3, 4, 4],
    createdAt: new Date("2025-03-14")
  },
  {
    _id: 105,
    name: "Gaming Mouse",
    category: "Accessories",
    brand: "Logitech",
    price: 1800,
    stock: 35,
    tags: ["gaming", "pc"],
    ratings: [5, 4, 4, 5],
    createdAt: new Date("2025-01-20")
  }
])



// // ORDERS *************
db.orders.insertMany([
  {
    _id: 1001,
    userId: 1,
    products: [
      {
        productId: 101,
        quantity: 1,
      },
      {
        productId: 104,
        quantity: 2,
      }
    ],
    totalAmount: 90000,
    status: "Delivered",
    paymentMethod: "UPI",
    shippingAddress: {
      city: "Bhagalpur",
      state: "Bihar"
    },
    orderDate: new Date("2025-04-01")
  },
  {
    _id: 1002,
    userId: 2,
    products: [
      {
        productId: 102,
        quantity: 1,
      }
    ],
    totalAmount: 72000,
    status: "Pending",
    paymentMethod: "Card",
    shippingAddress: {
      city: "Patna",
      state: "Bihar"
    },
    orderDate: new Date("2025-04-05")
  },
  {
    _id: 1003,
    userId: 3,
    products: [
      {
        productId: 103,
        quantity: 1,
      },
      {
        productId: 105,
        quantity: 2,
      }
    ],
    totalAmount: 123600,
    status: "Delivered",
    paymentMethod: "NetBanking",
    shippingAddress: {
      city: "Delhi",
      state: "Delhi"
    },
    orderDate: new Date("2025-04-10")
  },
  {
    _id: 1004,
    userId: 1,
    products: [
      {
        productId: 105,
        quantity: 3,
      }
    ],
    totalAmount: 5400,
    status: "Cancelled",
    paymentMethod: "COD",
    shippingAddress: {
      city: "Bhagalpur",
      state: "Bihar"
    },
    orderDate: new Date("2025-04-15")
  },
  {
    _id: 1011,
    userId: 2,
    products: [
      {
        productId: 101,
        quantity: 1,
      },
      {
        productId: 104,
        quantity: 2,
      }
    ],
    totalAmount: 90000,
    status: "Delivered",
    paymentMethod: "UPI",
    shippingAddress: {
      city: "Patna",
      state: "Bihar"
    },
    orderDate: new Date()
  },
  {
    _id: 1012,
    userId: 1,
    products: [
      {
        productId: 103,
        quantity: 1,
      }
    ],
    totalAmount: 120000,
    status: "Delivered",
    paymentMethod: "Card",
    shippingAddress: {
      city: "Bhagalpur",
      state: "Bihar"
    },
    orderDate: new Date(Date.now() - 5 * 60 * 60 * 1000)
  },
  {
    _id: 1013,
    userId: 3,
    products: [
      {
        productId: 105,
        quantity: 3,
      }
    ],
    totalAmount: 5400,
    status: "Pending",
    paymentMethod: "COD",
    shippingAddress: {
      city: "Delhi",
      state: "Delhi"
    },
    orderDate: new Date(Date.now() - 10 * 60 * 60 * 1000)
  }
])