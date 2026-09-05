// 1. Find all users from Delhi
db.users.find({ city: "Delhi" })


// 2. Find users whose age is greater than 25
db.users.find({ age: { $gt: 25 } })


// 3. Find users whose age is less than or equal to 30
db.users.find({ age: { $lte: 30 } })


// 4. Find users whose city is not Mumbai
db.users.find({ city: { $ne: "Mumbai" } })


// 5. Find users whose age is between 20 and 30
db.users.find({
  age: { $gte: 20, $lte: 30 }
})


// 6. Show only name and email
db.users.find({}, { name: 1, email: 1, _id: 0 })


// 7. Find users whose name starts with "R"
db.users.find({
  name: /^R/
})


// 8. Find users whose email contains gmail
db.users.find({
  email: /gmail/
})


// 9. Find users whose city field exists
db.users.find({
  city: { $exists: true }
})


// 10. Find users whose phone field does not exist
db.users.find({
  phone: { $exists: false }
})


// 11. Sort users by age ascending
db.users.find().sort({ age: 1 })


// 12. Sort users by age descending
db.users.find().sort({ age: -1 })


// 13. Show first 5 users
db.users.find().limit(5)


// 14. Skip first 10 users and show next 5
db.users.find().skip(10).limit(5)


// 15. Find users whose age is 20, 25, or 30
db.users.find({
  age: { $in: [20, 25, 30] }
})


// 16. Find users whose age is not 20, 25, 30
db.users.find({
  age: { $nin: [20, 25, 30] }
})


// 17. Count total users
db.users.countDocuments()


// 18. Find users whose name is Rahul Sharma and city is Delhi
db.users.find({
  name: "Rahul Sharma",
  city: "Delhi"
})
// OR using $and
db.users.find({
  $and: [
    { name: "Rahul Sharma" },
    { city: "Delhi" }
  ]
})


// 19. Find users whose city is Delhi OR Mumbai
db.users.find({
  $or: [
    { city: "Delhi" },
    { city: "Mumbai" }
  ]
})


// 20. Find users whose age is NOT greater than 30
db.users.find({
  age: { $not: { $gt: 30 } }
})


// 21. Find users whose name ends with "a"
db.users.find({
  name: /a$/
})


// 22. Find users whose email domain is yahoo.com
db.users.find({
  email: /yahoo\.com$/
})


// 23. Find users whose age field type is number
db.users.find({
  age: { $type: "number" }
})


// 24. Find users where age is even
db.users.find({
  age: { $mod: [2, 0] }
})


// 25. Find users whose name length is greater than 5 characters
db.users.find({
  $expr: {
    $gt: [{ $strLenCP: "$name" }, 5]
  }
})


// ******************************************************
// *****************INTERMMEDIATE LEVEL******************
// ******************************************************


// 26. Find products whose price > 1000
db.products.find({
  price: { $gt: 1000 }
})


// 27. Find products whose price is between 500 and 2000
db.products.find({
  price: { $gte: 500, $lte: 2000 }
})


// 28. Find products in category "electronics"
db.products.find({
  category: "electronics"
})


// 29. Find products whose stock < 10
db.products.find({
  stock: { $lt: 10 }
})


// 30. Find products that are out of stock
db.products.find({
  stock: 0
})


// 31. Sort products by price (low → high)
db.products.find().sort({ price: 1 })


// 32. Find top 5 most expensive products
db.products.find().sort({ price: -1 }).limit(5)


// 33. Find products whose name contains "phone"
db.products.find({
  name: /phone/i
})


// 34. Find products whose discount > 20%
db.products.find({
  discount: { $gt: 20 }
})


// 35. Find products not in electronics category
db.products.find({
  category: { $ne: "electronics" }
})


// 36. Find products having tag "gaming"
db.products.find({
  tags: "gaming"
})


// 37. Find products having both "gaming" and "laptop"
db.products.find({
  tags: { $all: ["gaming", "laptop"] }
})


// 38. Find products with exactly 3 tags
db.products.find({
  tags: { $size: 3 }
})


// 39. Add tag "new"
db.products.updateOne(
  { name: "Laptop" },
  { $push: { tags: "new" } }
)


// 40. Remove tag "old"
db.products.updateOne(
  { name: "Laptop" },
  { $pull: { tags: "old" } }
)


// 41. Find orders placed by Rahul
db.orders.find({
  user: "Rahul"
})


