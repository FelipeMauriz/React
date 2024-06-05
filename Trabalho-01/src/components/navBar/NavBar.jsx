import { useState, useEffect } from 'react';

const cores = ['#424040', '#33FF57', '#3357FF', '#F333FF'];

export function MudaCor() {
  const [corAtual, setCorAtual] = useState(cores[0]);
  const [indiceCor, setIndiceCor] = useState(0);

  useEffect(() => {
    document.body.style.backgroundColor = corAtual;
  }, [corAtual]);

  const trocaCor = () => {
    const novoIndice = (indiceCor + 1) % cores.length;
    setIndiceCor(novoIndice);
    setCorAtual(cores[novoIndice]);
    console.log(`Código HEX da cor atual: ${cores[novoIndice]}`);
  };

  const NavBar = ({ trocaCor }) => {
    return (
      <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
          <button
            className="btn btn-primary"
            type="button"
            onClick={trocaCor}
          >
            Mudar cor da tela
          </button>
        </form>
      </nav>
    );
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <NavBar trocaCor={trocaCor} />
    </div>
  );
}
