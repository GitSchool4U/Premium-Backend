// use('shopApp')

// db.users.updateMany(
//     {city:'Bhagalpur'},
//     {$set: {city:'Mumbai'}}
// )

// use('ecommerce')

// db.products.updateOne(
//     {name:'Laptop'},
//     {$set: {price: 500}}
// )

// db.products.updateOne(
//     { name: "Laptop" },
//     { $set: { stock: 10 } }
// )

// db.products.updateMany(
//     { category: "electronics" },
//     { $inc: { stock: 5 } }
// )

use('shopApp')

db.users.updateOne(
    {email:'ravi@gmail.com'},
    {$set:{email:'ravikumar@gmail.com'}}
)