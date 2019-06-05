import React from 'react';
import OptionBox from "./components/OptionBox";
import rock from "./images/Rock.jpg";
import paper from "./images/Paper.jpeg";
import scissor from "./images/Scissors.jpeg"
import optionClick from './components/OptionBox.js'
import { Container, Header, } from "semantic-ui-react";

class App extends React.Component{
 state = { userChoice: null, compChoice: null, };

 optionClick = (option) => {
   const {userChoice} = this.state;
   this.setState({userChoice: option});
 };

  render () {
    return(
      <Container style={{marginTop: "25px", }}>
        <Header as="h1">React RPS</Header>
        <hr />
        <OptionBox name="rock" img={rock} optionClick={this.optionClick}/>
        <OptionBox name="paper" img={paper} />
        <OptionBox name="scissors" img={scissor} />
        <hr />
        {/* <h2 src={userChoice}></h2> */}
      </Container>
      
    )
  }
}

export default App;