// 42. Find orders whose amount > 5000
db.orders.find({
  totalAmount: { $gt: 5000 }
})


// 43. Find orders after 1 Jan 2025
db.orders.find({
  orderDate: { $gt: new Date("2025-01-01") }
})


// 44. Find delivered orders
db.orders.find({
  status: "delivered"
})


// 45. Find orders not cancelled
db.orders.find({
  status: { $ne: "cancelled" }
})


// 🟡 Update Operations (46–50)
// 46. Increase product price by 10%
db.products.updateMany(
  {},
  { $mul: { price: 1.1 } }
)


// 47. Increase stock by 50
db.products.updateMany(
  {},
  { $inc: { stock: 50 } }
)


// 48. Rename price → productPrice
db.products.updateMany(
  {},
  { $rename: { price: "productPrice" } }
)


// 49. Remove discount field
db.products.updateMany(
  {},
  { $unset: { discount: "" } }
)


// 50. Add featured field
db.products.updateMany(
  {},
  { $set: { featured: true } }
)


// 51. Delete products with stock = 0
db.products.deleteMany({
  stock: 0
})


// 52. Delete users who never placed orders
db.users.deleteMany({
  orders: { $exists: false }
})


// 53. Delete orders older than 5 years
db.orders.deleteMany({
  orderDate: {
    $lt: new Date(
      new Date().setFullYear(new Date().getFullYear() - 5)
    )
  }
})


// 54. Increase blog view count
db.blogs.updateOne(
  { _id: postId },
  { $inc: { views: 1 } }
)


// 55. Add new comment
db.blogs.updateOne(
  { _id: postId },
  {
    $push: {
      comments: {
        user: "Rahul",
        text: "Great article"
      }
    }
  }
)


// 56. Remove specific comment
db.blogs.updateOne(
  { _id: postId },
  {
    $pull: {
      comments: { user: "Rahul" }
    }
  }
)


// 57. Add product to wishlist
db.users.updateOne(
  { name: "Rahul" },
  { $push: { wishlist: productId } }
)


// 58. Remove product from wishlist
db.users.updateOne(
  { name: "Rahul" },
  { $pull: { wishlist: productId } }
)


// 59. Add item to shopping cart
db.users.updateOne(
  { name: "Rahul" },
  {
    $push: {
      cart: {
        productId: 101,
        qty: 1
      }
    }
  }
)


// 60. Remove item from cart
db.users.updateOne(
  { name: "Rahul" },
  {
    $pull: {
      cart: { productId: 101 }
    }
  }
)


// ******************************************************
// *****************ADVANCE LEVEL************************
// ******************************************************


// 61. Find products reviewed by Rahul
db.products.find({
  "reviews.user": "Rahul"
})


// 61. Find products where Rahul gave rating 5
db.products.find({
  reviews: {
    $elemMatch: {
      user: "Rahul",
      rating: 5
    }
  }
})


// 63. Find products having rating ≥ 4
db.products.find({
  "reviews.rating": { $gte: 4 }
})


// 64. Find products where same review has rating ≥ 4
db.products.find({
  reviews: {
    $elemMatch: {
      rating: { $gte: 4 }
    }
  }
})


// 65. Find products having more than 5 reviews
db.products.find({
  $expr: {
    $gt: [{ $size: "$reviews" }, 5]
  }
})


// 66. Find products with price > 5000 and stock < 10
db.products.find({
  price: { $gt: 5000 },
  stock: { $lt: 10 }
})


// 67. Find products with discount between 10 and 30
db.products.find({
  discount: { $gte: 10, $lte: 30 }
})


// 68. Find products whose name starts with "G"
db.products.find({
  name: /^G/
})


// 69. Find products whose name ends with "Laptop"
db.products.find({
  name: /Laptop$/
})


// 70. Find products containing "gaming" in tags
db.products.find({
  tags: "gaming"
})


// 71. Find products having both "gaming" and "electronics"
db.products.find({
  tags: { $all: ["gaming", "electronics"] }
})


// 72. Find products having exactly 3 tags
db.products.find({
  tags: { $size: 3 }
})


// 73. Find products where stock is even
db.products.find({
  stock: { $mod: [2, 0] }
})


// 74. Find products where name length > 10
db.products.find({
  $expr: {
    $gt: [
      { $strLenCP: "$name" },
      10
    ]
  }
})


