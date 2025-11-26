
import { useRef, } from 'react'
import {useNavigate} from 'react-router-dom'
import api from '../../services/api'

import {
  Title,
  Container,
  ContainerInputs,
  InputLabel,
  Input,
  Form
} from './styles'

import Button from '../../components/Button'
import TopBackground from '../../components/TopBackGround'

function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

const navigate = useNavigate()

  async function registerNewUser() {
    try {
    const data = await api.post('/usuarios', {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value,
    })

   navigate('/Lista-de-usuarios')

  }catch (error) {
    console.error('Erro ao cadastrar usuário:', error)

    alert("Erro ao cadastrar usuário. Veja o console para detalhes.")
  }
  }
  return (

    <Container>
    <TopBackground />

      <Form>
        <Title>Cadastrar Usuários</Title>

        <ContainerInputs>

          <div>
            <InputLabel>
              Nome <span>*</span>
              <Input type="text" placeholder="Nome do Usuário" ref={inputName} />
            </InputLabel>
          </div>

          <div>
            <InputLabel>
              Idade <span>*</span>
              <Input type="number" placeholder="Idade do Usuário" ref={inputAge} />
            </InputLabel>
          </div>

        </ContainerInputs>
        <div style={{ width: '100%' }}>
          <InputLabel>
            Email <span>*</span>
            <Input type="email" placeholder="E-mail do Usuário" ref={inputEmail} />
          </InputLabel>
        </div>



      <Button type="button" onClick={registerNewUser} theme="primary">Cadastrar Usuários</Button >

      </Form>

       
      <Button type="button" onClick={() => navigate('/Lista-de-usuarios')} > Ver Lista de Usuários</Button>


    </Container>


  )
}

export default Home

