import React, {Component} from 'react';
import './style.css'

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            textoFrase: ''
        };

        this.quebraBiscoito = this.quebraBiscoito.bind(this);


        this.frases = ['Siga os bons e aprenda com eles.', 
            'O bom-senso vale mais do que muito conhecimento.', 
            'O riso é a menor distância entre duas pessoas.', 
            'Deixe de lado as preocupações e seja feliz.',
            'Realize o óbvio, pense no improvável e conquiste o impossível.',
            'Acredite em milagres, mas não dependa deles.',
            'A maior barreira para o sucesso é o medo do fracasso.'
        ];
    }

    //let numeroaleatoria estou pegando a quantidade de frases que tem x (vezes) o num aleatório.

    quebraBiscoito(){
        let state = this.state;
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
        state.textoFrase = '" ' + this.frases[numeroAleatorio] + '"';
        this.setState(state);
    }


    //require = é usado para processar os assets garantindo que a imagens vai abrir corretamente.
    render(){
        return(
            <div className='container'>
                <img src={require('./assets/biscoito.png')} className='img'/>
                <Botao nome='Abrir Biscoito' acaoBtn={this.quebraBiscoito} />
                <h3 className='textoFrase'>{this.state.textoFrase}</h3>
            </div>
        );
    }
}

class Botao extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
            </div>
        )
    }
}

export default App;