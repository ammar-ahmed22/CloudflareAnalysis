import { Flex, Container, Text } from "@chakra-ui/react"
import { useForm } from 'react-hook-form'
import { read } from "csv-reader/react"

function App() {
  const { control } = useForm()

  const handleFileChange = (e) => {
    const reader = new FileReader()
    reader.onload = handleFileLoad
    reader.readAsText(e.target.files[0])
  }

  const handleFileLoad = async (e) => {
    console.log(e)
    //console.log(e.target.result.split("\n"))
    // const rows = e.target.result.split("\n")
    // let headers = [];
    // const result = rows.map( (row, idx) => {
    //   if (idx === 0){
    //     headers = row.split(",")
    //     return null
    //   }else{
    //     const res = {};
    //     const values = row.split(",")
    //     headers.forEach( (header, hIdx) => {
    //       res[header] = values[hIdx]
    //     })

    //     return res;
    //   }
    // })

    // console.log(headers)
    // console.log(result)
    // console.log(e.target.result)

        // const rows = e.target.result.split("\n");
        // const delim = ","
        // let headers = [];
        // const result = rows.map( (row, rIdx) => {
        //     if (rIdx === 0){
        //         headers = row.split(delim);
        //         return null;
        //     }else{
        //         const res = {};
        //         const values = row.split(delim);
        //         headers.forEach( (header, hIdx) => {
        //             res[header] = values[hIdx]
        //         })

        //         return res;
        //     }
        // })
        // .filter( item => item )// remove null

        // console.log(result)

    console.log(read(e.target.result))
    // const parsed = await CSVReader.read(e.target.result, { fromString: false, stringify: false})
    // console.log(parsed)
  }

  return (
    <Flex w="100%" py="5vh">
      <Container maxW={"container.md"}  >
        <Text fontSize="4xl" fontWeight="bold">Hello!</Text>
        <Text>Upload CSV data below:</Text>
        <input type="file" onChange={handleFileChange}></input>
      </Container>
    </Flex>
  );
}

export default App;
