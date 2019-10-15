/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: qiye
 * @Date: 2019-10-14 15:53:59
 * @LastEditors: qiye
 * @LastEditTime: 2019-10-15 17:52:51
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
  </div>
  )
}
class Toggle extends React.Component {
  /* 如果你用到了constructor就必须写super(),是用来初始化this的，可以绑定事件到this上;

   如果你在constructor中要使用this.props,就必须给super加参数：super(props)； */
  constructor(){
    super();
    this.state = {name:'Hello world!'};
}

preventPop(name, e){    //事件对象e要放在最后
    e.preventDefault();
    alert(name);
}

  render() {
    return (
      <a href="https://reactjs.org" onClick={this.preventPop.bind(this,this.state.name)}>Click</a>
    );
  }
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}



class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}


function Blog(props){
  const sidebar=(
    <ul>
      {props.posts.map((post)=>
        <li key={post.id}>
          {post.title}
        </li>  
      )}
    </ul>
  );
  const content =(
    <ul>
      {props.posts.map((post)=>
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </li>  
      )}
    </ul>
  );
  return(
    <div>
      {sidebar}
      <br/>
      {content}
    </div>
  )
}

function App() {
  const name = 'Josh Perez';
  const element = <h1>Hello, {name}</h1>;
  const numbers = [1,2,3,4,5];
  const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];
  return (
    <div className="App">
      <Page />
      {element}
      <LoginControl />
      <Blog posts={posts}/>
      <Clock/>
      <Toggle/>
      {names()}
    </div>
  );
}

export default App;
