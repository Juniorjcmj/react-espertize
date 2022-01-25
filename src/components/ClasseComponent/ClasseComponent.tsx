import React from 'react';

class ClassComponent extends React.Component<{name: string}>{
    constructor(props: any){
        super(props)
        console.log('01 no ciclo de vida Construtor')
    }
    
    state ={
        name: 'Olá mundo Java'
    };

    componentDidMount(){
        console.log('03 ciclo de vida DidMount')
    }
    componentDidUpdate(){
        console.log('04 no ciclo de vida mas só executa se houver alteração no component, DidUpdate')
    }

    render()  {
        //return <div>{this.props.name}. eu sou um component baseado em classe</div>
       console.log('02 no ciclo de vida render')
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