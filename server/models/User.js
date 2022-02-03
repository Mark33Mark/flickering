
const { Schema, model } = require( "mongoose" );
const bcrypt = require( "bcrypt" );

// import schema from Tracker.js
const questionsSchema = require( "./Questions" );

const userSchema = new Schema( 
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [ /.+@.+\..+/, "Must use a valid email address" ],
    },
    password: {
      type: String,
      required: true,
    },
    questions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Questions',
      },
    ],
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// set up pre-save middleware to create password
// hash user password
userSchema.pre( "save", async function ( next ) {
  if ( this.isNew || this.isModified( "password" ) ) {
    const saltRounds = 10;
    this.password = await bcrypt.hash( this.password, saltRounds );
  }

  next();
} );


// custom method to compare and validate password for logging in
// Compares the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function ( password ) {
  return bcrypt.compare( password, this.password );
};


userSchema.virtual( "testCount" ).get( function () {
  return this.questions.length;
});

const User = model( "User", userSchema );
module.exports = User;
