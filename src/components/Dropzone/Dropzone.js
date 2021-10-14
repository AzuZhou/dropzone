import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import UploadFileIcon from '@mui/icons-material/UploadFile'

import { Container } from './styled'

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
