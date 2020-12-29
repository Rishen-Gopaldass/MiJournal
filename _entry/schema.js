const mongoose = require('mongoose');

const ObjectSchema = new mongoose.Schema ( {
        // Default fields
        createdAt: { type: Date , default: new Date()  } ,

        // Fields required from user
        title: { required: true , type: String } ,
        summary: { required: true , type: String } ,
        description: { required: true , type: String } ,
} )

// Exports
module.exports = mongoose.model( 'Entry' , ObjectSchema )