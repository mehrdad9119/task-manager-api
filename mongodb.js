// CRUD create read update delete

//Destructuring
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

//Details about IDs
// const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }
    const db = client.db(databaseName)
    
    db.collection('tasks').deleteOne({ 
        description: 'Task1'
    })
    .then((result) => console.log(result))
    .catch(error => console.log(error))
})

// Insertion examples
// db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Vikram',
    //     age: 26
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Nancy',
    //         age: 29
    //     },
    //     {
    //         name: 'Gunther',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert users')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Task1',
    //         completed: true
    //     },
    //     {
    //         description: 'Task2',
    //         completed: false
    //     },
    //     {
    //         description: 'Task3',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks')
    //     }

    //     console.log(result.ops)
    // })

// Query Examples
// db.collection('users').findOne({ _id: new ObjectID("5e79445af13f8863e8f4a62e") }, (error, user) => {
//     if (error) {
//         return console.log('Unable to fetch')
//     }

//     console.log(user)
// })

// db.collection('users').find({ age: 28 }).toArray((error, users) => {
//     console.log(users)
// })
// db.collection('users').find({ age: 28 }).count((error, count) => {
//     console.log(count)
// })

//Updating documents
//Set new value
// db.collection('users').updateOne({ 
//     _id: new ObjectID("5e7945b944237718b0be2b28") 
// }, {
//     $set: {
//         name: 'Mike'
//     }
// }).then((result) => console.log(result))
// .catch((error) => console.log(error))
//increment value
// db.collection('users').updateOne({ 
//     _id: new ObjectID("5e7945b944237718b0be2b28") 
// }, {
//     $inc: {
//         age: 1
//     }
// }).then((result) => console.log(result))
// .catch((error) => console.log(error))
//Using update many
// db.collection('tasks').updateMany({ 
//     completed: false 
// }, {
//     $set: {
//         completed: true
//     }
// }).then((result) => console.log(result))
// .catch((error) => console.log(error))

//Deleting documents
//Deletemany
// db.collection('users').deleteMany({ 
//     age: 28
// })
// .then((result) => console.log(result))
// .catch(error => console.log(error))
//Delete one
// db.collection('tasks').deleteOne({ 
//     description: 'Task1'
// })
// .then((result) => console.log(result))
// .catch(error => console.log(error))