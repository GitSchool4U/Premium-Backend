use('test')


// db.products.insertMany([
//     {
//         name: "Gaming Laptop",
//         price: 85000,
//         category: "electronics",
//         stock: 8,
//         discount: 15,
//         tags: ["gaming", "laptop", "electronics"],
//         reviews: [
//             { user: "Rahul", rating: 5 },
//             { user: "Amit", rating: 4 },
//             { user: "Priya", rating: 5 }
//         ]
//     },
//     {
//         name: "Office Laptop",
//         price: 55000,
//         category: "electronics",
//         stock: 12,
//         discount: 10,
//         tags: ["laptop", "office", "electronics"],
//         reviews: [
//             { user: "Rahul", rating: 3 },
//             { user: "Sneha", rating: 4 }
//         ]
//     },
//     {
//         name: "Gaming Mouse",
//         price: 1500,
//         category: "accessories",
//         stock: 30,
//         discount: 8,
//         tags: ["gaming", "mouse", "computer"],
//         reviews: [
//             { user: "Amit", rating: 5 },
//             { user: "Rahul", rating: 4 }
//         ]
//     },
//     {
//         name: "Mechanical Keyboard",
//         price: 4000,
//         category: "accessories",
//         stock: 20,
//         discount: 12,
//         tags: ["keyboard", "gaming", "computer"],
//         reviews: [
//             { user: "Priya", rating: 5 },
//             { user: "Rahul", rating: 4 }
//         ]
//     },
//     {
//         name: "LED Monitor",
//         price: 12000,
//         category: "electronics",
//         stock: 0,
//         discount: 20,
//         tags: ["monitor", "display", "electronics"],
//         reviews: []
//     }
// ])

// Q.61
// db.products.find({
//     'reviews.user': 'Rahul'
// })

// Q.62
// db.products.find({
//     'reviews.user':'Rahul',
//     'reviews.rating':5
// })
// or
// db.products.find({
//     reviews:{
//         $elemMatch: {
//             user:'Rahul',
//             rating:5
//         }
//     }
// })

// Q.63
// db.products.find({
//     'reviews.rating': {$gte: 4}
// })

// Q.64
// db.products.find({
//     reviews:{
//         $elemMatch: {
//             rating: {$gte:4}
//         }
//     }
// })

// Q.65
// db.products.find({
//     $expr:{
//         $gt:[{$size:'$reviews'}, 2]
//     }
// })

// Q.66
// db.products.find({
//     price: {$gt:5000},
//     stock: {$lt:10}
// })


// Q.67
// db.products.find({
//     discount: {$gt:10, $lt:30}
// })

// Q.68
// db.products.find({
//     name: /^G/
// })

// Q.69
// db.products.find({
//     name: /Laptop$/
// })

// Q.70
// db.products.find({
//     tags:'gaming'
// })

// Q.71, 72 repititive

// Q.73
// db.products.find({
//     stock: {$mod: [2, 0]}
// })

// Q.74
// db.products.find({
//     $expr:{
//         $gt:[{$strLenCP: '$name'}, 13]
//     }
// })

// Q.75
// db.products.find({
//     discount: {$exists: true}
// })


// Q.76
// db.products.updateOne(
//     {name: 'Gaming Laptop'},
//     {$push: {
//         reviews: {
//             user: 'mkl',
//             rating: 5
//         }
//     }}
// )
// db.products.find()


// Q.77
// db.products.updateOne(
//     {'reviews.user': 'Rahul'},
//     {$set : {
//         'reviews.$.rating': 1
//     }}
// )
// db.products.updateOne(
//     {'reviews.user':'Priya'},
//     {$set: {
//         'reviews.$.rating': 2
//     }}
// )
// db.products.find()


// Q.78
// db.products.updateOne(
//     {name: 'Gaming Laptop'},
//     {$pull: {
//         reviews: {
//             user: 'Amit'
//         }
//     }}
// )
// db.products.find()

// Q.79
// db.products.updateOne(
//     {name: 'Gaming Laptop'},
//     {$push: {
//         tags: {
//             $each: ['pc','setup']
//         }
//     }}
// )
// db.products.find()


// Q.80
// db.products.updateOne(
//     {name: 'Gaming Laptop'},
//     {$pull: {
//         tags: 'gaming'
//     }}
// )
// db.products.find()

// Q.81
// db.products.updateOne(
//     {name: 'Gaming Laptop'},
//     {$pull: {
//         tags: {
//             $in: ['pc', 'setup']
//         }
//     }}
// )
// db.products.find()


// Q.84**
// db.products.find({
//     reviews: {
//         $not: {
//             $elemMatch: {
//                 rating: { $lt: 4 }
//             }
//         },
//     },
//     'reviews.0': {$exists: true}
// })


// Q.86
db.products.find({
    reviews: {
        $elemMatch: {
            user: 'Rahul',
            rating: { $lt: 3 }
        }
    }
})


// Q.87
// db.products.find().sort({stock: -1}).limit(1)

// Q.88
// db.products.updateMany(
//     {discount: {$gt: 18}},
//     {$push: {
//         tags: 'sale',
//     }}
// )
// db.products.find()


// Q.89
// db.products.updateMany(
//     {$expr:{
//         $lt: [{$size: '$reviews'},5]
//     }},
//     {$push: {
//         reviews: {
//             user: 'manas',
//             rating: 10
//         }
//     }}
// )

// Q.90
// db.products.find({
//     $expr:{
//         $gt: ['$price','$stock']
//     }
// })

// Q.91
// db.products.find({
//     $or: [
//         {discount: {$exists: false}},
//         {discount: 12}
//     ]
// })

// Q.92
// db.products.find({
//     $expr:{
//         $gt: [{$strLenCP:'$name'},{$strLenCP:'category'}]
//     }
// })

// Q.93
// db.products.find({
//     price: {$gt: 10000, $lt: 40000},
//     stock: 0
// })

// Q.96
// db.products.find({
//     stock: {$gt: 5 , $lt: 20, $ne: 12}
// })

// Q.97
// db.products.find({
//     $or: [
//         {discount: {$gt: 20}},
//         {stock: {$lt: 5}}
//     ]
// })

// Q.98
// db.products.find({
//     $and: [
//         { tags: { $nin: ['mobile'] } },
//         { tags: 'gaming' },
//     ]
// }
// )

// Q.99
// db.products.find({
//     $expr: {
//         $and: [
//             { $gt: [{ $size: '$reviews' }, 2] },
//             { $lt: [{ $size: '$reviews' }, 5] },
//         ]
//     }
// })


// Q.100
db.products.find({
    $reviews:{
        $not: {
            $elemMatch:{
                rating: {$lt: 3}
            }
        }
    }
})