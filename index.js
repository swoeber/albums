// import { AppRegistry } from 'react-native';
// import App from './App';
//
// AppRegistry.registerComponent('albums', () => App);

import React from 'react';
import {AppRegistry, View, StatusBar} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/albums/AlbumList';

const App = () => (
    <View style={styles.appStyle}>
      <StatusBar
          barStyle="light-content"
      />
      <Header headerText = {"Albums"}/>
      <AlbumList/>
    </View>
);

const styles = {
  appStyle : {
    backgroundColor : "#414a4c",
    flex: 1
  }
};

AppRegistry.registerComponent('albums', () => App);


