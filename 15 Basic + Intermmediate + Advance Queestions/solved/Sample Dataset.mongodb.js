// # users collection

db.users.insertMany([
    {
        name: "Rahul Sharma",
        age: 22,
        city: "Delhi",
        email: "rahul@gmail.com",
        phone: "9876543210",
        isActive: true
    },
    {
        name: "Priya Singh",
        age: 27,
        city: "Mumbai",
        email: "priya@yahoo.com",
        isActive: true
    },
    {
        name: "Amit Verma",
        age: 30,
        city: "Delhi",
        email: "amit@gmail.com",
        phone: "9123456780",
        isActive: false
    },
    {
        name: "Sneha Gupta",
        age: 24,
        city: "Kolkata",
        email: "sneha@gmail.com",
        phone: "9988776655",
        isActive: true
    },
    {
        name: "Rohit Kumar",
        age: 29,
        city: "Patna",
        email: "rohit@yahoo.com",
        isActive: true
    },
    {
        name: "Ankit Raj",
        age: 21,
        city: "Patna",
        email: "ankit@gmail.com",
        phone: "8899776655",
        isActive: false
    },
    {
        name: "Neha Agarwal",
        age: 26,
        city: "Delhi",
        email: "neha@gmail.com",
        phone: "8877665544",
        isActive: true
    },
    {
        name: "Riya Das",
        age: 23,
        city: "Mumbai",
        email: "riya@gmail.com",
        isActive: true
    },
    {
        name: "Karan Malhotra",
        age: 31,
        city: "Bangalore",
        email: "karan@yahoo.com",
        phone: "9988112233",
        isActive: false
    },
    {
        name: "Pooja Mishra",
        age: 28,
        city: "Lucknow",
        email: "pooja@gmail.com",
        phone: "7766554433",
        isActive: true
    }
])


// # products collection

db.products.insertMany([
    {
        name: "Gaming Laptop",
        price: 75000,
        category: "electronics",
        stock: 15,
        discount: 10,
        tags: ["gaming", "laptop", "electronics"]
    },
    {
        name: "Smartphone",
        price: 25000,
        category: "electronics",
        stock: 8,
        discount: 15,
        tags: ["phone", "android", "electronics"]
    },
    {
        name: "Wireless Mouse",
        price: 800,
        category: "accessories",
        stock: 50,
        discount: 5,
        tags: ["mouse", "computer", "electronics"]
    },
    {
        name: "Mechanical Keyboard",
        price: 3500,
        category: "accessories",
        stock: 20,
        discount: 12,
        tags: ["keyboard", "gaming", "computer"]
    },
    {
        name: "LED Monitor",
        price: 12000,
        category: "electronics",
        stock: 5,
        discount: 18,
        tags: ["monitor", "display", "electronics"]
    },
    {
        name: "Office Chair",
        price: 6000,
        category: "furniture",
        stock: 0,
        discount: 20,
        tags: ["chair", "office", "furniture"]
    },
    {
        name: "Gaming Headset",
        price: 4500,
        category: "electronics",
        stock: 12,
        discount: 25,
        tags: ["gaming", "audio", "electronics"]
    }
])


// # orders collection

db.orders.insertMany([
    {
        user: "Rahul Sharma",
        totalAmount: 80000,
        status: "delivered",
        orderDate: new Date("2025-02-10")
    },
    {
        user: "Priya Singh",
        totalAmount: 3000,
        status: "pending",
        orderDate: new Date("2025-03-01")
    },
    {
        user: "Amit Verma",
        totalAmount: 15000,
        status: "cancelled",
        orderDate: new Date("2024-12-15")
    },
    {
        user: "Rahul Sharma",
        totalAmount: 4500,
        status: "delivered",
        orderDate: new Date("2025-01-20")
    },
    {
        user: "Sneha Gupta",
        totalAmount: 1200,
        status: "pending",
        orderDate: new Date("2025-03-05")
    }
])



// # blogs collection

db.blogs.insertMany([
    {
        title: "MongoDB Basics",
        views: 120,
        comments: [
            { user: "Rahul", text: "Great tutorial" },
            { user: "Amit", text: "Very helpful" }
        ]
    },
    {
        title: "JavaScript Async Guide",
        views: 300,
        comments: [
            { user: "Priya", text: "Awesome explanation" }
        ]
    },
    {
        title: "Node.js Performance Tips",
        views: 80,
        comments: []
    }
])


// # products2 collection

db.products.insertMany([
    {
        name: "Gaming Laptop",
        price: 85000,
        category: "electronics",
        stock: 8,
        discount: 15,
        tags: ["gaming", "laptop", "electronics"],
        reviews: [
            { user: "Rahul", rating: 5 },
            { user: "Amit", rating: 4 },
            { user: "Priya", rating: 5 }
        ]
    },
    {
        name: "Office Laptop",
        price: 55000,
        category: "electronics",
        stock: 12,
        discount: 10,
        tags: ["laptop", "office", "electronics"],
        reviews: [
            { user: "Rahul", rating: 3 },
            { user: "Sneha", rating: 4 }
        ]
    },
    {
        name: "Gaming Mouse",
        price: 1500,
        category: "accessories",
        stock: 30,
        discount: 8,
        tags: ["gaming", "mouse", "computer"],
        reviews: [
            { user: "Amit", rating: 5 },
            { user: "Rahul", rating: 4 }
        ]
    },
    {
        name: "Mechanical Keyboard",
        price: 4000,
        category: "accessories",
        stock: 20,
        discount: 12,
        tags: ["keyboard", "gaming", "computer"],
        reviews: [
            { user: "Priya", rating: 5 },
            { user: "Rahul", rating: 4 }
        ]
    },
    {
        name: "LED Monitor",
        price: 12000,
        category: "electronics",
        stock: 0,
        discount: 20,
        tags: ["monitor", "display", "electronics"],
        reviews: []
    }
])


// # users2 collection

db.users.insertMany([
    {
        name: "Rahul Sharma",
        email: "rahul@gmail.com",
        city: "Delhi",
        wishlist: [1, 3],
        cart: [
            { productId: 1, qty: 1 },
            { productId: 3, qty: 2 }
        ]
    },
    {
        name: "Priya Singh",
        email: "priya@yahoo.com",
        city: "Mumbai",
        wishlist: [2],
        cart: [
            { productId: 2, qty: 1 }
        ]
    },
    {
        name: "Amit Verma",
        email: "amit@gmail.com",
        city: "Patna",
        wishlist: [],
        cart: []
    },
    {
        name: "Sneha Gupta",
        email: "sneha@gmail.com",
        city: "Kolkata",
        wishlist: [4],
        cart: [
            { productId: 4, qty: 1 }
        ]
    }
])