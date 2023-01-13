import { Container, Content, Row, Column } from './styles/styles'
import InputComponent from './components/Input'
import Button from './components/Button'
import { useState } from 'react'

function App() {
  const [currentNumber, setCurrentNumber] = useState(0)
  const handleAddNumber = number => {
    setCurrentNumber(prev => `${prev}${number}`)
  }
  const handleClear = () => {
    setCurrentNumber('')
  }

  return (
    <Container>
      <Content>
        <InputComponent value={currentNumber} />
        <Row>
          <Button label="%" />
          <Button label="C" onClick={() => handleClear()} />
          <Button label="X" />
          <Button label="/" />
        </Row>

        <Row>
          <Button label="7" onClick={() => handleAddNumber(7)} />
          <Button label="8" onClick={() => handleAddNumber(8)} />
          <Button label="9" onClick={() => handleAddNumber(9)} />
          <Button label="-" onClick={() => handleAddNumber()} />
        </Row>

        <Row>
          <Button label="4" onClick={() => handleAddNumber(4)} />
          <Button label="5" onClick={() => handleAddNumber(5)} />
          <Button label="6" onClick={() => handleAddNumber(6)} />
          <Button
            value={0}
            label="+"
            onClick={() =>
              handleAddNumber(
                Array.from(currentNumber).forEach(function (number) {})
              )
            }
          />
        </Row>

        <Row>
          <Button label="1" onClick={() => handleAddNumber(1)} />
          <Button label="2" onClick={() => handleAddNumber(2)} />
          <Button label="3" onClick={() => handleAddNumber(3)} />
          <Button label="=" />
        </Row>
      </Content>
    </Container>
  )
}

export default App
