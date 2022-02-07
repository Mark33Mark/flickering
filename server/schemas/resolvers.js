
const { AuthenticationError } = require( "apollo-server-express" );
const { User, Questions }     = require( "../models" );
const { signToken }           = require( "../utils/auth" );


const resolvers = {

  Query: {

    user: async (parent, { username }) => {
      return await User.findOne({ username }).populate('questions');
    },

    getUsers: async () => {
      return await User.find({}).populate('questions');
    },

    getTests: async ( parent, { username }) => {
      const params = username ? { username } : {};
      return await Questions.find( params ).sort({createdAt: -1 });
    },

    getNotes: async ( parent, { username }) => {
      const params = username ? { username } : {};
      return await Questions.find( params ).sort({createdAt: -1 });
    },
    
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
          console.log(email);
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

      loginName: async ( parent, { username, password } ) => {
        
        console.log(username);

        const user = await User.findOne( { username } );
      
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
        
        if (context.user) {
          const answered = await Questions.create({ 
            answers,
            user: context.user.username,
          });

          await User.findOneAndUpdate(
            { _id: context.user._id },
            { $addToSet: { questions: answered._id } }
          );

        return answered;
        }
        throw new AuthenticationError("Please log in to submit your emotion status.");
    },

    addNote: async (parent, { questionId, noteText }, context) => {

      if (context.user) {
        return Questions.findOneAndUpdate(
          { _id: questionId },
          {
            $addToSet: {
              notes: { noteText },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    removeNote: async (parent, { questionId, noteId }, context) => {
      
      console.log({ questionId, noteId } );

      if (context.user) {
        return Questions.findOneAndUpdate(
          { _id: questionId },
          {
            $pull: {
              notes: {
                _id: noteId,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },

  }

};

module.exports = resolvers;

  