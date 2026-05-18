// db.products.find(
//     {
//         brand:'Apple'
//     },
//     {
//         name:1,
//         price:1,
//         category:1,
//         brand:1,
//         _id:0
//     }
// ).sort({price:-1})


// db.products.aggregate([
//     {
//         $match: {
//             brand: 'Apple'
//         }
//     },
//     {
//         $project: {
//             name: 1,
//             price: 1,
//             category: 1,
//             brand: 1,
//             _id: 0
//         }
//     },
//     {
//         $sort: {
//             price: -1
//         }
//     }
// ])



// db.products.aggregate([
//     {
//         $match: {
//           category:'Mobile'
//         }
//     },
//     {
//         $project: {
//           name:1,
//           category:1,
//         //   ratings:1,
//           _id:0,
//           averageRating: {
//             $avg: '$ratings'
//           }
//         }
//     }
// ])

// db.products.aggregate([
//     {
//         $group: {
//             _id: '$category',
//             count: {
//                 $sum: 1
//             },
//             total: {
//                 $sum: '$price',
//             },
//             details: {
//                 $push: {
//                     productName: '$name',
//                     price: '$price'
//                 }
//             },
//         }
//     }
// ])


// db.products.aggregate([
//     {
//         $project: {
//           name:1,
//           price:1,
//           _id:0,
//           productName:{
//             $toUpper: '$name'
//           },
//           price: {
//             $sum: ['$price', 5]
//           },
//           inStock: 'True',
//         }
//     },
//     {
//         $sort: {
//           price: -1
//         }
//     }
// ])


// db.orders.aggregate([
//     {
//         $lookup: {
//           from: 'products',
//           localField: 'products.productId',
//           foreignField: '_id',
//           as: 'productDetails'
//         }
//     }
// ])



// db.orders.aggregate([
//     {
//         $project: {
//           products: 1,
//         }
//     },
//     {
//         $unwind: '$products'
//     }
// ])


db.orders.aggregate([
    {
        $match: {
            orderDate: {
                $gt: new Date(Date.now() - 24 * 60 * 60 * 1000)
            }
        }
    },
    {
        $project: {
          quantityDetails: '$products'
        }
    },
    {
        $unwind: '$quantityDetails'
    },
    {
        $lookup: {
          from: 'products',
          localField: 'quantityDetails.productId',
          foreignField: '_id',
          as: 'productDetails'
        }
    },
    {
        $unwind: '$productDetails'
    },
    {
        $group: {
          _id: '$productDetails.category',
          totalRevenue: {
            $sum: {
                $multiply: ['$quantityDetails.quantity', '$productDetails.price']
            }
          }
        //   details: {
        //     $push: {
        //         quantityDetails: '$quantityDetails',
        //         productDetails: '$productDetails'
        //     }
        //   }
        }
    }
])