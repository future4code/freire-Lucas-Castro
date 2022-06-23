import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
`



export class Forms2 extends React.Component {
    state = {

    }

    render() {
        return (
            <InputContainer>
                <label>{this.props.Pergunta}</label>
                <input onChange={this.props.OnChangeInput} value={this.props.InputValue} type={this.props.Type} placeholder={this.props.Placeholder} />
            </InputContainer>
        )
    }
}

export default Forms2;
