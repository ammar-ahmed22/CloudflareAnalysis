export const read = (csvString, options = {}) => {
    // const { stringify, delim } = false;
    if (!options.stringifigy){
        options.stringifigy = false;
    }

    if (!options.delim){
        options.delim = ","
    }

    const { stringifigy, delim } = options;

    const rows = csvString.split("\n");
    console.log({ rows })
    let headers = [];
    console.log({ delim })
    return rows.map( (row, rIdx) => {
        if (rIdx === 0){
            headers = row.split(delim);
            console.log({ headers })
            return null;
        }else{
            const res = {};
            const values = row.split(delim);
            console.log({ values })
            headers.forEach( (header, hIdx) => {
                if (header){
                    res[header] = values[hIdx]
                }
            })
            console.log({ res })
            return res;
        }
    })
    .filter( item => item )// remove null
}

    









