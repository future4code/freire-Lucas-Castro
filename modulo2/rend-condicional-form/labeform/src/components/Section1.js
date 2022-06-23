import React from 'react';
import styled from 'styled-components';
import Forms2 from './Forms2';
import Forms3 from './Forms3';

const Container1 = styled.div`
    
    min-width: 80%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export class Section1 extends React.Component {
    state = {
        Pergunta1: '',
        Pergunta2: '',
        Pergunta3: '',
        Pergunta4: '',
    }
    onChangePergunta1 = (event) => {
        this.setState({ Pergunta1: event.target.value })
    }
    onChangePergunta2 = (event) => {
        this.setState({ Pergunta2: event.target.value })
    }
    onChangePergunta3 = (event) => {
        this.setState({ Pergunta3: event.target.value })
    }
    onChangePergunta4 = (event) => {
        this.setState({ Pergunta4: event.target.value })
    }

    render() {
        return (
            <Container1>
                <h2>Dados Gerais</h2>
                <Forms2
                    Pergunta='1-Qual seu nome?'
                    OnChangeInput={this.onChangePergunta1}
                    InputValue={this.state.Pergunta1}
                    Type='text'
                    Placeholder='Digite seu nome completo:'
                />


                <Forms2
                    Pergunta='2. Qual a sua idade?'
                    OnChangeInput={this.onChangePergunta2}
                    InputValue={this.state.Pergunta2}
                    Type='number'
                    Placeholder='Digite sua idade'

                />
                <Forms2
                    Pergunta='3. Qual o seu e-mail?'
                    OnChangeInput={this.onChangePergunta3}
                    InputValue={this.state.Pergunta3}
                    Type='email'
                    Placeholder='Digite seu e-mail'

                />
                <Forms3
                    Pergunta='4. Qual a sua escolaridade?'
                    OnChangeSelect={this.onChangePergunta4}
                    SelectValue={this.state.Pergunta4}
                    HeadOption='Selecione a escolaridade'
                    Option1='Ensino Médio Incompleto'
                    Option2='Ensino Médio Completo'
                    Option3='Ensino Superior Incompleto'
                    Option4='Ensino Superior Completo'

                />

            </Container1>


        )
    }
}

export default Section1;