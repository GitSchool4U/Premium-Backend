use('test')

// let arr = [];

// for(let i=1; i<=100; i++){
//     arr.push({value: i})
// }

// db.data.insertMany(arr)

// const cursor = db.data.find()
// console.log(cursor)
// console.log(cursor.next())
// console.log(cursor.next())
// console.log(cursor.next())
// console.log(cursor.hasNext())

// while(cursor.hasNext()){
//     console.log(cursor.next())
// }

// db.data.find().sort({value:1}) // ascending sort
// db.data.find().sort({value:-1}) // descending sort


// db.data.find().limit(40)

// db.data.find().skip(90)

// const data = db.data.find().sort({value:-1}).skip(5).limit(8)
// console.log(data)

const pg = 4;
const lm = 5;

const data = db.data.find().skip((pg - 1) * lm).limit(lm)
console.log(data)