// 75. Find products where discount field exists
db.products.find({
  discount: { $exists: true }
})


// 76. Add review to product
db.products.updateOne(
  { _id: productId },
  {
    $push: {
      reviews: { user: "Rahul", rating: 5 }
    }
  }
)


// 77. Update rating of Rahul's review
db.products.updateOne(
  { "reviews.user": "Rahul" },
  {
    $set: {
      "reviews.$.rating": 5
    }
  }
)


// 78. Remove review by Amit
db.products.updateOne(
  { _id: productId },
  {
    $pull: {
      reviews: { user: "Amit" }
    }
  }
)


// 79. Add multiple tags
db.products.updateOne(
  { _id: productId },
  {
    $push: {
      tags: {
        $each: ["pc", "setup"]
      }
    }
  }
)


// 80. Remove tag "gaming"
db.products.updateOne(
  { _id: productId },
  {
    $pull: {
      tags: "gaming"
    }
  }
)


// 81. Remove multiple tags
db.products.updateOne(
  { _id: productId },
  {
    $pull: {
      tags: { $in: ["pc", "setup"] }
    }
  }
)


// 82. Find products where ANY review has rating < 3
db.products.find({
  "reviews.rating": { $lt: 3 }
})


// 83. Find products where SAME review has rating <= 3 whose user is Priya
db.products.find({
  reviews: {
    $elemMatch: {
      user: 'Priya',
      rating: { $lt: 3 }
    }
  }
})


// 84. Find products where ALL reviews rating ≥ 4
db.products.find({
  reviews: {
    $not: {
      $elemMatch: { rating: { $lt: 4 } }
    }
  }
})


// 85. Find products where Rahul exists in reviews
db.products.find({
  "reviews.user": "Rahul"
})


// 86. Find products where Rahul reviewed AND rating < 3 (same review)
db.products.find({
  reviews: {
    $elemMatch: {
      user: "Rahul",
      rating: { $lt: 3 }
    }
  }
})

// 87. Find products with highest stock
db.products.find().sort({ stock: -1 }).limit(1)


// 88. Add tag "sale" where discount > 20
db.products.updateMany(
  { discount: { $gt: 20 } },
  { $push: { tags: "sale" } }
)


// 89. Add review only if product has less than 5 reviews
db.products.updateOne(
  {
    $expr: { $lt: [{ $size: "$reviews" }, 5] }
  },
  {
    $push: {
      reviews: { user: "Rahul", rating: 5 }
    }
  }
)


// 90. Find products where price > stock
db.products.find({
  $expr: { $gt: ["$price", "$stock"] }
})


// 91. Find products where discount is missing OR 0
db.products.find({
  $or: [
    { discount: { $exists: false } },
    { discount: 0 }
  ]
})


// 92. Find products where name length > category length
db.products.find({
  $expr: {
    $gt: [
      { $strLenCP: "$name" },
      { $strLenCP: "$category" }
    ]
  }
})


// 93. Find products having price between 10000 and 40000 and out of stock
db.orders.find({
  totalAmount: {
    $gte: 5000,
    $lte: 20000
  },
  stock: 0
})


// 94. Find users with empty wishlist
db.users.find({
  wishlist: { $size: 0 }
})


// 95. Find orders where amount > 10000 and status delivered
db.orders.find({
  totalAmount: { $gt: 10000 },
  status: "delivered"
})


// 96. Find products where stock is between 5 and 20 but not 10
db.products.find({
  stock: { $gte: 5, $lte: 20, $ne: 10 }
})


// 97. Find products where either discount > 20 OR stock < 5
db.products.find({
  $or: [
    { discount: { $gt: 20 } },
    { stock: { $lt: 5 } }
  ]
})

// 98. Find products where tags include "gaming" but not "mobile"
db.products.find({
  $and: [
    {tags: "gaming"},
    {tags: { $ne: "mobile" }}
  ]
})


// 99. Find products where review count > 2 and < 5
db.products.find({
  $expr: {
    $and: [
      { $gt: [{ $size: "$reviews" }, 2] },
      { $lt: [{ $size: "$reviews" }, 5] }
    ]
  }
})


// 100. Find products where no review has rating < 3
db.products.find({
  reviews: {
    $not: {
      $elemMatch: { rating: { $lt: 3 } }
    }
  }
})