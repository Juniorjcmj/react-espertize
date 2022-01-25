import React, { useState } from 'react';
import Button from '../../shared/Button';
import Header from '../Header';
import './App.css';
import Container from '../../shared/Container/Container';
import Input from '../../shared/Input';


function TestComponent (){
  return <img width={16} src='http://1.bp.blogspot.com/-EXLt4mka7Qs/U-DiNSKETSI/AAAAAAAAGqI/lfw8PYnoNuk/s1600/Bot%C3%A3o-Desliga-em-png-queroiamgem-Cei%C3%A7a-Crispim+(1).png' alt='clicar'></img>
}


function App() {

  const [street, setStreet] = useState('')

  return (
    <div className="App">
     <Header title = 'Sistema Gestão' />    
      <Container >
           <ul>
             {
               ['Daniel', 'Clarinha', 'Isabela', 'Maria Luiza'].map((name, index) =>{
                  return <li key={index}>
                             {name}
                         </li>

               })
             }
           </ul>
     </Container>
      </div>
       
  );
}

export default App;
