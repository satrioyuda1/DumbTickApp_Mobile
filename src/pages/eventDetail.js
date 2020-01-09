import React, {Component} from 'react';
import {Image} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  View,
  Right,
} from 'native-base';

import Axios from 'axios';
import Icon from 'react-native-vector-icons/Octicons';

export default class EventDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: [],
    };
  }

  componentDidMount() {
    const {params} = this.props.navigation.state;

    Axios.get(`http://192.168.1.36:5000/api/v1/event/ ${params.events}`)
      .then(res => {
        this.setState({event: res.data});
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }

  render() {
    let startTime = `"${this.state.event.startTime}"`;
    let endTime = `"${this.state.event.endTime}"`;
    return (
      <Container>
        <Button danger style={{justifyContent: 'center'}}>
          <Text>Event Detail</Text>
        </Button>
        <Content>
          <Card style={{backgroundColor: 'red'}}>
            <CardItem>
              <Image
                source={{
                  uri: `${this.state.event.img}`,
                }}
                style={{height: 200, width: '100%', flex: 1}}
              />
            </CardItem>
            <CardItem style={{display: 'flex'}}>
              <Left style={{flex: 1}}>
                <View>
                  <Text style={{fontSize: 25}}>{this.state.event.title}</Text>
                  <Text style={{color: 'red'}}>
                    {this.state.event.category}
                  </Text>
                </View>
              </Left>
              <Right style={{flex: 1}}>
                <Button danger>
                  <Text>Rp. {this.state.event.price}</Text>
                </Button>
              </Right>
            </CardItem>
            <CardItem>
              <View style={{flex: 1}}>
                <Text>Hosted By</Text>
                <Text>{this.state.event.name}</Text>
              </View>
              <View style={{flex: 2, backgroundColor: '#CCCC'}}>
                <Text>Date & Time</Text>
                <Text>
                  <Icon name="calendar" />
                  {startTime.slice(1, 11)} - {endTime.slice(1, 11)}
                </Text>
                <Text>
                  <Icon name="clock" />
                  {startTime.slice(12, 17)} - {endTime.slice(12, 17)}
                </Text>
              </View>
            </CardItem>
            <CardItem>
              <View style={{flex: 1}}>
                <Text>
                  {' '}
                  <Icon name="person" />
                  Contact Person
                </Text>
                <Text>Name:{this.state.event.name}</Text>
                <Text>Telp:{this.state.event.noTelp}</Text>
                <Text>Email:{this.state.event.email}</Text>
              </View>
            </CardItem>
            <CardItem>
              <Text>
                <Icon name="location" /> {this.state.event.address}
              </Text>
            </CardItem>

            <CardItem>
              <View style={{backgroundColor: '#CCCC'}}>
                <Text>Description :</Text>
                <Text>{this.state.event.description}</Text>
              </View>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
