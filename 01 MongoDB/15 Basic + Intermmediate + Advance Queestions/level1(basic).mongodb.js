use('test')

// db.users.insertMany([
//     {
//         name: "Rahul Sharma",
//         age: 22,
//         city: "Delhi",
//         email: "rahul@gmail.com",
//         phone: "9876543210",
//         isActive: true
//     },
//     {
//         name: "Priya Singh",
//         age: 27,
//         city: "Mumbai",
//         email: "priya@yahoo.com",
//         isActive: true
//     },
//     {
//         name: "Amit Verma",
//         age: 30,
//         city: "Delhi",
//         email: "amit@gmail.com",
//         phone: "9123456780",
//         isActive: false
//     },
//     {
//         name: "Sneha Gupta",
//         age: 24,
//         city: "Kolkata",
//         email: "sneha@gmail.com",
//         phone: "9988776655",
//         isActive: true
//     },
//     {
//         name: "Rohit Kumar",
//         age: 29,
//         city: "Patna",
//         email: "rohit@yahoo.com",
//         isActive: true
//     },
//     {
//         name: "Ankit Raj",
//         age: 21,
//         city: "Patna",
//         email: "ankit@gmail.com",
//         phone: "8899776655",
//         isActive: false
//     },
//     {
//         name: "Neha Agarwal",
//         age: 26,
//         city: "Delhi",
//         email: "neha@gmail.com",
//         phone: "8877665544",
//         isActive: true
//     },
//     {
//         name: "Riya Das",
//         age: 23,
//         city: "Mumbai",
//         email: "riya@gmail.com",
//         isActive: true
//     },
//     {
//         name: "Karan Malhotra",
//         age: 31,
//         city: "Bangalore",
//         email: "karan@yahoo.com",
//         phone: "9988112233",
//         isActive: false
//     },
//     {
//         name: "Pooja Mishra",
//         age: 28,
//         city: "Lucknow",
//         email: "pooja@gmail.com",
//         phone: "7766554433",
//         isActive: true
//     }
// ])

// Q.1
// db.users.find({city:'Delhi'})

// Q.2
// db.users.find({age:{$gt: 25}})

// Q.3
// db.users.find({age:{$lte: 30}})

// Q.4
// db.users.find({city: {$ne: 'Mumbai'}})
// db.users.find({city:{$nin: ['Mumbai']}})

// Q.5
// db.users.find({
//     $and:[
//         {age:{$gt:20}},
//         {age:{$lt:30}}
//     ]
// })
// db.users.find({
//     age:{$gt:20, $lt:30}
// })

// Q.6
// db.users.find({},{name:1, email:1, _id:0})

// Q.7
// db.users.find({
//     name:{$regex:'^R'}
// })
// db.users.find({
//     name:/^R/
// })

// Q.8
// db.users.find({
//     email:/gmail/
// })

// Q.9
// db.users.find({city:{$exists:true}})

// Q.10
// db.users.find({
//     phone:{$exists:false}
// })

// Q.11
// db.users.find().sort({age:1})

// Q.12
// db.users.find().sort({age:-1})

// Q.13
// db.users.find().limit(5)

// Q.14
// const data = db.users.find().skip(5).limit(2)
// console.log(data)

// Q.15
// db.users.find({
//     age:{$in: [22, 25, 30]}
// })

// Q.16
// db.users.find({
//     age:{$nin: [22, 25, 30]}
// })

// Q.17
// db.users.find().count()
// db.users.countDocuments()

// Q.18
// db.users.find({
//     name:'Rahul Sharma',
//     city:'Delhi'
// })

// Q.19
// db.users.find({
//     $or:[
//         {city:'Mumbai'},
//         {city:'Delhi'}
//     ]
// })

// Q.20
// db.users.find({
//     age:{$lte:30}
// })
// db.users.find({
//     age:{$not: {$gt:30}}
// })

// Q.21
// db.users.find({
//     name:/a$/
// })

// Q.22
// db.users.find({
//     email:/yahoo\.com$/
// })

// Q.23
// db.users.find({
//     age:{$type:'number'}
// })

// Q.24
// db.users.find({
//     age:{
//         $mod:[2, 0]
//     }
// })

// Q.25
// db.users.find({
//     $expr:{
//         $gt:[
//             {$strLenCP: '$name'},
//             5
//         ]
//     }
// })