import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";

import { setContext }     from "@apollo/client/link/context";

import Login              from "./pages/Login";
import Signup             from "./pages/Signup";
import Landing            from "./pages/Landing";
import Questionnaire      from "./pages/Questionnaire";
import History            from "./pages/History";
import Today              from "./pages/Today";
import Advisor            from "./pages/Advisor";
import NoMatch            from "./pages/NoMatch";



const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext( ( _, { headers } ) => {

  // get the authentication token from local storage if it exists
  const token = localStorage.getItem( "id_token" );

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});


const client = new ApolloClient( {
  link: authLink.concat( httpLink ),
  cache: new InMemoryCache(),
});


function App() {

  return ( 
    <ApolloProvider client={client}>
      
      <Router>

        <>
        <Switch>

              <Route exact path="/" component={Landing} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/questions" component={Questionnaire} />
              <Route exact path="/history" component={History} />
              <Route exact path="/today" component={Today} />
              <Route exact path="/advisor" component={Advisor} />
              <Route component={NoMatch} />
            
          </Switch>

        </>

      </Router>
    </ApolloProvider>
  );
}

export default App;
