import styled from 'styled-components'

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

export { Container }
