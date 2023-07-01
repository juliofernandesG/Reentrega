/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import { TextField, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import { collection, doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { firestore } from '../config/firebase';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: '20px',
  backgroundColor: '#f9fafb',
});

const Title = styled('h1')({
  marginBottom: '24px',
});

const Card = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '16px',
  backgroundColor: 'white',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  maxWidth: '300px',
  margin: '16px',
});

const ProductImage = styled('img')({
  width: '200px',
  marginBottom: '16px',
});

const ProductTitle = styled('h2')({
  marginBottom: '8px',
});

const ProductPrice = styled('p')({
  marginBottom: '16px',
});

const ProductPage = () => {
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('');
  const [products, setProducts] = useState([]);

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleStockChange = (event) => {
    setStock(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      if (productId) {
        const productRef = doc(firestore, 'products', productId);
        await updateDoc(productRef, {
          productName,
          description,
          price,
          category,
          stock,
        });

        console.log('Produto atualizado com sucesso. ID do documento:', productId);
      } else {
        const productsRef = collection(firestore, 'products');
        const docRef = await setDoc(productsRef, {
          productName,
          description,
          price,
          category,
          stock,
        });

        console.log('Produto adicionado com sucesso. ID do documento:', docRef.id);
      }

      // Limpar os campos do formulário
      setProductId('');
      setProductName('');
      setDescription('');
      setPrice('');
      setCategory('');
      setStock('');

      // Atualizar a lista de produtos
      fetchProducts();
    } catch (error) {
      console.error('Erro ao adicionar/atualizar o produto:', error);
    }
  };

  const fetchProducts = async () => {
    try {
      const productsRef = collection(firestore, 'products');
      const querySnapshot = await getDocs(productsRef);
      const productsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsData);
    } catch (error) {
      console.error('Erro ao buscar os produtos:', error);
    }
  };

  const handleEditProduct = async (productId) => {
    try {
      const productRef = doc(firestore, 'products', productId);
      const productSnapshot = await getDoc(productRef);
      const productData = productSnapshot.data();

      setProductId(productId);
      setProductName(productData.productName);
      setDescription(productData.description);
      setPrice(productData.price);
      setCategory(productData.category);
      setStock(productData.stock);
    } catch (error) {
      console.error('Erro ao buscar o produto para edição:', error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      const productRef = doc(firestore, 'products', productId);
      await deleteDoc(productRef);

      console.log('Produto excluído com sucesso. ID do documento:', productId);

      // Atualizar a lista de produtos
      fetchProducts();
    } catch (error) {
      console.error('Erro ao excluir o produto:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const theme = createTheme({
    palette: {
      primary: {
        main: blue[500],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Title>{productId ? 'Editar Produto' : 'Adicionar Produto'}</Title>
        <form onSubmit={handleFormSubmit}>
          <TextField
            label="Nome do Produto"
            value={productName}
            onChange={handleProductNameChange}
          />
          <TextField
            label="Descrição"
            value={description}
            onChange={handleDescriptionChange}
          />
          <TextField
            label="Preço"
            type="number"
            value={price}
            onChange={handlePriceChange}
          />
          <TextField
            label="Categoria"
            value={category}
            onChange={handleCategoryChange}
          />
          <TextField
            label="Estoque"
            type="number"
            value={stock}
            onChange={handleStockChange}
          />
          <Button variant="contained" type="submit">
            {productId ? 'Atualizar Produto' : 'Adicionar Produto'}
          </Button>
        </form>
        <Title>Lista de Produtos</Title>
        {products.map((product) => (
          <Card key={product.id}>
            <ProductImage src={product.image} alt={product.productName} />
            <ProductTitle>{product.productName}</ProductTitle>
            <ProductPrice>R${product.price}</ProductPrice>
            <p>{product.description}</p>
            <Button variant="contained" onClick={() => handleEditProduct(product.id)}>
              Editar
            </Button>
            <Button variant="contained" color="error" onClick={() => handleDeleteProduct(product.id)}>
              Excluir
            </Button>
          </Card>
        ))}
      </Container>
    </ThemeProvider>
  );
};

export default ProductPage;
