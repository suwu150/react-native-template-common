import React, { Component } from 'react';
import { Provider } from 'react-redux';  //利用Provider可以使我们的 store 能为下面的子组件所使用
import configureStore from './src/stores/configureStore'; // //引入增强后的store
import Fetcher from './src/network/fetcher';
import Router from './src/routerManager';

const store = configureStore();

export default class App extends Component {
  constructor(props) {
    super(props);
    Fetcher.initNetworkState();
  }

  componentWillUnmount() {
    Fetcher.removeNetworkStateListener();
  }

  render() {
    return (
      <Provider store={store}>
        <Router {...this.props} />
      </Provider>
    );
  }
}
