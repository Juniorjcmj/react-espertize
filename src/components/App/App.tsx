import Header from '../Header';
import './App.css';
import Container from '../../shared/Container/Container';
import Table, { TableHeader } from '../../shared/Table';
import Products from '../../shared/Table/Table.mockdata';

import ProductForm, { ProductCreator } from '../Products/ProductForm';
import { useState } from 'react';

const headers: TableHeader[] = [
  {key: 'id', value: 'ID'},
  {key: 'name', value: 'Product'},
  {key: 'price', value: 'Price',right: true },
  {key: 'stock', value: 'Available Stock', right: true}]



function App() {

  const [products, setProducts] = useState(Products)

  const handleProductSubmit = (product: ProductCreator)=> {

      setProducts([
        ...products,
        {
          id: products.length + 1,
          ...product
        }
      ])
       
  }
  return (
    <div className="App">
     <Header title = 'Sistema Gestão' />    
      <Container >
           <Table
           headers={headers}
           data={products}
           />
           <ProductForm onSubmit={handleProductSubmit}/>
     </Container>
      </div>       
  );
}

export default App;
