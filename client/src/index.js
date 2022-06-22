import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider, extendTheme, ColorModeProvider } from "@chakra-ui/react"
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink } from "@apollo/client"


const link = new HttpLink({
  uri: process.env.NODE_ENV === 'development' ? "http://localhost:8080/graphql" : "prodlink"
})

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
})

const config = {
  initialColorMode: "system",
  useSystemColorMode: true
}

const theme = extendTheme({ config })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <ColorModeProvider initialColorMode={theme.config.initialColorMode}/>
        <App />
      </ChakraProvider>
    </ApolloProvider>
    
  </React.StrictMode>
);


