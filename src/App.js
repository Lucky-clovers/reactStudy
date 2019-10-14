/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: qiye
 * @Date: 2019-10-14 15:53:59
 * @LastEditors: qiye
 * @LastEditTime: 2019-10-14 17:42:36
 */
import React from 'react';
import logo from './logo.svg';
import './App.css';


class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {date:new Date()};
  }
  componentDidMount(){
    this.timerID = setInterval(
      ()=>this.tick(),
      1000
      );
  }
  componentWillUnmount(){
    clearInterval(this.timerID)
  }
  tick(){
    this.setState({
      date:new Date()
    })
  }
  render(){
    return(
      <div>
        <h2>It'is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}



function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function names(){
  return ( 
  <div>
    <Welcome name="Sara" />
    <Welcome name="Cahal" />
    <Welcome name="Edite" />
  </div>
  )
}

function App() {
  const name = 'Josh Perez';
  const element = <h1>Hello, {name}</h1>;;
  return (
    <div className="App">
      {element}
      <Clock/>
      {names()}
    </div>
  );
}

export default App;
