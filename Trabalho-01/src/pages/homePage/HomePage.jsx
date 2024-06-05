
import { useNavigate } from 'react-router-dom';
import { Botao } from '../../components/Button/Button';
import Relogio from '../../components/Relogio/Relogio';
import { MudaCor } from '../../components/navBar/NavBar';

export function HomePage() {
  const navigate = useNavigate();

  function handleNavigateToFormulario() {
    navigate('/formulario');
  }

  function handleNavigateToTimePokemon() {
    navigate('/time-pokemon');
  }

  function handleNavigateToListaPokemon() {
    navigate('/buscar-pokemon');
  }

  return (
    <>
      <MudaCor /> 
      <Relogio />
      <br />
      <br />
      <Botao onclick={handleNavigateToFormulario} valor={'Formulario'} />
      <br />
      <br />
      <Botao onclick={handleNavigateToTimePokemon} valor={'Monte Seu time Pokemon'} />
      <br />
      <br />
      <Botao onclick={handleNavigateToListaPokemon} valor={'Encontre o seu Pokemon'} />
      <br />
      <br />
    </>
  );
}
