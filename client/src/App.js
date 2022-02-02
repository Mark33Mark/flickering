import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Landing      from "./pages/Landing";
import Tracker      from "./pages/Tracker";
import Advisor      from "./pages/Advisor";
import Login        from "./pages/Login";
import Signup       from "./pages/Signup";


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
        {/* Switch tells the router to stop matching further once 
            it matches a route. */}
        <Switch>

              <Route exact path="/" component={Landing} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />

              <Route exact path="/tracker" component={Tracker} />
              <Route exact path="/advisor" component={Advisor} />
              <Route render={() => <h1 className="display-2">I can't find that page.  Please check the web address in your browser.</h1>} />
            
          </Switch>

        </>

      </Router>
    </ApolloProvider>
  );
}

export default App;
