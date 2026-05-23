// **********SAMPLE DATA**************
// *DETAILED ORDERS COLLECTION 
// db.orders.insertMany([
//     {
//         customer: "Manas",
//         city: "Patna",
//         products: [
//             { name: "Laptop", category: "Electronics", price: 50000, quantity: 1 },
//             { name: "Mouse", category: "Electronics", price: 1000, quantity: 2 },
//             { name: "Keyboard", category: "Electronics", price: 2500, quantity: 1 }
//         ],
//         paymentMethod: "UPI",
//         status: "Delivered"
//     },

//     {
//         customer: "Rahul",
//         city: "Delhi",
//         products: [
//             { name: "Shoes", category: "Fashion", price: 3000, quantity: 2 }
//         ],
//         paymentMethod: "Card",
//         status: "Delivered"
//     },

//     {
//         customer: "Priya",
//         city: "Mumbai",
//         products: [
//             { name: "Phone", category: "Electronics", price: 35000, quantity: 1 },
//             { name: "Cover", category: "Accessories", price: 500, quantity: 2 },
//             { name: "Charger", category: "Electronics", price: 1200, quantity: 1 }
//         ],
//         paymentMethod: "COD",
//         status: "Pending"
//     },

//     {
//         customer: "Manas",
//         city: "Patna",
//         products: [
//             { name: "Monitor", category: "Electronics", price: 15000, quantity: 1 }
//         ],
//         paymentMethod: "COD",
//         status: "Pending"
//     },

//     {
//         customer: "Sneha",
//         city: "Patna",
//         products: [
//             { name: "Bag", category: "Fashion", price: 1800, quantity: 1 },
//             { name: "Perfume", category: "Beauty", price: 2200, quantity: 1 }
//         ],
//         paymentMethod: "UPI",
//         status: "Delivered"
//     },

//     {
//         customer: "Rahul",
//         city: "Delhi",
//         products: [
//             { name: "T-Shirt", category: "Fashion", price: 1200, quantity: 3 },
//             { name: "Jeans", category: "Fashion", price: 2500, quantity: 1 }
//         ],
//         paymentMethod: "UPI",
//         status: "Delivered"
//     },

//     {
//         customer: "Aman",
//         city: "Kolkata",
//         products: [
//             { name: "Watch", category: "Accessories", price: 5000, quantity: 1 }
//         ],
//         paymentMethod: "Card",
//         status: "Delivered"
//     },

//     {
//         customer: "Neha",
//         city: "Mumbai",
//         products: [
//             { name: "Face Wash", category: "Beauty", price: 500, quantity: 3 },
//             { name: "Nail Paint", category: "Beauty", price: 300, quantity: 5 }
//         ],
//         paymentMethod: "Card",
//         status: "Delivered"
//     },

//     {
//         customer: "Priya",
//         city: "Mumbai",
//         products: [
//             { name: "Lipstick", category: "Beauty", price: 800, quantity: 4 }
//         ],
//         paymentMethod: "UPI",
//         status: "Delivered"
//     },

//     {
//         customer: "Vikash",
//         city: "Delhi",
//         products: [
//             { name: "Tablet", category: "Electronics", price: 20000, quantity: 1 },
//             { name: "Keyboard", category: "Electronics", price: 3000, quantity: 1 }
//         ],
//         paymentMethod: "UPI",
//         status: "Delivered"
//     },

//     {
//         customer: "Arjun",
//         city: "Patna",
//         products: [
//             { name: "Headphones", category: "Electronics", price: 2500, quantity: 2 }
//         ],
//         paymentMethod: "Card",
//         status: "Delivered"
//     },

//     {
//         customer: "Manas",
//         city: "Patna",
//         products: [
//             { name: "Speaker", category: "Electronics", price: 6000, quantity: 1 },
//             { name: "Gaming Mouse", category: "Electronics", price: 3500, quantity: 1 }
//         ],
//         paymentMethod: "UPI",
//         status: "Delivered"
//     },

