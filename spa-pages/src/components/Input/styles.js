import styled from 'styled-components'

export const InputContainer = styled.div`
  width: 100%;
  max-width: 275px;
  height: 30px;
  border-bottom: 1px solid #383450;

  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
export const IconContainer = styled.div`
  margin-right: 10px;
`

export const InputText = styled.input`
  background-color: transparent;
  color: white;
  border: 0;
  height: 30px;

  width: 100%;
`
export const ErrorText = styled.p`
  color: red;
  font-size: 18px;
  margin: 5px 0;
`
