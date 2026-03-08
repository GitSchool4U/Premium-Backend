use('testDb')

// db.createCollection('users')

db.users.insertMany([
    {_id:1, name:'mkl'},
    {_id:2, name:'muskan'},
    {_id:1, name:'mehek'},
    {_id:3, name:'rahul'},
])

db.users.insertMany([
    {_id:1, name:'mkl'},
    {_id:2, name:'muskan'},
    {_id:1, name:'mehek'},
    {_id:3, name:'rahul'},
], {ordered:false})