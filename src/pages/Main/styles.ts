import styled, { css } from 'styled-components'

interface CircleProps {
  isLighted: boolean
}

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Circle = styled.div<CircleProps>`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #d33926;
  opacity: 0.6;

  ${(props) =>
    props.isLighted &&
    css`
      opacity: 1;
      box-shadow: 0 0 2.5px #d33926, 0 0 10px #d33926, 0 0 20px #d33926;
      transition-delay: 1s;
    `}
`

export const Button = styled.button`
  width: 200px;
  height: 40px;
  background: #d33926;
  border: 0;
  border-radius: 5px;

  margin-top: 16px;
`
