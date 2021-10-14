import { Snackbar as MuiSnackbar, Alert } from '@mui/material'

const Snackbar = ({ shouldOpenSnackbar, setShouldOpenSnackbar }) => (
  <MuiSnackbar
    open={shouldOpenSnackbar}
    autoHideDuration={3000}
    onClose={() => setShouldOpenSnackbar(false)}
  >
    <Alert onClose={() => setShouldOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
      File uploaded!
    </Alert>
  </MuiSnackbar>
)

export default Snackbar
