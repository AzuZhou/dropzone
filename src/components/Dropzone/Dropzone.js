import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'
import UploadFileIcon from '@mui/icons-material/UploadFile'

import { COLORS } from 'styles/constants'

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-height: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${COLORS.BLUE};
  border-style: dashed;
  color: ${COLORS.GREY};
  outline: none;
  transition: border 0.24s ease-in-out;
  cursor: pointer;
  text-align: center;

  p:last-of-type {
    font-style: italic;
    margin-top: 10px;
  }

  center {
    margin-top: 30px;

    > svg {
      width: 50px;
      height: 50px;
    }
  }
`

const Dropzone = ({ uploadedFile, isLoading }) => {
  const onDrop = useCallback((acceptedFiles) => {
    uploadedFile(acceptedFiles)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: 'image/jpeg, image/png, application/pdf',
    disabled: isLoading,
  })

  return (
    <Container>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the file here ...</p>
        ) : (
          <p>Drag 'n' drop a file here, or click to select the file</p>
        )}
        <p>Supported file types: PNG, JPEG and PDF</p>
        <center>
          <UploadFileIcon />
        </center>
      </div>
    </Container>
  )
}

export default Dropzone
