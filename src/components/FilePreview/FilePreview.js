import { useState, useEffect } from 'react'
import FilePreviewer from 'react-file-previewer'
import styled from 'styled-components'

import SectionLoader from '../SectionLoader'

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  transition: opacity 0.3s ease-in;
  opacity: ${(props) => props.opacity};

  .preview-wrapper,
  .preview-wrapper,
  .preview-content,
  .preview-file {
    height: inherit;
    width: inherit;
  }

  .preview-wrapper {
    .preview-content {
      .preview-file {
        img {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover;
        }

        div {
          width: 100%;
          height: 100%;
        }

        canvas {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover;
        }
      }
    }
  }
`

const FilePreview = ({ file, base64 }) => {
  const [canShow, setCanShow] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCanShow(true)
      setIsLoading(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [isLoading])

  return (
    <Container opacity={canShow ? 1 : 0}>
      <FilePreviewer
        file={{ data: base64, mimeType: file.type, name: file.name }}
        hideControls={true}
      />
      {canShow && isLoading ? <SectionLoader /> : null}
    </Container>
  )
}

export default FilePreview
