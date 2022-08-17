import mongoose from 'mongoose'

const User = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }

})

export default new mongoose.model('cqluser', User)