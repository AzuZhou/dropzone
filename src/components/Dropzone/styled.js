import styled from 'styled-components'

import { COLORS } from 'styles/constants'

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-height: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${COLORS.BLUE};
  border-style: dashed;
  color: ${COLORS.GREY};
  outline: none;
  transition: border 0.24s ease-in-out;
  cursor: pointer;
  text-align: center;

  p:last-of-type {
    font-style: italic;
    margin-top: 10px;
  }

  center {
    margin-top: 30px;

    > svg {
      width: 50px;
      height: 50px;
    }
  }
`

export { Container }
