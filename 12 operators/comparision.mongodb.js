use('ecommerce')

db.products.find(
    {price:{$ne:499.99}},
    { title: 1, category: 1, price: 1 }
);

db.products.find(
    {price:{$eq:499.99}},
    { title: 1, category: 1, price: 1 }
);

db.products.find(
    {price:{$lt:499.99}},
    { title: 1, category: 1, price: 1 }
);
db.products.find(
    {price:{$gt:499.99}},
    { title: 1, category: 1, price: 1 }
);