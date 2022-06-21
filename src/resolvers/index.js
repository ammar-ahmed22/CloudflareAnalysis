import { getUnixTimestamp } from "../utils/helpers"

const resolvers = {
    Query: {
        hello: (_, { name }) => {
            if (name){
                return `Hello ${name}!`
            }

            return "Hello!"
        },
        week: async (_, { dates } ) => {
            // Returns MongoDB document corresponding to dates provided

            return dates.map( date => {
                return {
                    date,
                    unixDate: getUnixTimestamp(new Date(date)),
                    data: "blah",
                    result: "blah",
                    tagCount: "blah"
                }
            })
        }
    },
    Mutation: {
        createWeek: async (_, { date, data }) => {
            // TODO: Create MongoDB document for week with data
            return {
                date,
                unixDate: getUnixTimestamp(new Date(date)),
                data,
            }
        },
        addResult: async (_, { date, result, tagCount }) => {
            // Adds result and tagCount data to given date

            // TODO: Find document by date

            // TODO: Add result

            return {
                date,
                unixDate: getUnixTimestamp(new Date(date)),
                data: 'blah',
                result,
                tagCount
            }
        }
    }
}


export default resolvers