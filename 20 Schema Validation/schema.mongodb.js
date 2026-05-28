// db.users.drop()

db.createCollection('users', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['name', 'age', 'products'],
            additionalProperties: false,
            properties: {
                _id: {},
                name: {
                    bsonType: 'string',
                    description: 'name must be a string and required'
                },
                age: {
                    bsonType: 'int',
                    minimum: 18,
                    maximum: 60,
                    description: 'age must be an integer and between 18 to 60 and required also'
                },
                isAdmin: {
                    bsonType: 'bool',
                    description: 'it must be either true or false'
                },
                products: {
                    bsonType: 'array',
                    description: 'products must be an array and required',
                    items: {
                        bsonType: 'object',
                        description: 'must be an object',
                        required: ['productName','price'],
                        additionalProperties: false,
                        properties: {
                            productName: {
                                bsonType: 'string',
                                description: 'it must be a string',
                            },
                            price: {
                                bsonType: 'number',
                                description: 'price is required'
                            }
                        }
                    }
                }
            }
        }
    },
    validationAction: 'error'
})

// db.users.insertOne({
//     name: 'manas',
//     age: 18,
//     products: [
//         {
//             productName: 'samsung',
//             price: 20000.03,
//             quantity: 3
//         }
//     ]
// })