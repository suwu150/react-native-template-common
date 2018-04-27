import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Home extends Component{
  static navigationOptions = {
    title: 'react-native-template-common'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          欢迎来到 react-native-template-common!
        </Text>
        <Text style={styles.instructions}>
          进入src目录，开始开发自己的app
        </Text>
        <Text style={styles.instructions}>
          这是第二个页面，没有点击事件
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Home;
