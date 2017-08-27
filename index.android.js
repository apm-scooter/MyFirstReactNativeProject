import React from 'react'; //1
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {//2
  render() {
    return (
      <View style={styles.container}>
        <Text> Text Open up index.android.js to Start working on your react-native App! and AppRegistry</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({ //3
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
AppRegistry.registerComponent('MyReactNativeProject', () => App);//4
