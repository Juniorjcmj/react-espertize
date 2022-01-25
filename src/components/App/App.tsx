import { useState } from 'react';
import Header from '../Header';
import './App.css';
import Container from '../../shared/Container/Container';
import Table, { TableHeader } from '../../shared/Table';
import Products from '../../shared/Table/Table.mockdata';
import Form from '../../shared/Form';
import Input from '../../shared/Input';
import Button from '../../shared/Button';

const headers: TableHeader[] = [
  {key: 'id', value: 'ID'},
  {key: 'name', value: 'Product'},
  {key: 'price', value: 'Price',right: true },
  {key: 'stock', value: 'Available Stock', right: true}]

function App() {
  return (
    <div className="App">
     <Header title = 'Sistema Gestão' />    
      <Container >
           <Table
           headers={headers}
           data={Products}
           />
           <Form 
           title='Formulário de produtos'
           onSubmit={console.log}
           >
             <Input 
                label='Name'
                placeholder='E.g: Cookie'
             />
             <Input 
                label='Price'
                type= "number"
                step= "0.01"
                min="0"
                placeholder='E.g: 1.25'
             />
             <Input 
                label='Estoque'
                type= "number"
                min="0"
                placeholder='E.g: Cookie'
             />
             <Button>
                Submit
             </Button>
           </Form>
     </Container>
      </div>       
  );
}

export default App;
