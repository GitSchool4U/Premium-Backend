use('test')

// db.employees.insertMany([
//   {
//     name: "Rahul",
//     salary: 50000,
//     bonus: 10000
//   },
//   {
//     name: "Priya",
//     salary: 60000,
//     bonus: 5000
//   },
//   {
//     name: "Amit",
//     salary: 45000,
//     bonus: 15000
//   },
//   {
//     name: "Neha",
//     salary: 70000,
//     bonus: 2000
//   }
// ])

// db.employees.updateOne(
//     { name: 'Rahul' },
//     { $set: { salary: 8000 } }
// )

// db.employees.find()

// db.employees.find({
//     $expr:{
//         $gt:['$salary','$bonus']
//     }
// })

// db.employees.find({
//     $expr:{
//         $gt:[
//             {$add:['$salary', '$bonus']},
//             60000
//         ]
//     }
// })


// db.products.insertMany([
//   {
//     name: "Laptop",
//     price: 60000,
//     discountPrice: 55000
//   },
//   {
//     name: "Phone",
//     price: 30000,
//     discountPrice: 31000
//   },
//   {
//     name: "Tablet",
//     price: 20000,
//     discountPrice: 18000
//   },
//   {
//     name: "Headphones",
//     price: 5000,
//     discountPrice: 4500
//   }
// ])

// db.products.find({
//     $expr:{
//         $gt:['$price','$discountPrice']
//     }
// })

// db.students.insertMany([
//   {
//     name: "Ravi",
//     maths: 80,
//     science: 70
//   },
//   {
//     name: "Anita",
//     maths: 60,
//     science: 75
//   },
//   {
//     name: "Karan",
//     maths: 90,
//     science: 85
//   },
//   {
//     name: "Pooja",
//     maths: 50,
//     science: 65
//   }
// ])

// db.students.find({
//     $expr:{
//         $gt:['$maths','$science']
//     }
// })

// regex
// db.students.find({
//     name: { $regex: '^R' }
// })


// db.numbers.insertMany([
//     {value:10},
//     {value:2},
//     {value:5},
//     {value:3},
//     {value:13},
//     {value:200},
//     {value:215},
// ])

// db.numbers.find({
//     value: { $mod: [10, 0] }
// })
