
const { Schema } = require( "mongoose" );
const userSchema = require( "./User" );

const trackerSchema = new Schema({
  dateTaken: {
    type: Date,
    default: Date.now
  },
  answers: [{
    type: Number,
    required: true,
  }
  ],
  notes:{
    type: String,
  }
});

module.exports = trackerSchema;