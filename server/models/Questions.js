
const { Schema, model } = require( "mongoose" );
const dateFormat = require('../utils/dateFormat');

const questionsSchema = new Schema({
  createdAt: 
  {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  user: 
  {
    type: String,
    required: true,
  },
  answers: 
  [
    {
      type: Number,
      required: true,
    }
  ],
  notes:
  [
      {
      noteText: 
      {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 300,
        trim: true,
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