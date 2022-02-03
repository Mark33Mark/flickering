
const { Schema, model } = require( "mongoose" );
const dateFormat = require('../utils/dateFormat');

const trackerSchema = new Schema({

  answers: 
  [
    {
      type: Number,
      required: true,
    }
  ],
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

const Tracker = model( "Tracker", trackerSchema );
module.exports = Tracker;