import React, {Component} from 'react';
import {
  Text,
  View,
  Platform,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

export default class Profil extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text>Horeeee</Text>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
