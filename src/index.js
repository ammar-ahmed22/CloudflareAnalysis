import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });
import express from "express"
import { ApolloServer, gql } from "apollo-server-express";

const PORT = process.env.PORT || 8080;

( async () => {
    const app = express()

    const server = new ApolloServer({
        resolvers: {
            Query: {
                hello: (_, { name }) => {
                    if (name){
                        return "Hello " + name
                    }
                } 
            }
        },
        typeDefs: gql`
            type Query{
                hello(name: String): String!
            }
        `
    })

    await server.start()

    server.applyMiddleware({ app });

    app.listen(PORT, () => console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath} 🚀`))
})()

