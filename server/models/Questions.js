
const { Schema, model } = require( "mongoose" );
const dateFormat = require('../utils/dateFormat');

const questionsSchema = new Schema({
  answers: 
  [
    {
      type: Number,
      required: true,
    }
  ],
  user: 
  {
    type: String,
    required: true,
  },
  createdAt: 
  {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  notes:
  [
      {
      noteText: 
      {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 300,
      },
      createdAt: 
      {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Questions = model( "Questions", questionsSchema );
module.exports = Questions;