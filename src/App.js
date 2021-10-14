import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Paper, Box, Button, Snackbar, Alert, CircularProgress } from '@mui/material'
import axios from 'axios'
import { styled as muiStyled } from '@mui/material/styles'

import Dropzone from './components/Dropzone'
import File from './components/File'

import { convertFileToBase64 } from './utils/helpers'

import { COLORS } from './styles/constants'

import GlobalStyle from './styles/globalStyle'

const Container = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${COLORS.WHITE};
`

const Form = styled.form`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  opacity: ${(props) => (props.isLoading ? 0.6 : 1)};
  pointer-events: ${(props) => (props.isLoading ? 'none' : 'auto')};
`

function App() {
  const [file, setFile] = useState(null)
  const [base64File, setBase64File] = useState(null)
  const [shouldOpenSnackbar, setShouldOpenSnackbar] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleSubmit = async (e) => {
    e.preventDefault()

    setIsLoading(true)

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

  const handleUploadedFile = async (file) => {
    const base64File = await convertFileToBase64(file[0])
    setBase64File(base64File)
    setFile(file[0])
  }

  const handleDeleteFile = () => {
    setBase64File(null)
    setFile(null)
  }

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)

    return () => clearTimeout(timer)
  }, [])

  const Card = muiStyled(Box)(({ theme }) => ({
    display: 'flex',
    padding: 20,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 500,
    },
    [theme.breakpoints.up('sm')]: {
      height: 500,
      width: 500,
    },
  }))

  const Submit = muiStyled(Button)(({ theme }) => ({
    position: 'absolute',
    bottom: 0,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.up('sm')]: {
      right: 0,
    },
  }))

  // TODO: add modal with file preview

  return (
    <Container>
      <GlobalStyle />

      {isLoading && !file ? (
        <CircularProgress />
      ) : (
        <Paper elevation={3}>
          <Card>
            <Form onSubmit={handleSubmit} isLoading={isLoading}>
              <Dropzone uploadedFile={handleUploadedFile} isLoading={isLoading} />
              {/* {file && <FilePreview file={file} base64={base64File} />} */}

              {file && <File file={file} deleteFile={handleDeleteFile} />}

              <Submit type="submit" onClick={handleSubmit} variant="contained" disabled={!file}>
                submit
              </Submit>

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
          </Card>
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
