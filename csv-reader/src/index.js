import csv from "csv-parser"
import fs from "fs"
import path from "path"


class CSVReader {

    static readStreamAsync = (stream) => {
        return new Promise((resolve, reject) => {
            const data = []

            fs.createReadStream()

        })
    }

    static read = async (csvPath, options={ stringify: false }) => {
        const { stringify } = options;
        //const results = []
        return new Promise((resolve, reject) => {

            const data = []

            fs.createReadStream(path.join(__dirname, csvPath))
                .pipe(csv())
                .on('data', chunk => data.push(chunk))
                .on('end', () => {
                    if (data){
                        resolve(stringify ? JSON.stringify(data) : data)
                    }else{
                        reject(Error("No data found"))
                    }
                })
        })

        
        
        
    }

    static write = (csvPath, rows, options={ delim: ","}) => {
        const { delim } = options;

        const stream = fs.createWriteStream(path.join(__dirname, csvPath));

        stream.once('open', (fd) => {
            rows.forEach( (row, idx) => {
                let rowString = ''
    
                if (idx === 0){
                    for (let col in row){
                        rowString += col + delim
                    }
                }else{
                    for (let col in row){
                        rowString += row[col] + delim
                    }
                }
                
                rowString += '\n'
                stream.write(rowString)
    
            })
        })

        
    }
}

// Testing
(async () => {
    const jun6 = await CSVReader.read('./testing/jun6/jun6data.csv')
    console.log(jun6)
    //CSVReader.write('./testing/testing.csv', jun6)
})()

export default CSVReader






