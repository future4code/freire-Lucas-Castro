import React from 'react';
import styled from 'styled-components'
import Forms2 from './Forms2'
import Forms3 from './Forms3'

const Container3 = styled.section`
    
    min-width: 80%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export class Section3 extends React.Component {
    state = {
        Pergunta1: '',
        Pergunta2: '',

    }
    onChangePergunta1 = (event) => {
        this.setState({ Pergunta1: event.target.value })
    }
    onChangePergunta2 = (event) => {
        this.setState({ Pergunta2: event.target.value })
    }

    render() {
        return (
            <Container3>
                <h2>Informações Gerais de Ensino</h2>
                <Forms2
                    Pergunta='Porquê você não concluiu Curso Superior?'
                    OnChangeInput={this.onChangePergunta1}
                    InputValue={this.state.Pergunta1}
                    Type='text'
                    Placeholder='Digite sua justificativa'
                />
                <Forms3
                    Pergunta='Selecione abaixo curso complementar caso tenha realizado. Caso contrário, selecione "nenhum".'
                    OnChangeSelect={this.onChangePergunta2}
                    SelectValue={this.state.Pergunta2}
                    Option1='Nenhum'
                    Option2='Curso Técnico'
                    Option3='Curso de Inglês'

                />

            </Container3>
        )
    }

}

export default Section3;