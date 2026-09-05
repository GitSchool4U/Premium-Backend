# employees

db.employees.insertMany([
  {
    name: "Rahul",
    salary: 50000,
    bonus: 10000
  },
  {
    name: "Priya",
    salary: 60000,
    bonus: 5000
  },
  {
    name: "Amit",
    salary: 45000,
    bonus: 15000
  },
  {
    name: "Neha",
    salary: 70000,
    bonus: 2000
  }
])

- Find employees jahan salary bonus se zyada hai
- Find employees jahan salary + bonus > 60000


# products

db.products.insertMany([
  {
    name: "Laptop",
    price: 60000,
    discountPrice: 55000
  },
  {
    name: "Phone",
    price: 30000,
    discountPrice: 31000
  },
  {
    name: "Tablet",
    price: 20000,
    discountPrice: 18000
  },
  {
    name: "Headphones",
    price: 5000,
    discountPrice: 4500
  }
])

- Find products jahan price discountPrice se zyada hai

# orders

db.orders.insertMany([
  {
    product: "Mouse",
    stock: 50,
    sold: 30
  },
  {
    product: "Keyboard",
    stock: 40,
    sold: 45
  },
  {
    product: "Monitor",
    stock: 20,
    sold: 10
  },
  {
    product: "Printer",
    stock: 15,
    sold: 15
  }
])

- Find products jahan stock sold se zyada hai

# students

db.students.insertMany([
  {
    name: "Ravi",
    maths: 80,
    science: 70
  },
  {
    name: "Anita",
    maths: 60,
    science: 75
  },
  {
    name: "Karan",
    maths: 90,
    science: 85
  },
  {
    name: "Pooja",
    maths: 50,
    science: 65
  }
])

- Find students jahan maths marks science se zyada hain