use('test')

// db.users.createIndex({name:1})
// db.users.dropIndex({name:1})
// db.users.dropIndex('name_1')
// db.users.getIndexes()

// db.users.find({name:'Amit Verma'}).explain('executionStats')

// db.users.dropIndex('name_1')
// db.users.createIndex({name:1,age:1})
// db.users.dropIndex('age_1_name_1')
// db.users.createIndex({age:1, name:1})

// db.users.find({name:'Sneha Gupta', age: 24}).explain('executionStats')

// db.users.find({name:'Sneha Gupta'}).explain('executionStats')

// db.users.find({age:24}).explain('executionStats')

// db.users.dropIndex('name_1_age_1')
// db.users.getIndexes()
// db.users.createIndex({name:1})
// db.users.createIndex({age:1})
// db.users.getIndexes()


// db.products.find({tags:'laptop'}).explain()

// db.products.createIndex({tags:1})

// db.products.find({
//     reviews: {
//         user: 'Rahul',
//         rating: NumberInt('1')
//     }
// }).explain()
// db.products.createIndex({reviews:1})

// db.products.createIndex({'reviews.user':1,'reviews.rating':1})

// db.products.find({'reviews.rating':5}).explain()


db.articles.find(
    { $text: { $search: "index " } },
    { myScore: { $meta: 'textScore' } }
)

// db.articles.createIndex({title: 'text'})
// db.articles.getIndexes('')
// db.articles.dropIndex('title_text_content_text_tags_text')
// db.articles.createIndex(
//     {title:'text',content:'text',tags:'text'},
//     {weights:{
//         title: 1,
//         content:2,
//         tags:100
//     }}
// )


// db.articles.createIndex({title:1})

// db.articles.find(
//     { title: 'Advanced MongoDB Text Search' }
// ).explain('executionStats')

// db.articles.createIndex({title:1, content:1})