//     {
//         customer: "Rohit",
//         city: "Delhi",
//         products: [
//             { name: "TV", category: "Electronics", price: 45000, quantity: 1 },
//             { name: "Sound Bar", category: "Electronics", price: 8000, quantity: 1 }
//         ],
//         paymentMethod: "COD",
//         status: "Delivered"
//     },

//     {
//         customer: "Sneha",
//         city: "Patna",
//         products: [
//             { name: "Heels", category: "Fashion", price: 2800, quantity: 1 }
//         ],
//         paymentMethod: "UPI",
//         status: "Pending"
//     },

//     {
//         customer: "Aman",
//         city: "Kolkata",
//         products: [
//             { name: "Perfume", category: "Beauty", price: 2200, quantity: 2 },
//             { name: "Face Cream", category: "Beauty", price: 1200, quantity: 1 }
//         ],
//         paymentMethod: "UPI",
//         status: "Cancelled"
//     },

//     {
//         customer: "Pooja",
//         city: "Bangalore",
//         products: [
//             { name: "Dress", category: "Fashion", price: 4000, quantity: 1 },
//             { name: "Handbag", category: "Fashion", price: 3500, quantity: 1 }
//         ],
//         paymentMethod: "Card",
//         status: "Delivered"
//     },

//     {
//         customer: "Neha",
//         city: "Mumbai",
//         products: [
//             { name: "Hair Dryer", category: "Electronics", price: 2500, quantity: 1 }
//         ],
//         paymentMethod: "UPI",
//         status: "Pending"
//     },

//     {
//         customer: "Arjun",
//         city: "Patna",
//         products: [
//             { name: "Speaker", category: "Electronics", price: 6000, quantity: 1 },
//             { name: "Mic", category: "Electronics", price: 2500, quantity: 1 }
//         ],
//         paymentMethod: "UPI",
//         status: "Delivered"
//     },

//     {
//         customer: "Vikash",
//         city: "Delhi",
//         products: [
//             { name: "Monitor", category: "Electronics", price: 15000, quantity: 1 }
//         ],
//         paymentMethod: "COD",
//         status: "Delivered"
//     },

//     {
//         customer: "Rohit",
//         city: "Delhi",
//         products: [
//             { name: "Gaming Mouse", category: "Electronics", price: 3500, quantity: 2 },
//             { name: "Mouse Pad", category: "Accessories", price: 700, quantity: 1 }
//         ],
//         paymentMethod: "UPI",
//         status: "Pending"
//     }
// ])


// *USERS
// db.users.insertMany([
//   {
//     _id: 1,
//     name: "Manas",
//     city: "Patna"
//   },

//   {
//     _id: 2,
//     name: "Rahul",
//     city: "Delhi"
//   },

//   {
//     _id: 3,
//     name: "Priya",
//     city: "Mumbai"
//   },

//   {
//     _id: 4,
//     name: "Sneha",
//     city: "Kolkata"
//   },

//   {
//     _id: 5,
//     name: "Arjun",
//     city: "Patna"
//   }
// ])


// *ORDERS-2
// db.orders2.insertMany([
//   {
//     customerId: 1,
//     product: "Laptop",
//     amount: 50000
//   },

//   {
//     customerId: 1,
//     product: "Mouse",
//     amount: 2000
//   },

//   {
//     customerId: 2,
//     product: "Shoes",
//     amount: 6000
//   },

//   {
//     customerId: 3,
//     product: "Phone",
//     amount: 35000
//   }
// ])



// ***********QUESTIONS***************
// Q.1 Find total sales of each category
// Q.2 Find top spending customer
// Q.3 Show all products bought by each customer
// Q.4 Find customers who spent more than 50,000
// Q.5 Find most sold product
// Q.6 Create pagination using aggregation
// Q.7 Find average order value per city

/* Q.8 Create analytics dashboard data.
        For each category:
            total products sold
            total revenue
            average price
*/

