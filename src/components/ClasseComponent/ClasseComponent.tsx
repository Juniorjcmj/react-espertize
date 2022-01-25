import React from 'react';

class ClassComponent extends React.Component<{name: string}>{
    
    state ={
        name: 'Olá mundo Java'
    };

    render()  {
        //return <div>{this.props.name}. eu sou um component baseado em classe</div>

        return <div>
            <p>name: {this.state.name}</p>
            <button onClick={() =>
            this.setState({name: 'Tamandaré'})
            }
            >click me</button>
        </div>
    }
 }
    export default ClassComponent;