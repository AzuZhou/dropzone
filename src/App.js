import { useState } from 'react'
import Dropzone from './components/Dropzone'
import GlobalStyle from './styles/globalStyle'
import styled from 'styled-components'
import { Paper, Box, Button, Snackbar, Alert } from '@mui/material'
import axios from 'axios'
import { convertFileToBase64 } from './utils/helpers'

const Container = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`

const Form = styled.form`
  width: 100%;
`

function App() {
  const [file, setFile] = useState(null)
  const [shouldOpenSnackbar, setShouldOpenSnackbar] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const base64File = await convertFileToBase64(file)

    const request = {
      File: base64File,
      Filename: file.name,
    }

    axios
      .post('https://jsonplaceholder.typicode.com/posts', request)
      .then((res) => {
        console.log(res)
        setShouldOpenSnackbar(true)
        setFile(null)
      })
      .catch((error) => console.log(error))
  }

  const handleUploadedFile = (file) => {
    setFile(file[0])
  }

  return (
    <Container>
      <GlobalStyle />
      <Paper elevation={3}>
        <Box sx={{ display: 'flex', width: '500px', height: '500px', padding: '20px' }}>
          <Form onSubmit={handleSubmit}>
            <Dropzone uploadedFile={handleUploadedFile} />
            <center>
              <Button tyoe="submit" onClick={handleSubmit}>
                submit
              </Button>
            </center>
          </Form>
        </Box>
      </Paper>

      <Snackbar
        open={shouldOpenSnackbar}
        autoHideDuration={6000}
        onClose={() => setShouldOpenSnackbar(false)}
      >
        <Alert
          onClose={() => setShouldOpenSnackbar(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          File uploaded!
        </Alert>
      </Snackbar>
    </Container>
  )
}

export default App
