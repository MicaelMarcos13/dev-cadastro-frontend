
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';


function BotaoVoltar() {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate("/")}>Voltar</Button>
  );
}

export default BotaoVoltar;