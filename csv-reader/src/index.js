import csv from "csv-parser"
import fs from "fs"
import path from "path"
import { Readable } from "stream";


class CSVReader {

    

    static read = async (pathOrString, options={ stringify: false, fromString: false }) => {
        const { stringify, fromString } = options;
        //const results = []
        return new Promise((resolve, reject) => {

            const data = []
            if (fromString){
                const stream = new Readable()
                stream.push(pathOrString)
                stream.push(null)

                stream.pipe(csv())
                    .on('data', chunk => data.push(chunk))
                    .on('end', () => {
                        if (data){
                            resolve(stringify ? JSON.stringify(data) : data)
                        }else{
                            reject(Error("No data found"))
                        }
                        
                    })
            }else{
                fs.createReadStream(path.join(__dirname, pathOrString))
                .pipe(csv())
                .on('data', chunk => data.push(chunk))
                .on('end', () => {
                    if (data){
                        resolve(stringify ? JSON.stringify(data) : data)
                    }else{
                        reject(Error("No data found"))
                    }
                })
            }
            
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
    //console.log(jun6)

    //const stringTest = await CSVReader.read(``, { fromString: true, stringify: false })
    //CSVReader.write('./testing/testing.csv', jun6)
})()

export default CSVReader






