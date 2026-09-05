// use('test2')

// db.students.insertMany([
//     {
//     name: "Rahul",
//     skills: ["HTML","CSS","JavaScript"],
//     marks: [70,80,90]
//     },
//     {
//     name: "Priya",
//     skills: ["Python","Java"],
//     marks: [60,75]
//     },
//     {
//     name: "Amit",
//     skills: ["JavaScript","NodeJS","MongoDB"],
//     marks: [85,88,92]
//     }
// ])

// db.students.find()

// db.students.find({
//     skills: {$all: ['JavaScript','NodeJS']}
// })

// db.students.find({
//     skills: {$size: 3}
// })

// db.students.find({
//     skills: {$nin: ['JavaScript','NodeJS']}
// })


// db.products.insertMany([
//     {
//     name:"Laptop",
//     reviews:[
//             {user:"Rahul", rating:4},
//             {user:"Amit", rating:5}
//         ]
//     },
//     {
//     name:"Mobile",
//     reviews:[
//             {user:"Priya", rating:3},
//             {user:"Ankit", rating:4},
//             {user:"Rahul", rating:5},
//         ]
//     }
// ])

// wrong approach
// db.products.find({
//     'reviews.user': 'Rahul',
//     'reviews.rating': 5
// })

// db.products.find({
//     reviews:{
//         $elemMatch: {
//             user:'Rahul',
//             rating: 5
//         }
//     }
// })