import DeleteIcon from '@mui/icons-material/Delete'
import ImageIcon from '@mui/icons-material/Image'
import { Typography } from '@mui/material'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'

import { Container, Delete, Info } from './styled'

const File = ({ file, deleteFile, openFile }) => {
  const isPDF = file.type === 'application/pdf'

  return (
    <Container>
      <Info onClick={openFile}>
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
