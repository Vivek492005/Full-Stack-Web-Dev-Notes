/*
========================================================================================================================================================================
                                                                    DATABASE COMPLETE NOTES - MONGODB, MONGOOSE, AND CRUD
========================================================================================================================================================================

/*
A Database is an organized collection of structured information, or data, 
typically stored electronically in a computer system.

Key Concepts:
- SQL vs NoSQL: Relational (Tables) vs Non-Relational (Documents).
- MongoDB: A popular NoSQL database that stores data in JSON-like documents.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js.
- Schema: Defines the structure of the document.
- Model: A wrapper on the Mongoose schema that provides an interface to the database.
*/

// --------------------SQL vs NoSQL SUMMARY-----------------------
/*
| Feature      | SQL (MySQL/Postgres)       | NoSQL (MongoDB)             |
| ------------ | -------------------------- | --------------------------- |
| Structure    | Fixed Schema (Tables)      | Dynamic Schema (Documents)  |
| Relationships| Joins                      | Embedding/Linking           |
| Scaling      | Vertical (Better Hardware)  | Horizontal (More Servers)   |
| Use Case     | Complex Queries/Transactions| Big Data/Real-time Apps     |
*/

const mongoose = require('mongoose');

// --------------------MONGODB CONNECTION-----------------------
/*
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/myNotesDB');
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
    }
};
*/

// --------------------MONGOOSE SCHEMA & MODEL-----------------------
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    age: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', UserSchema);

// --------------------CRUD OPERATIONS-----------------------
/*
Create:  new User({ ... }).save()
Read:    User.find(), User.findById()
Update:  User.updateOne(), User.findByIdAndUpdate()
Delete:  User.deleteOne(), User.findByIdAndDelete()
*/

// --------------------QUERY OPERATORS-----------------------
/*
$gt (Greater Than)
$lt (Less Than)
$in (In Array)
$or (Either condition)
*/
// Example: User.find({ age: { $gt: 18 } })

// --------------------DATABASE SUMMARY TABLE-----------------------
/*
| Method           | Description                                      |
| ---------------- | ------------------------------------------------ |
| `mongoose.connect`| Connects to the database instance                |
| `new Schema()`   | Defines the data structure                       |
| `model()`        | Creates a collection interface                   |
| `.find()`        | Retrieves documents matching a query             |
| `.save()`        | Saves a new document to the database            |
| `.populate()`    | Links data from other collections (Relationships)|
---------------------------------------------------------------------- */