// Q.9 Join users and orders using $lookup
// Q.10 Find users having no orders



// *********SOLUTIONS**********
// Q.1
// db.orders.aggregate([
//     {
//         $unwind: '$products'
//     },
//     {
//         $group: {
//             _id: '$products.category',
//             totalSales: {
//                 $sum: {
//                     $multiply: [
//                         '$products.price',
//                         '$products.quantity'
//                     ]
//                 }
//             }
//         }
//     },
// ])


// Q.2
// db.orders.aggregate([
//     { $unwind: '$products' },
//     {
//         $group: {
//             _id: '$customer',
//             totalSpent: {
//                 $sum: {
//                     $multiply: [
//                         '$products.price',
//                         '$products.quantity'
//                     ]
//                 }
//             }
//         }
//     },
//     {
//         $sort: {
//           totalSpent: -1
//         }
//     },
//     {
//         $limit: 1
//     }
// ])

// Q.3
// db.orders.aggregate([
//     { $unwind: '$products' },
//     {
//         $group: {
//             _id: '$customer',
//             products: {
//                 $push: '$products'
//             }
//         }
//     },
// ])


// Q.4
// db.orders.aggregate([
//     { $unwind: '$products' },
//     {
//         $group: {
//             _id: '$customer',
//             totalSpent: {
//                 $sum: {
//                     $multiply: [
//                         '$products.price',
//                         '$products.quantity'
//                     ]
//                 }
//             }
//         }
//     },
//     {
//         $match: {
//           totalSpent: {$gt: 50000}
//         }
//     }
// ])



// Q.5
// db.orders.aggregate([
//     {
//         $unwind: '$products'
//     },
//     {
//         $group: {
//             _id: '$products.name',
//             totalQuantity: {
//                 $sum: '$products.quantity'
//             }
//         }
//     },
//     {
//         $sort:{
//             totalQuantity: -1
//         }
//     },
//     {
//         $limit:1
//     }
// ])


// Q.6
// let page = 5;
// let limit = 5;
// let noOfSkippedDocuments = (page-1) * limit

// db.orders.aggregate([
//     {
//         $skip: noOfSkippedDocuments
//     },
//     {
//         $limit: limit
//     }
// ])


// Q.7
// db.orders.aggregate([
//     {
//         $unwind: '$products'
//     },
//     {
//         $group: {
//             _id: {
//                 city: '$city',
//                 orderId: '$_id',
//             },
//             totalOrderValue: {
//                 $sum: {
//                     $multiply: [
//                         '$products.price',
//                         '$products.quantity'
//                     ]
//                 }
//             }
//         }
//     },
//     {
//         $group: {
//             _id: '$_id.city',
//             AvgOrderValue: {
//                 $avg: '$totalOrderValue'
//             }
//         }
//     }
// ])



// Q.8
// db.orders.aggregate([
//     {
//         $unwind:'$products'
//     },
//     {
//         $group:{
//             _id: '$products.category',
//             totalProductsSold: {
//                 $sum: '$products.quantity'
//             },
//             totalRevenue:{
//                 $sum:{
//                     $multiply: [
//                         '$products.price',
//                         '$products.quantity'
//                     ]
//                 }
//             },
//             avgPrice: {
//                 $avg: {
//                     $multiply: [
//                         '$products.price',
//                         '$products.quantity'
//                     ]
//                 }
//             }
//         }
//     }
// ])


// Q.9
// db.users.aggregate([
//     {
//         $lookup: {
//           from: 'orders2',
//           localField: '_id',
//           foreignField: 'customerId',
//           as: 'orders'
//         }
//     }
// ])


// Q.10
// db.users.aggregate([
//     {
//         $lookup: {
//           from: 'orders2',
//           localField: '_id',
//           foreignField: 'customerId',
//           as: 'orders'
//         }
//     },
//     {
//         $match: {
//           orders: []
//         }
//     }
// ])