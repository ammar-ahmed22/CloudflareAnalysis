import { Flex, Container, Text } from "@chakra-ui/react"
import { useForm } from 'react-hook-form'
import CSVReader from "csv-reader"

function App() {
  const { control } = useForm()

  const handleFileChange = (e) => {
    const reader = new FileReader()
    reader.onload = handleFileLoad
    reader.readAsText(e.target.files[0])
  }

  const handleFileLoad = async (e) => {
    console.log(e)
    console.log(e.target.result)
    const parsed = await CSVReader.read(e.target.result, { fromString: false, stringify: false})
    console.log(parsed)
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
