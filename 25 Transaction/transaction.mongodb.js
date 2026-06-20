use('bank')

// db.accounts.insertMany([
//     {
//         _id:1,
//         name: 'manas',
//         balance: 5000,
//     },
//     {
//         _id:2,
//         name: 'muskan',
//         balance: 2000
//     }
// ])


// db.accounts.find()

//  WITHOUT TRANASACTION
// try {
//     db.accounts.updateOne(
//         { name: 'manas' },
//         { $inc: { balance: -500 } }
//     )
//     console.log('money deducted from manas account')

//     throw new Error('server crashed!!!')

//     db.accounts.updateOne(
//         { name: 'muskan' },
//         { $inc: { balance: 500 } }
//     )
//     console.log('money credited to muskan account')
// } catch (error) {
//     console.log(error.message)
// }


// db.accounts.find()



// WITH TRANSACTION
const session = db.getMongo().startSession()

const accounts = session.getDatabase('bank').accounts


session.startTransaction()

try {

    accounts.updateOne(
        { name: 'manas' },
        { $inc: { balance: -500 } }
    )
    console.log('money deducted from manas account')

    throw new Error('server crashed!!!')

    accounts.updateOne(
        { name: 'muskan' },
        { $inc: { balance: 500 } }
    )
    console.log('money credited to muskan account')
    session.commitTransaction()

} catch (error) {
    console.log(error.message)
    session.abortTransaction()
    console.log("money rollback")
}

session.endSession()

db.accounts.find()