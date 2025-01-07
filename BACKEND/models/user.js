const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/secureNote')

const userSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
    },
    password: String,
        // Array to store file IDs that are shared with this user
        sharedFiles: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "file" // Assuming the 'file' model exists
        }]
    
})

module.exports = mongoose.model("user",userSchema);

