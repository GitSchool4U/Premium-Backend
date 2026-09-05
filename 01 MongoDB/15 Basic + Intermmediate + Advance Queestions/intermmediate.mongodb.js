use('test')

// db.products.insertMany([
//     {
//         name: "Gaming Laptop",
//         price: 75000,
//         category: "electronics",
//         stock: 15,
//         discount: 10,
//         tags: ["gaming", "laptop", "electronics"]
//     },
//     {
//         name: "Smartphone",
//         price: 25000,
//         category: "electronics",
//         stock: 8,
//         discount: 15,
//         tags: ["phone", "android", "electronics"]
//     },
//     {
//         name: "Wireless Mouse",
//         price: 800,
//         category: "accessories",
//         stock: 50,
//         discount: 5,
//         tags: ["mouse", "computer", "electronics"]
//     },
//     {
//         name: "Mechanical Keyboard",
//         price: 3500,
//         category: "accessories",
//         stock: 20,
//         discount: 12,
//         tags: ["keyboard", "gaming", "computer"]
//     },
//     {
//         name: "LED Monitor",
//         price: 12000,
//         category: "electronics",
//         stock: 5,
//         discount: 18,
//         tags: ["monitor", "display", "electronics"]
//     },
//     {
//         name: "Office Chair",
//         price: 6000,
//         category: "furniture",
//         stock: 0,
//         discount: 20,
//         tags: ["chair", "office", "furniture"]
//     },
//     {
//         name: "Gaming Headset",
//         price: 4500,
//         category: "electronics",
//         stock: 12,
//         discount: 25,
//         tags: ["gaming", "audio", "electronics"]
//     }
// ])

// Q.27
// db.products.find({
//     price:{$gt:1000}
// })

// Q.28
// db.products.find({
//     price:{$gt:500, $lt:2000}
// })


// Q.29
// db.products.find({
//     category:'electronics'
// })


// Q.30
// db.products.find({
//     stock:0
// })

// Q.31
// db.products.find().sort({price:1})

// Q.32
// db.products.find().sort({price:-1}).limit(5)

// Q.33
// db.products.find({
//     name: /Phone/i
// })

// Q.34
// db.products.find({
//     discount:{$gt:20}
// })

// Q.35
// db.products.find({
//     category:{$ne:'electronics'}
// })

// Q.36
// db.products.find({
//     tags:'gaming'
// })
// db.products.find({
//     tags:{
//         $in:['gaming']
//     }
// })

// Q.37
// db.products.find({
//     tags:{
//         $all:['gaming','laptop']
//     }
// })

// Q.38.
// db.products.find({
//     tags:{$size:3}
// })

// Q.39
// db.products.updateOne(
//     {name:'Gaming Laptop'},
//     {$push:{tags:'new'}}
// )
// db.products.find()

// Q.40
// db.products.updateOne(
//     {name:'Gaming Laptop'},
//     {$pull:{tags:'new'}}    
// )
// db.products.find()


// db.orders.insertMany([
//     {
//         user: "Rahul Sharma",
//         totalAmount: 80000,
//         status: "delivered",
//         orderDate: new Date("2025-02-10")
//     },
//     {
//         user: "Priya Singh",
//         totalAmount: 3000,
//         status: "pending",
//         orderDate: new Date("2025-03-01")
//     },
//     {
//         user: "Amit Verma",
//         totalAmount: 15000,
//         status: "cancelled",
//         orderDate: new Date("2024-12-15")
//     },
//     {
//         user: "Rahul Sharma",
//         totalAmount: 4500,
//         status: "delivered",
//         orderDate: new Date("2025-01-20")
//     },
//     {
//         user: "Sneha Gupta",
//         totalAmount: 1200,
//         status: "pending",
//         orderDate: new Date("2025-03-05")
//     }
// ])

// Q.41.
// db.orders.find({
//     user: /Rahul/
// })

// Q.43.
// db.orders.find({
//     orderDate: {$gt: new Date('2025-01-01')}
// })

// Q.44.
// db.orders.find({
//     status: 'delivered'
// })

// Q.45.
// db.orders.find({
//     status: {$ne: 'cancelled'}
// })

// Q.46.
// db.products.updateMany(
//     {},
//     {$mul: { price: 1.1 }}
// )
// db.products.find()

// Q.47
// db.products.updateMany(
//     {},
//     {$inc: {stock: 50}}
// )


// Q.48
// db.products.updateMany(
//     {},
//     {$rename: {price: 'productPrice'}}
// )
// db.products.find()

// Q.49
// db.products.updateMany(
//     {},
//     {$unset:{discount: 0}}
// )
// db.products.find()

// Q.50
// db.products.updateMany(
//     {},
//     {$set: {featured:true}}
// )
// db.products.find()

// Q.51
// db.products.deleteMany({
//     stock:0
// })

// db.users.updateMany(
//     {},
//     {$set: {
//         orders:[],
//         wishlist:[],
//         cart:[],
//     }}
// )

// db.users.updateMany(
//     {},
//     {$push: {orders: {id: 101}}}
// )
// db.users.find()
// db.users.updateMany(
//     {name: 'Rahul Sharma'},
//     {$pull: {orders: {id: 101}}}
// )

// Q.52
// db.users.deleteOne({
//     orders: {$size: 0}
// })

// Q.53
// db.orders.deleteMany(
//     { orderDate: { $lt: new Date(new Date().setFullYear(new Date().getFullYear() - 5)) } }
// )

// db.blogs.insertMany([
//     {
//         title: "MongoDB Basics",
//         views: 120,
//         comments: [
//             { user: "Rahul", text: "Great tutorial" },
//             { user: "Amit", text: "Very helpful" }
//         ]
//     },
//     {
//         title: "JavaScript Async Guide",
//         views: 300,
//         comments: [
//             { user: "Priya", text: "Awesome explanation" }
//         ]
//     },
//     {
//         title: "Node.js Performance Tips",
//         views: 80,
//         comments: []
//     }
// ])

// Q.54
// db.blogs.updateMany(
//     {},
//     {$inc: {views: 1}}
// )
db.blogs.find()

// Q.55
// db.blogs.updateOne(
//     { title: 'JavaScript Async Guide' },
//     {
//         $push:
//         {
//             comments:
//                 { user: 'manas', text:'bhaut hi badhiya javascript ka course hai' }
//         }
//     }
// )

// Q.56
// db.blogs.updateOne(
//     {title: 'MongoDB Basics'},
//     {$pull: {comments: {user: 'Amit'}}}
// ) 
// db.blogs.find()

db.users.find()


// Q.57
// db.users.updateOne(
//     {name:'Amit Verma'},
//     {$push: {wishlist: {id: 101}}}
// )