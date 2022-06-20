import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });
import express from "express"
import { ApolloServer, gql } from "apollo-server-express";
import readContent from "./utils/readContent";
import connectDB from "./utils/connectDB";
import resolvers from "./resolvers";

const PORT = process.env.PORT || 8080;


( async () => {
    const app = express()

    const server = new ApolloServer({
        resolvers,
        typeDefs: readContent(process.env.NODE_ENV === "development" ? "./src/typeDefs.gql" : "./typeDefs.gql")
    })

    await server.start()

    server.applyMiddleware({ app });

    connectDB(process.env.MONGO_URI);

    app.listen(PORT, () => console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath} 🚀`))
})()

