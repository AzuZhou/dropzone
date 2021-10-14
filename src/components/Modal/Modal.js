import { Modal as MuiModal, Box } from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: '3px',
  boxShadow: 24,
  p: 4,
  width: { xs: '94%', sm: 400 },
  height: 400,
}

const Modal = ({ children, open, handleClose }) => (
  <MuiModal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>{children}</Box>
  </MuiModal>
)

export default Modal
