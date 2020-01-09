import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';
import Navbar from '../components/Navbar';
import Icons from 'react-native-vector-icons/Octicons';
import Axios from 'axios';

export default class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      events: [],
      todays: [],
    };
  }

  componentDidMount() {
    Axios.get(`http://192.168.1.36:5000/api/v1/categories`)
      .then(res => {
        const categories = res.data;

        this.setState({categories: res.data});
      })
      .catch(error => console.log(error));
    Axios.get(`http://192.168.1.36:5000/api/v1/events`)
      .then(res => {
        const events = res.data;

        this.setState({events: res.data});
      })
      .catch(error => console.log(error));
    Axios.get('http://192.168.1.36:5000/api/v1/today').then(res => {
      const todays = res.data;
      this.setState({todays: res.data});
    });
  }

  render() {
    console.log(this.state.categories);
    console.log(this.state.events);
    return (
      <View style={Styles.container}>
        <Navbar />
        <ScrollView style={{flex: 1}}>
          <ScrollView style={{marginTop: 10}}>
            <FlatList
              data={this.state.categories}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <Button
                  light
                  onPress={() =>
                    this.props.navigation.navigate('CategoryDetail', {
                      categoryId: item.id,
                      categoryName: item.name,
                    })
                  }>
                  <Text style={{color: 'black'}}>{item.name}</Text>
                </Button>
              )}
            />
          </ScrollView>

          <Content>
            <Text style={{fontSize: 36, color: '#f44336'}}>Events</Text>
            <FlatList
              data={this.state.events}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <Card style={{flex: 0}}>
                  <CardItem>
                    <Left>
                      {/* <Thumbnail
                        source={{
                          uri: `${item.users.img}`,
                        }}
                      /> */}
                      <Button danger>
                        <Text>Rp.{item.price}</Text>
                      </Button>
                      <Body></Body>
                    </Left>
                    {/* <Right>
                      <TouchableOpacity onPress={() => alert('you liked')}>
                        <Image
                          style={Styles.iconmenu}
                          source={require('../icon/like.png')}></Image>
                      </TouchableOpacity>
                    </Right> */}
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Image
                        source={{
                          uri: `${item.image}`,
                        }}
                        style={{height: 200, width: '100%', flex: 1}}
                      />
                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.navigate('EventDetail', {
                            events: item.id,
                          })
                        }></TouchableOpacity>
                    </Body>
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Body>
                        <Text>{item.title}</Text>
                        <Text>
                          {item.description.substring(0, 100) + '...'}
                        </Text>
                        <Text note>{item.startTime}</Text>
                      </Body>
                    </Left>
                    <Right>
                      <Icons
                        name="heart"
                        size={30}
                        style={{marginRight: 15, color: '#f44336'}}
                      />
                    </Right>
                  </CardItem>
                </Card>
              )}
              keyExtractor={item => item.id}
            />
          </Content>
          <Content>
            <Text style={{fontSize: 36, color: '#f44336'}}>Events todays</Text>
            <FlatList
              data={this.state.todays}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <Card style={{flex: 0}}>
                  <CardItem>
                    <Left>
                      {/* <Thumbnail
                        source={{
                          uri: `${item.users.img}`,
                        }}
                      /> */}
                      <Button danger>
                        <Icon name="paper" />
                        <Text>Rp.{item.price}</Text>
                      </Button>
                      <Body></Body>
                    </Left>
                    {/* <Right>
                      <TouchableOpacity onPress={() => alert('you liked')}>
                        <Image
                          style={Styles.iconmenu}
                          source={require('../icon/like.png')}></Image>
                      </TouchableOpacity>
                    </Right> */}
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Image
                        source={{
                          uri: `${item.image}`,
                        }}
                        style={{height: 200, width: '100%', flex: 1}}
                      />
                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.navigate('EventDetail', {
                            events: item.id,
                          })
                        }></TouchableOpacity>
                    </Body>
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Body>
                        <Text>{item.title}</Text>
                        <Text>
                          {item.description.substring(0, 100) + '...'}
                        </Text>
                        <Text note>{item.startTime}</Text>
                      </Body>
                    </Left>
                    <Right>
                      <Icons
                        name="heart"
                        size={30}
                        style={{marginRight: 15, color: '#f44336'}}
                      />
                    </Right>
                  </CardItem>
                </Card>
              )}
              keyExtractor={item => item.id}
            />
          </Content>
        </ScrollView>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCCC',
  },
  itemCategory: {
    marginHorizontal: 10,

    alignItems: 'center',
    justifyContent: 'center',
  },
  iconpost: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  iconmenu: {
    width: 30,
    height: 30,
  },
});
