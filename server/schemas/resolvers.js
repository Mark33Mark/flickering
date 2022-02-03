
const { AuthenticationError } = require( "apollo-server-express" );
const { User, Tracker }       = require( "../models" );
const { signToken }           = require( "../utils/auth" );


const resolvers = {

  Query: {

    me: async ( parent, args, context ) => {
      if ( context.user ) {
          return await User.findOne( { _id: context.user._id } )
                            .select( "-password" );
      }
      
      throw new AuthenticationError( "Not logged in" );
    }         
  },

  Mutation: {

      addUser: async ( parent, args ) => {
          const user = await User.create( args );
          const token = signToken( user );
        
          return { token, user };
      },
      
      login: async ( parent, { email, password } ) => {
          const user = await User.findOne( { email } );
        
          if ( !user ) {
            throw new AuthenticationError( "Incorrect credentials" );
          }
        
          const correctPw = await user.isCorrectPassword( password );
        
          if ( !correctPw ) {
            throw new AuthenticationError( "Incorrect credentials" );
          }
        
          const token = signToken( user );
          return { token, user };
      },

      addTest: async ( parent, { answers }, context ) => {
        return Tracker,create({ answers });

    },

  }

};

module.exports = resolvers;

  