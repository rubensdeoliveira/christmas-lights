import React, { useState, useCallback } from 'react'

import { useInterval } from '../../hooks/interval.hook'

import { Container, CircleContainer, Circle, ButtonContainer } from './styles'

const Main: React.FC = () => {
  const [interval, setInterval] = useState(0)
  const [circleRow, setCircleRow] = useState([
    { color: 'red', isLighted: false },
    { color: 'blue', isLighted: false },
    { color: 'yellow', isLighted: false },
    { color: 'green', isLighted: false },
    { color: 'purple', isLighted: false },
    { color: 'orange', isLighted: false },
    { color: 'cyan', isLighted: false },
  ])
  const [circleSize, setCircleSize] = useState('100')
  const [circleRowsAmount, setCircleRowsAmount] = useState(1)

  useInterval(() => {
    const newCircleRow = circleRow

    const circleOnIndex = newCircleRow.findIndex((circle) => circle.isLighted)

    if (circleOnIndex < 0) {
      newCircleRow[0].isLighted = true
      setCircleRow([...newCircleRow])
      return
    }

    newCircleRow[circleOnIndex].isLighted = false

    circleOnIndex === newCircleRow.length - 1
      ? (newCircleRow[0].isLighted = true)
      : (newCircleRow[circleOnIndex + 1].isLighted = true)

    setCircleRow([...newCircleRow])
  }, interval)

  const handleStop = useCallback(() => {
    setInterval(0)

    const newCircleRow = circleRow

    newCircleRow.forEach((_, index) => {
      newCircleRow[index].isLighted = false
    })

    setCircleRow([...newCircleRow])
  }, [circleRow])

  const handleCircleSizeInputChange = useCallback((event) => {
    const circleSizeText = event.target.value

    setCircleSize(circleSizeText)
  }, [])

  const handleCircleRowsInputChange = useCallback((event) => {
    const circleRowsAmountText = event.target.value

    setCircleRowsAmount(circleRowsAmountText)
  }, [])

  const circleHolder = []
  for (let i = 0; i < circleRowsAmount; i += 1) {
    circleHolder.push(
      <CircleContainer>
        {circleRow.map((circle) => (
          <Circle
            key={circle.color}
            isLighted={circle.isLighted}
            color={circle.color}
            size={circleSize}
          />
        ))}
      </CircleContainer>,
    )
  }

  return (
    <Container>
      <h1>Christmas Lights</h1>

      <span>Tamanho do círculo</span>
      <input
        onChange={(event) => handleCircleSizeInputChange(event)}
        value={circleSize}
      />

      <span>Número de linhas</span>
      <input
        onChange={(event) => handleCircleRowsInputChange(event)}
        value={circleRowsAmount}
      />

      {circleHolder}

      <ButtonContainer>
        <button type="button" onClick={() => setInterval(1000)}>
          Start
        </button>
        <button type="button" onClick={handleStop}>
          Stop
        </button>
      </ButtonContainer>
    </Container>
  )
}

export default Main
