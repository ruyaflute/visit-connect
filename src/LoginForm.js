import React from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import UserStore from './stores/UserStore';
import { View, Text, TouchableOpacity } from 'react-native';
import Patient from './Patient'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      /* password: '',*/
      buttonDisabled: false
    }
  }

  setInputValue(property, val) {
    val =val.trim();
    if (val.length > 345) {
      return;
    }
    this.setState({
      [property]: val
    })
  }

  resetForm() {
    this.setState({
      username: '',
      /*password: '',*/
      buttonDisabled: false
    })
  }

  async doLogin() {
    if (!this.state.username) {
      return;
    }
    /*if (!this.state.password) {
      return;
    } */

    this.setState({
      buttonDisabled: true
    })

    try {
      let res = await fetch('/login', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.state.username,
          /*password: this.state.password*/
        })
      });
      
      let result = await res.jason();
      if (result && result.success) {
        UserStore.isLoggedIN = true;
        UserStore.username = result.username;
      }
      else if (result && result.success === false) {
        this.resetForm();
        alert(result.msg);
      }
    }
    catch(e) {
      console.log(e);
      this.resetForm();
    }
  }

  render() {
  return (
    <div className="Welcome">
      Welcome to Visit Connect!
    <div className="loginForm">
      Log in
      <InputField
      type='text'
      placeholder='Email'
      value={this.state.username ? this.state.username : ''}
      onChange={ (val) => this.setInputValue('username', val) }
      />
      {/* <InputField
      type='password'
      placeholder='Password'
      value={this.state.password ? this.state.password : ''}
      onChange={ (val) => this.setInputValue('password', val) }
      /> */}

      <SubmitButton
      text='Login'
      disabled={this.state.buttonDisabled}
      onClick={ () => this.doLogin() } />

      {/*<TouchableOpacity
      onPress={() => navigation.navigate('Patient')}
      > */}
        <Text numberOfLines={1} style={{ color: 'white' }}>
          Don't have an account? Creat Account!
      </Text>
      {/*</TouchableOpacity> */}

          </div>
    </div>
  );
}
}

export default LoginForm;
