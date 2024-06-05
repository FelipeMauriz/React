import { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import './styles.css';

function Formulario() {
  const [nome, setNome] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [cadastrado, setCadastrado] = useState(false);

  const handleCadastrar = () => {
    console.log("Dados do formulário:");
    console.log("Nome:", nome);
    console.log("Nascimento:", nascimento);
    console.log("Telefone:", telefone);
    console.log("Email:", email);
    console.log("CPF:", cpf);
    
    setCadastrado(true);

    setNome('');
    setNascimento('');
    setTelefone('');
    setEmail('');
    setCpf('');
  };

  return (
    <Container maxWidth="sm" component="article" className="form">
      <h1>Formulário de Cadastro</h1>
      <form onSubmit={(event) => { event.preventDefault(); }}>
        <TextField
          id="nome"
          label="Nome"
          variant="outlined"
          margin="dense"
          fullWidth
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
        <TextField
          id="nascimento"
          label="Nascimento"
          type="date"
          variant="outlined"
          margin="dense"
          fullWidth
          value={nascimento}
          onChange={(event) => setNascimento(event.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="telefone"
          label="Telefone"
          variant="outlined"
          margin="dense"
          fullWidth
          value={telefone}
          onChange={(event) => setTelefone(event.target.value)}
        />
        <TextField
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          margin="dense"
          fullWidth
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          id="cpf"
          label="CPF"
          variant="outlined"
          margin="dense"
          fullWidth
          value={cpf}
          onChange={(event) => setCpf(event.target.value)}
        />

        <Button
          type="button"
          className="btn-form"
          variant="contained"
          color="primary"
          onClick={handleCadastrar}
        >
          Cadastrar
        </Button>
      </form>
      {cadastrado && (
        <Typography variant="h6" color="secondary" className="mensagem-sucesso">
          Usuário cadastrado com sucesso!
        </Typography>
      )}
    </Container>
  );
}

export default Formulario;
