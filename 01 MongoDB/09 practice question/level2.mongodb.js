use('shopApp')

// db.users.insertOne({
//     name: "Rahul",
//     email: "rahul@gmail.com",
//     city: "Bhagalpur",
//     age: 22
// })

// db.users.insertOne({
//     name: "Amit",
//     email: "amit@gmail.com",
//     city: "Patna",
//     age: 19
// })

// db.users.insertMany([
//     {
//         name: "Neha",
//         email: "neha@gmail.com",
//         city: "Delhi",
//         age: 24
//     },
//     {
//         name: "Ravi",
//         email: "ravi@gmail.com",
//         city: "Bhagalpur",
//         age: 21
//     },
//     {
//         name: "Priya",
//         email: "priya@gmail.com",
//         city: "Mumbai",
//         age: 23
//     }
// ])

db.users.find()

db.users.find({city:'Bhagalpur'})