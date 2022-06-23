import './App.css';
import React from 'react';
import styled from 'styled-components';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Forms1 from './components/Forms1';

const MainContainer = styled.main`
min-width: 600px;
max-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
`

class App extends React.Component {
  state={
    CurrentSection: 'Section1'
  }

  GoSection2 = () => {
    this.setState({CurrentSection: 'Section2'})
    console.log(this.state.CurrentSection)
  }

  GoSection3 = () => {
    this.setState({CurrentSection: 'Section3'})
    console.log(this.state.CurrentSection)
  }

  GoSection4 = () => {
    this.setState({CurrentSection: 'Section4'})
    console.log(this.state.CurrentSection)
  }

  render(){
    switch(this.state.CurrentSection){
      case 'Section2':
        return (
          <MainContainer>
            <Section2/>
            <Forms1
            ButtonName = 'Próxima Etapa'
            OnSubmit = {this.GoSection3}/>
          </MainContainer>
        )

      case 'Section3':
          return (
            <MainContainer>
              <Section3/>
              <Forms1
              ButtonName = 'Finalizar'
              OnSubmit = {this.GoSection4}/>
            </MainContainer>
          )

      case 'Section4':      
          return (
            <MainContainer>
              <h2>Formulário Encaminhado!</h2>
              <h2>Muito obrigado!</h2>
            </MainContainer>
          )

      default:
        return(
          <MainContainer>
            <Section1/>
            <Forms1
            ButtonName = 'Próxima Etapa'
            OnSubmit = {this.GoSection2}
            />
          </MainContainer>
        )
    }
  }
  

}
export default App;