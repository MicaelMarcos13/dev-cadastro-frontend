
import { useEffect, useState } from 'react'
import api from '../../../services/api';
import { useNavigate } from 'react-router-dom';

import Button from '../../../components/Button';
import TopBackground from '../../../components/TopBackGround';
import { AvatarUser, CardUsers, ContainerUsers, Containner, Title, TrashIcon } from './styles';
import trash from '../../../assets/trash.svg'


function ListUsers() {
    const [users, setUsers] = useState([])
    const navigate = useNavigate();

    useEffect(() => {

        async function getUsers() {
            const { data } = await api.get('/usuarios')

            setUsers(data)

        }
        getUsers()
    }, [])

    async function deleteUser(id) {
        
            await api.delete(`/usuarios/${id}`)

            const filteredUsers = users.filter(user => user.id !== id)
            setUsers(filteredUsers)
        }

    return (
        <Containner>
            <TopBackground />
            <Title>Lista de usuários</Title>

            <ContainerUsers>
                {users.map(user => (
                    <CardUsers key={user.id}>
                        <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`}/>
                        <div>
                            <h3>{user.name}</h3>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                            
                        </div>
                        <TrashIcon src={trash} onClick={() => deleteUser(user.id)}/>
                    </CardUsers>
                ))}
            </ContainerUsers>

            <Button onClick={() => navigate("/")}>Voltar</Button>
        </Containner>

    )
}


export default ListUsers