import { useState, useEffect } from 'react'
import Dropzone from './components/Dropzone'
import GlobalStyle from './styles/globalStyle'
import styled from 'styled-components'
import { Paper, Box, Button, Snackbar, Alert, CircularProgress } from '@mui/material'
import axios from 'axios'
import { convertFileToBase64 } from './utils/helpers'

const Container = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`

const Form = styled.form`
  position: relative;
  width: 100%;

  opacity: ${(props) => (props.isLoading ? 0.6 : 1)};
  pointer-events: ${(props) => (props.isLoading ? 'none' : 'auto')};
`

function App() {
  const [file, setFile] = useState(null)
  const [shouldOpenSnackbar, setShouldOpenSnackbar] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleSubmit = async (e) => {
    e.preventDefault()

    setIsLoading(true)

    const base64File = await convertFileToBase64(file)
    const request = {
      File: base64File,
      Filename: file.name,
    }

    axios
      .post('https://jsonplaceholder.typicode.com/posts', request)
      .then((res) => {
        console.log(res)
        setIsLoading(false)
        setShouldOpenSnackbar(false)
        setFile(null)
      })
      .catch((error) => {
        setIsLoading(false)
        console.log(error)
      })
  }

  const handleUploadedFile = (file) => {
    setFile(file[0])
  }

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Container>
      <GlobalStyle />

      {isLoading && !file ? (
        <CircularProgress />
      ) : (
        <Paper elevation={3}>
          <Box sx={{ display: 'flex', width: '500px', height: '500px', padding: '20px' }}>
            <Form onSubmit={handleSubmit} isLoading={isLoading}>
              <Dropzone uploadedFile={handleUploadedFile} isLoading={isLoading} />
              <center>
                <Button tyoe="submit" onClick={handleSubmit}>
                  submit
                </Button>
              </center>
              {isLoading && (
                <CircularProgress
                  size={24}
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    marginTop: '-12px',
                    marginLeft: '-12px',
                  }}
                />
              )}
            </Form>
          </Box>
        </Paper>
      )}

      <Snackbar
        open={shouldOpenSnackbar}
        autoHideDuration={3000}
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
