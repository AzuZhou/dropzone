import Dropzone from './components/Dropzone'
import GlobalStyle from './styles/globalStyle'
import styled from 'styled-components'
import { Paper, Box } from '@mui/material'

const Container = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Paper elevation={3}>
        <Box sx={{ display: 'flex', width: '500px', padding: '20px' }}>
          <Dropzone />
        </Box>
      </Paper>
    </Container>
  )
}

export default App
