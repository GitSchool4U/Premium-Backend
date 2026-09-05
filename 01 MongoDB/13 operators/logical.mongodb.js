use('ecommerce');

db.products.find(
    // {$or : [{category:'beauty'},{price:{$not:{$lt:12.99}}}]},
    {$nor:[{category:'beauty'},{price:{$gt:10}}]},
    // {
    //     category: 'beauty',
    //     price: { $lt: 12.99 }
    // },
    { title: 1, category: 1, price: 1 }
)