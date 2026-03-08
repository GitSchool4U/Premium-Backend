use('ecommerce')

// db.createCollection('products')

// db.products.insertMany([
//     {
//         name: "iPhone",
//         price: 80000,
//         category: "electronics",
//         stock: 10
//     },
//     {
//         name: "Laptop",
//         price: 60000,
//         category: "electronics",
//         stock: 5
//     },
//     {
//         name: "Headphones",
//         price: 2000,
//         category: "electronics",
//         stock: 20
//     },
//     {
//         name: "Shoes",
//         price: 3000,
//         category: "fashion",
//         stock: 15
//     }
// ])

// db.products.find()
// db.products.find({"category": "electronics"})


db.products.countDocuments()