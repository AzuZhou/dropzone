import styled from 'styled-components'
import ButtonUnstyled from '@mui/core/ButtonUnstyled'

import { COLORS } from 'styles/constants'

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

export { Container, Delete, Info }
