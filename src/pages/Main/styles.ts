import styled, { css } from 'styled-components'
import { shade } from 'polished'

interface CircleProps {
  isLighted: boolean
  color: string
  size: string
}

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: #fff;
    margin-bottom: 30px;
    font-size: 40px;
  }

  span {
    color: #fff;
    font-size: 16px;
    margin-bottom: 15px;
  }

  input {
    margin-bottom: 20px;
    padding: 0 15px;
    border: 0;
    height: 40px;
    border-radius: 5px;
    width: 415px;
  }
`

export const CircleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;

  & + div {
    margin-top: 15px;
  }
`

export const Circle = styled.div<CircleProps>`
  width: 100px;
  height: 100px;
  border-radius: 50%;

  ${(props) =>
    props.size &&
    css`
      width: ${props.size}px;
      height: ${props.size}px;
    `}

  opacity: 0.5;

  ${(props) =>
    props.isLighted &&
    props.color &&
    css`
      opacity: 1;
      box-shadow: 0 0 3px ${props.color}, 0 0 15px ${props.color},
        0 0 30px ${props.color};
    `}

  background: red;

  ${(props) =>
    props.color &&
    css`
      background: ${props.color};
    `}

  & + div {
    margin-left: 15px;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;

  button {
    background: #ff9000;
    height: 45px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color: #312e28;
    width: 200px;
    margin-top: 30px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }

    & + button {
      margin-left: 15px;
    }
  }
`
