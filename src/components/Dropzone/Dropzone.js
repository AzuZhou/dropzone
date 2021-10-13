import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'
import FileUploadIcon from '@mui/icons-material/FileUpload'

const Container = styled.div`
  height: 200px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: #eeeeee;
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;

  center {
    margin-top: 30px;

    > svg {
      width: 50px;
      height: 50px;
    }
  }
`

const Dropzone = ({ uploadedFile }) => {
  const onDrop = useCallback((acceptedFiles) => {
    uploadedFile(acceptedFiles)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, multiple: false })

  return (
    <Container>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
        <center>
          <FileUploadIcon />
        </center>
      </div>
    </Container>
  )
}

export default Dropzone
