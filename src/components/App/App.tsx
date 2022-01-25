import React from 'react';
import Button from '../Button';
import Header from '../Header';
import './App.css';

const TestComponent = () =>{
  return <img width={16} src='http://1.bp.blogspot.com/-EXLt4mka7Qs/U-DiNSKETSI/AAAAAAAAGqI/lfw8PYnoNuk/s1600/Bot%C3%A3o-Desliga-em-png-queroiamgem-Cei%C3%A7a-Crispim+(1).png' alt='clicar'></img>
}


function App() {
  return (
    <div className="App">
     <Header title = 'Sistema Gestão' />    
      <div className = 'Container'  >
       <Button
       onClick={()=> window.alert('Clicou no botão')}
       appendIcon={<TestComponent />}
       >
         Potato
       </Button>
      </div>
       
    </div>
  );
}

export default App;
