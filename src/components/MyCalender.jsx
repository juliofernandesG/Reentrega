import React, { useState } from 'react';
import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

import Navbar from '../components/Navbar';
import Sidebar from '../components/SideBar';
import Footer from '../components/Footer';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  textAlign: 'center',
});

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  textAlign: 'center',
  margin: '0 auto',
  maxWidth: '400px',
});

const Title = styled('h1')({
  marginBottom: '24px',
  fontFamily: 'Arial, sans-serif',
  fontSize: '32px',
  fontWeight: 'bold',
});

const Label = styled('h2')({
  fontFamily: 'Arial, sans-serif',
  fontSize: '24px',
  fontWeight: 'bold',
});

const Text = styled('p')({
  fontFamily: 'Arial, sans-serif',
  fontSize: '18px',
});

const SideInfo = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '200px',
  padding: '16px',
  background: '#f2f2f2',
  borderRadius: '4px',
});

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
});

const MyCalender = () => {
  const [supplierName, setSupplierName] = useState('');
  const [supplierEmail, setSupplierEmail] = useState('');
  const [supplierAddress, setSupplierAddress] = useState('');
  const [supplierPhone, setSupplierPhone] = useState('');

  const handleSupplierNameChange = (event) => {
    setSupplierName(event.target.value);
  };

  const handleSupplierEmailChange = (event) => {
    setSupplierEmail(event.target.value);
  };

  const handleSupplierAddressChange = (event) => {
    setSupplierAddress(event.target.value);
  };

  const handleSupplierPhoneChange = (event) => {
    setSupplierPhone(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Dados do fornecedor:', {
      supplierName,
      supplierEmail,
      supplierAddress,
      supplierPhone,
    });
    // Faça o processamento dos dados do fornecedor aqui, como enviar para um servidor ou salvar em um banco de dados
    // ...
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Sidebar />
      <Container>
        <Title>Cadastro de Fornecedores</Title>
        <div style={{ display: 'flex', gap: '24px' }}>
          <SideInfo>
            <h3>Informações importantes</h3>
            <p>
              Preencha o formulário abaixo para cadastrar um novo fornecedor. Certifique-se de fornecer informações
              precisas e atualizadas.
            </p>
          </SideInfo>
          <Form onSubmit={handleFormSubmit}>
            <div>
              <Label>Nome do Fornecedor</Label>
              <TextField
                label="Nome do Fornecedor"
                value={supplierName}
                onChange={handleSupplierNameChange}
              />
            </div>
            <div>
              <Label>Email do Fornecedor</Label>
              <TextField
                label="Email do Fornecedor"
                value={supplierEmail}
                onChange={handleSupplierEmailChange}
              />
            </div>
            <div>
              <Label>Endereço do Fornecedor</Label>
              <TextField
                label="Endereço do Fornecedor"
                value={supplierAddress}
                onChange={handleSupplierAddressChange}
              />
            </div>
            <div>
              <Label>Telefone do Fornecedor</Label>
              <TextField
                label="Telefone do Fornecedor"
                value={supplierPhone}
                onChange={handleSupplierPhoneChange}
              />
            </div>
            <Button variant="contained" type="submit" sx={{ '&:hover': { backgroundColor: blue[700] } }}>
              Cadastrar Fornecedor
            </Button>
          </Form>
        </div>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default MyCalender;
