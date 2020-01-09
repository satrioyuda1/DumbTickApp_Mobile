import React, {Component} from 'react';
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
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
  View,
  Right,
} from 'native-base';
import Navbar from '../components/Navbar';
import Axios from 'axios';
import Icons from 'react-native-vector-icons/Octicons';
export default class CategoryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    const {params} = this.props.navigation.state;
    console.log(params.categoryId);
    Axios.get(
      `http://192.168.1.36:5000/api/v1/category/${params.categoryId}/events`,
    ).then(res => {
      this.setState({events: res.data});
      console.log(res.data);
    });
  }

  render() {
    const {params} = this.props.navigation.state;
    console.log(this.state.event);
    return (
      <Container>
        <Button danger style={{justifyContent: 'center'}}>
          <Text>{params.categoryName}</Text>
        </Button>

        <View style={{flex: 1}}>
          <Content>
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
                      <Button
                        light
                        onPress={() =>
                          this.props.navigation.navigate('CategoryDetail', {
                            categoryId: item.id,
                            categoryName: item.name,
                          })
                        }>
                        {' '}
                        danger>
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
                    </Body>
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Body>
                        <TouchableOpacity
                          onPress={() =>
                            this.props.navigation.navigate('EventDetail', {
                              events: item.id,
                            })
                          }></TouchableOpacity>
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
        </View>
      </Container>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
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
