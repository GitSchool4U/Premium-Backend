import express from 'express'
import mongoose from 'mongoose';

// connect with mongodb cluster
(async () => {
    const connectionInstance = await mongoose.connect('mongodb+srv://school4uteam_db_user:YoUIV6ky7xE8d4cb@mycluster1.2pzmebv.mongodb.net/')
    console.log(connectionInstance.connection.host);
})()

// data definition
const userSchema = mongoose.Schema({
    name: String,
    age: Number
})

// create collection
const userCollection = mongoose.model('User', userSchema)

const app = express();

app.use(express.json())

// create api
app.post('/create-user', async (req, res) => {
    const userData = req.body;
    const createdUser = await userCollection.create(userData)
    res.send({
        "createdUser": createdUser
    })
})

// read all documents api
app.get('/get-all-users', async (req, res) => {
    const users = await userCollection.find()
    res.send(users)
})

// read single document
app.get('/get-single-User', async (req, res) => {
    const user = await userCollection.findOne({ name: req.body.name })
    res.send(user)
})

// update user
app.put('/update-user', async (req,res)=>{
    console.log(req.query)
    const updatedUser = await userCollection.findByIdAndUpdate(req.query, req.body, {new: true})
    res.send({
        updatedUser,
    })
})

// delete user
app.delete('/delete-user', async (req,res)=>{
    const deletedUser = await userCollection.findByIdAndDelete(req.query)
    res.send({
        deletedUser,
    }) 
})

app.listen(8000, () => {
    console.log("server running on http://localhost:8000")
})