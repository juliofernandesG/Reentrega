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
  background: '#f2f2f2',
});

const FormContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  maxWidth: '400px',
  padding: '24px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  background: '#ffffff',
});

const Title = styled('h1')({
  marginBottom: '24px',
  fontFamily: 'Arial, sans-serif',
  fontSize: '32px',
  fontWeight: 'bold',
  textAlign: 'center',
});

const Section = styled('div')({
  marginBottom: '24px',
  textAlign: 'center',
});

const Label = styled('h2')({
  fontFamily: 'Arial, sans-serif',
  fontSize: '24px',
  fontWeight: 'bold',
});

const ProductItem = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '16px',
});

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
});

const SalesPage = () => {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [quote, setQuote] = useState('');

  const handleProductChange = (event) => {
    setProduct(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleQuoteSubmit = (event) => {
    event.preventDefault();
    setQuote(`Você solicitou uma cotação de ${quantity} unidades de ${product}. Entraremos em contato em breve.`);
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Sidebar />
      <Container>
        <Title>Solicitar Cotação</Title>
        <FormContainer>
          <Section>
            <Label>Produto</Label>
            <TextField
              label="Produto"
              value={product}
              onChange={handleProductChange}
            />
          </Section>
          <Section>
            <Label>Quantidade</Label>
            <TextField
              label="Quantidade"
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </Section>
          <Button
            variant="contained"
            onClick={handleQuoteSubmit}
            sx={{ '&:hover': { backgroundColor: blue[700] } }}
          >
            Solicitar Cotação
          </Button>
        </FormContainer>
        {quote && (
          <Section>
            <Label>Cotação Solicitada</Label>
            <p>{quote}</p>
          </Section>
        )}
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default SalesPage;
