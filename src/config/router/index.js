import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import Timeline from '../../pages/timeline';
import CategoryDetail from '../../pages/categoryDetail';
import EventDetail from '../../pages/eventDetail';
import Profil from '../../pages/Profil';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {Icon} from 'native-base';

class DashboardScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>DashboardScreen</Text>
      </View>
    );
  }
}

class MyTicket extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>MyTicket</Text>
      </View>
    );
  }
}

class Payment extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Payment</Text>
      </View>
    );
  }
}

//
const Tiketku = createStackNavigator(
  {
    Timeline,
    EventDetail,
    CategoryDetail,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Timeline',
  },
);
//
const DashboardTabNavigator = createBottomTabNavigator(
  {
    Tiketkuu: {
      screen: Tiketku,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={{color: tintColor}} size={25} name={'ios-home'} />
          </View>
        ),
      },
    },
    Payment: {
      screen: Payment,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={{color: tintColor}} size={25} name={'ios-cart'} />
          </View>
        ),
      },
    },
    MyTicket: {
      screen: MyTicket,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={{color: tintColor}} size={25} name={'ios-paper'} />
          </View>
        ),
      },
    },
    Profil: {
      screen: Profil,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={{color: tintColor}} size={25} name={'md-person'} />
          </View>
        ),
      },
    },
  },
  {
    navigationOptions: ({navigation}) => {
      const {routeName} = navigation.state.routes[navigation.state.index];
      if (navigation.state.index == 0) {
        return {
          header: null,
        };
      } else {
        return {
          headerTitle: routeName,
        };
      }
    },
  },
);
const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: DashboardTabNavigator,
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerLeft: (
          <View
            style={{paddingLeft: 10}}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
      };
    },
  },
);

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: DashboardStackNavigator,
  },
});

const AppSwitchNavigator = createSwitchNavigator({
  Dashboard: {screen: AppDrawerNavigator},
});

const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer;
