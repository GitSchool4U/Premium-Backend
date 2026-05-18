use('test')

// db.students.insertOne({
//     _id:2,
//     name:'rahul',
//     courses:[
//         {
//             _id:1,
//             name:'BCA',
//             price:150000,
//             duration:3
//         },
//     ]
// })

// db.students.find(
//     { 'courses.name': 'Graphic Design' }
// )

// db.students.insertOne({
//     _id: 3,
//     name:'mohit',
//     address:{
//         city:'bhagalpur',
//         state:'bihar',
//         pincode:812004,
//     }
// })


// db.students.updateOne(
//     {'address.city':'bhagalpur'},
//     {$set: {'address.city':'patna'}}
// )

// db.students.find()

// db.students.find({},{'address.city':1, _id: 0})


// db.courses.insertOne({
//     _id: 2,
//     name: 'Graphic Design',
//     price: 150000,
//     duration: 1
// })

// db.courses.find()

// db.students.insertOne({
//     _id:5,
//     name:'maha faltu',
//     courses:[1, 2]
// })

// db.students.find();

// db.students.aggregate([
//     {
//         $lookup:{
//             from: 'courses',
//             localField:'courses',
//             foreignField: '_id',
//             as:'coursesDetails'
//         }
//     }
// ])
