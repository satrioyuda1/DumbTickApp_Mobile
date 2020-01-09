import React, {Component} from 'react';
import {Container, Header, Body, Title, Text} from 'native-base';
import {TouchableOpacity} from 'react-native';
export default class Navbar extends Component {
  render() {
    return (
      <Header style={{backgroundColor: '#f44336'}}>
        <Body>
          <Title>DumbTickApp</Title>
        </Body>
      </Header>
    );
  }
}
