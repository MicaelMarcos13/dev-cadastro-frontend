import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #181f36;
  padding: 20px;
  justify-content: space-evenly;
`



export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  `

export const Title = styled.h2`
  color: #ffffff;
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
`

export const ContainerInputs = styled.div`
  display: flex;
  gap: 20px;
`

export const Input = styled.input`
  border-radius: 10px;
  background-color: #ffffff;
  padding: 12px 20px;
  border: 1px solid #d2dae2;
  outline: none;
  width:100%;
`

export const InputLabel = styled.label`
  color: #ffffff;
  font-size: 12px;
  font-weight: 500;


  span{
    color: #ff6b6b;
    font-weight: bold;
  }
`

