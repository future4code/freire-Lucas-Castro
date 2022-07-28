import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
`

export class Forms1 extends React.Component {
    state = {

    }

    render() {
        return (
            <Button onClick={this.props.OnSubmit}>{this.props.ButtonName}</Button>
        )
    }

}

export default Forms1;