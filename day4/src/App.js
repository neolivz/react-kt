import React, { Component } from 'react';
import PropTypes from 'prop-types'
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {login} from './actions/loginActions'
import Login from './components/login/Login'



const ChildApp = ({name = 'My Name', age, loggedIn, onHeaderClick, loginAction}) => {
  return (
    <div className="App">
      <header className="App-header" onClick={loginAction}>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 onClick={onHeaderClick} className="App-title">Welcome to, {name} {age}</h1>
      </header>
      <p className="App-intro">
        {loggedIn ? 'User Logged In': 'User Not Logged In'}
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

const mapStateToProps = (state) => {
  return {
    loggedIn: state.user.loggingIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginAction: () => {
      dispatch(login('RANDOM'))
    }
  }
}
const LoggedInChildApp = connect(mapStateToProps, mapDispatchToProps)(ChildApp)

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
        <LoggedInChildApp age={this.state.age} name='Jishnu' onHeaderClick={this.headerClick}/>
        <Login />
    </div>);
  }
}

export default App;
