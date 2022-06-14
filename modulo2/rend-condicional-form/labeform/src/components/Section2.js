import React from 'react';
import styled from 'styled-components';
import Forms2 from './Forms2';

const Container2 = styled.div`
   
    min-width: 80%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`


export class Section2 extends React.Component {
    state = {

    }

    render() {
        return (
            <Container2>
                <h2> Informações do Ensino Superior</h2>
                <Forms2
                    Pergunta='Qual Curso?'
                    Type='text'
                    Placeholder='Digite o Curso Superior'
                />
                <Forms2
                    Pergunta='Qual a Unidade de Ensino'
                    Type='text'
                    Placeholder='Digite a Unidade de Ensino'
                />

            </Container2>
        )
    }

}

export default Section2;