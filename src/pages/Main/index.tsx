import React, { useState, useCallback, useRef } from 'react'

import { useInterval } from '../../hooks/interval.hook'

import { Container, Circle, Button } from './styles'

const Main: React.FC = () => {
  const [isLighted, setIsLighted] = useState(false)
  const [interval, setInterval] = useState(0)

  useInterval(() => {
    setIsLighted(!isLighted)
  }, interval)

  return (
    <Container>
      <Circle isLighted={isLighted} />
      <Button type="button" onClick={() => setInterval(1000)}>
        Start
      </Button>
      <Button type="button" onClick={() => setInterval(0)}>
        Stop
      </Button>
    </Container>
  )
}

export default Main
