import styled from 'styled-components'
import DeleteIcon from '@mui/icons-material/Delete'
import ImageIcon from '@mui/icons-material/Image'
import { Typography } from '@mui/material'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'
import ButtonUnstyled from '@mui/core/ButtonUnstyled'

import { COLORS } from '../../styles/constants'

const Container = styled.div`
  width: 100%;

  margin-top: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Info = styled.button`
  height: 50px;
  width: auto;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg,
  p {
    transition: color 0.1s linear;
  }

  &:hover {
    svg,
    p {
      color: ${COLORS.BLUE};
    }
  }

  svg {
    height: 30px;
    width: 30px;

    margin-right: 10px;
  }
`

const Delete = styled(ButtonUnstyled)`
  height: 50px;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  svg {
    height: 24px;
    width: 24px;
    transition: transform 0.1s linear;

    &:hover {
      transform: scale(1.2);
    }
  }
`

const File = ({ file, deleteFile }) => {
  const isPDF = file.type === 'application/pdf'

  return (
    <Container>
      <Info>
        {isPDF ? (
          <PictureAsPdfIcon sx={{ color: 'text.secondary' }} />
        ) : (
          <ImageIcon sx={{ color: 'text.secondary' }} />
        )}
        <Typography
          sx={{
            color: 'text.secondary',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}
        >
          {file.name}
        </Typography>
      </Info>

      <Delete onClick={deleteFile}>
        <DeleteIcon sx={{ color: 'error.main' }} />
      </Delete>
    </Container>
  )
}

export default File
