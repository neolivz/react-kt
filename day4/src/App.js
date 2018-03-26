import React, { Component } from 'react';
import PropTypes from 'prop-types'
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {login} from './actions/loginActions'
import Login from './containers/login/LoginContainer'
import Welcome from './components/welcome/Welcome'


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
        <Login />
    </div>);
  }
}

export default App;
