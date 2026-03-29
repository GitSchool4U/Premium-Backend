use('ecommerce')

db.products.find({}, { tags: 1 })

// db.products.updateMany(
//     {},
//     {$set: {title:'MKL'}}
// )

// db.products.updateMany(
//     {},
//     {$unsert: {title:''}}
// )

// db.products.updateMany(
//     {},
//     {$inc: {stock: -5}}
// )

// db.products.updateMany(
//     {},
//     {$mul: {stock: 2}}
// )

// db.products.updateMany(
//     {},
//     {$rename: {satock: 'stock'}}
// )

// db.products.updateMany(
//     {},
//     {$min: {stock: 100}}
// )

// db.products.updateMany(
//     {},
//     {$max: {stock: 100}}
// )

// db.products.updateMany(
//     {},
//     { $push: { tags: 'mkl' } }
// )

// db.products.updateMany(
//     {},
//     { $pull: { tags: 'mkl' } }
// )

// db.products.updateMany(
//     {},
//     { $addToSet: { tags: 'beauty' } }
// )