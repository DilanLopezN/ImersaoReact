import { Container, Content, Row } from './styles/styles'
import InputComponent from './components/Input'
import Button from './components/Button'
import { useState } from 'react'

function App() {
  const [currentNumber, setCurrentNumber] = useState(0)
  const [firstNumber, setFirstNumber] = useState(0)
  const [operation, setOperation] = useState('')

  const handleAddNumber = number => {
    setCurrentNumber(prev => `${prev}${number}`)
  }
  const handleClear = () => {
    setCurrentNumber('')
    setFirstNumber('0')
    setOperation('')
  }
  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }
  const handleMinusNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('-')
    } else {
      const sum = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }
  const handleDividerNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('/')
    } else {
      const sum = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers()
          break
        case '-':
          handleMinusNumbers()
          break
        case '/':
          handleDividerNumbers()
          break
        default:
          break
      }
    }
  }

  return (
    <Container>
      <Content>
        <InputComponent value={currentNumber} />
        <Row>
          <Button label="%" />
          <Button label="C" onClick={() => handleClear()} />
          <Button label="X" />
          <Button label="/" onClick={handleDividerNumbers} />
        </Row>

        <Row>
          <Button label="7" onClick={() => handleAddNumber(7)} />
          <Button label="8" onClick={() => handleAddNumber(8)} />
          <Button label="9" onClick={() => handleAddNumber(9)} />
          <Button label="-" onClick={handleMinusNumbers} />
        </Row>

        <Row>
          <Button label="4" onClick={() => handleAddNumber(4)} />
          <Button label="5" onClick={() => handleAddNumber(5)} />
          <Button label="6" onClick={() => handleAddNumber(6)} />
          <Button value={0} label="+" onClick={handleSumNumbers} />
        </Row>

        <Row>
          <Button label="1" onClick={() => handleAddNumber(1)} />
          <Button label="2" onClick={() => handleAddNumber(2)} />
          <Button label="3" onClick={() => handleAddNumber(3)} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  )
}

export default App
