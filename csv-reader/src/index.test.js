import csv from "csv-parser";
import fs from "fs";
import path from "path";

const results = []

fs.createReadStream(path.join(__dirname, './testing/jun6/jun6data.csv'))
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        console.log(results)
    })
