import React from 'react';
import styled from 'styled-components'

const SelectContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
`


export class Forms3 extends React.Component {
    state = {

    }

    render() {
        return (
            <SelectContainer>
                <label>{this.props.Pergunta}</label>
                <select value={this.props.SelectValue} onChange={this.props.OnChangeSelect}>
                    <option value={this.props.HeadOption}>{this.props.HeadOption}</option>
                    <option value={this.props.ValueOption1}>{this.props.Option1}</option>
                    <option value={this.props.ValueOption2}>{this.props.Option2}</option>
                    <option value={this.props.ValueOption3}>{this.props.Option3}</option>
                    <option value={this.props.ValueOption4}>{this.props.Option4}</option>
                </select>
            </SelectContainer>
        )
    }
}

export default Forms3;