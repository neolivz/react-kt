import React, { Component } from 'react';
import PropTypes from 'prop-types'
import logo from './logo.svg';
import './App.css';



const ChildApp = ({name = 'My Name', age, onHeaderClick}) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 onClick={onHeaderClick} className="App-title">Welcome to, {name} {age}</h1>
      </header>
      <p className="App-intro">
        To get started, Function <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}

ChildApp.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
}
// ChildApp.defaultProps = {
//   name: 'Jishnu'
// }

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'Something',
      age: 18
    }
   
    this.headerClick = this.headerClick.bind(this)
  }

  componentDidMount(){
    setTimeout(() => {
      this.state.name = 'Something Else'
    }, 5000)
    setTimeout(() => {
      this.setState({
        age: 25
      })
    }, 1000)
    setTimeout(() => {
      this.setState({
        age: 35
      })
    }, 10000)
  }

  componentWillMount(){
  }

  componentWillReceiveProps(){

  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  headerClick () {
    this.setState({
      age: this.state.age + 1
    })
  }

  render() {
    return (
      <div>
        <ChildApp age={this.state.age} name={this.state.name} onHeaderClick={this.headerClick}/>
        <ChildApp age={this.state.age} name='Jishnu' onHeaderClick={this.headerClick}/>
    </div>);
  }
}

export default App;
