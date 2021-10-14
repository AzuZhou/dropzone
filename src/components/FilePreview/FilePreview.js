import styled from 'styled-components'
import FilePreviewer from 'react-file-previewer'
import DeleteIcon from '@mui/icons-material/Delete'

// INSIDE MODAL

const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  .preview-wrapper {
    height: 100%;
    width: 100%;

    .preview-bar,
    .preview-icons {
      display: none;
    }

    .preview-content {
      width: inherit;
      height: inherit;
      .preview-file {
        width: inherit;
        height: inherit;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        > div {
          width: inherit;
          height: inherit;
          > div {
            width: inherit;
            height: inherit;
            > div {
              width: inherit;
              height: inherit;
              canvas {
                width: 100% !important;
                height: 100% !important;
                object-fit: cover;
              }
            }
          }
        }
      }
    }
  }
`

const FilePreview = ({ file, base64 }) => (
  <Container>
    <FilePreviewer file={{ data: base64, mimeType: file.type, name: file.name }} />
  </Container>
)

export default FilePreview
