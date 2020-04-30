import React, { useState, useCallback } from 'react'

import { Container, Circle, Button } from './styles'

const Main: React.FC = () => {
  const [isLighted, setIsLighted] = useState(false)

  const handleStartButton = useCallback(() => {
    setIsLighted(!isLighted)
  }, [isLighted])

  return (
    <Container>
      <Circle isLighted={isLighted} />
      <Button type="button" onClick={handleStartButton}>
        Start
      </Button>
    </Container>
  )
}

export default Main
