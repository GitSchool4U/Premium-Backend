# Level 1 — Database Setup

MongoDB shell open karo aur available databases dekho.
Ek naya database banao: shopApp
Us database me switch karo.
Check karo ki database create hua ya nahi.
Ek collection banao: users

# Level 2 — User Data (Website Signup System)

Imagine karo users website par signup kar rahe hain.

Ek user insert karo:
    name: Rahul
    email: rahul@gmail.com
    city: Bhagalpur
    age: 22
Ek aur user add karo.
Ek saath 3 users add karo.
Sare users show karo.
Sirf un users ko show karo jo Bhagalpur se hain.

# Level 3 — Product System (Ecommerce)

Ab ek ecommerce website ka product system banao.
Ek collection create karo: products
Ye products insert karo:
    iPhone
    Laptop
    Headphones
    Shoes

    Example fields:
        name
        price
        category
        stock
Sare products show karo.
Sirf electronics category ke products show karo.
Count karo kitne products database me hain.

# Level 4 — Update Real World Data

Real world me price ya user info update hota rehta hai.
Ek user ka city change karo Bhagalpur → Mumbai
Ek product ka price update karo.
Sabhi products ka stock update karo.
Ek user ka email update karo.

# Level 5 — Delete Operations

Ek user delete karo jiska naam Amit hai.
Sabhi users delete karo jinka age less than 18 hai.
Ek product delete karo.

# Level 6 — Real Interview Type Questions

Ye bahut important hain.
Find users jinka age greater than 20 hai.
Find product jiska price less than 5000 hai.
Find user jiska name Rahul hai.
Count users jo Mumbai se hain.
Check karo database me kaun kaun collections hain.

# Challenge (Real Web App Simulation)

Create:
    database: instagramClone
    collections:
        users
        posts
Practice:
    User signup
    User post upload
    Update post caption
    Delete post
    Find all posts of a user





***************************************************
# SOLUTION:

# 1.Database Setup

Show databases
    show dbs
Create / switch database
    use shopApp
Check collections
    show collections
Create users collection
    db.createCollection("users")

# 2.User System (Signup Example)

Insert one user
    db.users.insertOne({
        name: "Rahul",
        email: "rahul@gmail.com",
        city: "Bhagalpur",
        age: 22
    })
Insert another user
    db.users.insertOne({
        name: "Amit",
        email: "amit@gmail.com",
        city: "Patna",
        age: 19
    })
Insert many users
    db.users.insertMany([
        {
            name: "Neha",
            email: "neha@gmail.com",
            city: "Delhi",
            age: 24
        },
        {
            name: "Ravi",
            email: "ravi@gmail.com",
            city: "Bhagalpur",
            age: 21
        },
        {
            name: "Priya",
            email: "priya@gmail.com",
            city: "Mumbai",
            age: 23
        }
    ])
Show all users
    db.users.find()
Find users from Bhagalpur
    db.users.find({ city: "Bhagalpur" })


# 3.Ecommerce Product System

Create products collection
    db.createCollection("products")
Insert products
    db.products.insertMany([
        {
            name: "iPhone",
            price: 80000,
            category: "electronics",
            stock: 10
        },
        {
            name: "Laptop",
            price: 60000,
            category: "electronics",
            stock: 5
        },
        {
            name: "Headphones",
            price: 2000,
            category: "electronics",
            stock: 20
        },
        {
            name: "Shoes",
            price: 3000,
            category: "fashion",
            stock: 15
        }
    ])
Show all products
    db.products.find()
Find electronics products
    db.products.find({ category: "electronics" })
Count products
    db.products.countDocuments()

# 4.Update Data (Real World Changes)

Update user city
    db.users.updateOne(
        { name: "Rahul" },
        { $set: { city: "Mumbai" } }
    )
Update product price
    db.products.updateOne(
        { name: "Laptop" },
        { $set: { price: 65000 } }
    )
Update all products stock
    db.products.updateMany(
        {},
        { $set: { stock: 25 } }
    )
Update user email
    db.users.updateOne(
        { name: "Neha" },
        { $set: { email: "neha123@gmail.com" } }
    )

# 5.Delete Operations

Delete one user
    db.users.deleteOne({ name: "Amit" })
Delete users age less than 18
    db.users.deleteMany({ age: { $lt: 18 } })
Delete product
    db.products.deleteOne({ name: "Shoes" })

# 6.Interview Type Queries

Users age greater than 20
    db.users.find({ age: { $gt: 20 } })
Products price less than 5000
    db.products.find({ price: { $lt: 5000 } })
Find user Rahul
    db.users.find({ name: "Rahul" })
Count Mumbai users
    db.users.countDocuments({ city: "Mumbai" })
Show collections
    show collections

# Mini Project (Instagram Clone Practice)

Create DB
use instagramClone
    Create collections
    db.createCollection("users")
    db.createCollection("posts")
Insert user
    db.users.insertOne({
        username: "manas",
        followers: 120,
        city: "Bhagalpur"
    })
Insert post
    db.posts.insertOne({
        username: "manas",
        caption: "Gym time",
        likes: 10
    })
Update caption
    db.posts.updateOne(
        { username: "manas" },
        { $set: { caption: "Gym motivation" } }
    )
Find posts
    db.posts.find()
Delete post
    db.posts.deleteOne({ username: "manas" })