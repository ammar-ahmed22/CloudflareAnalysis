

const resolvers = {
    Query: {
        hello: (_, { name }) => {
            if (name){
                return `Hello ${name}!`
            }

            return "Hello!"
        }
    }
}


export default resolvers