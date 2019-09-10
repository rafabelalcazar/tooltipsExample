import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Tooltip from './components/Tooltip';
import TooltipMenu from './components/TooltipMenu';
import Tooltip from './components/Tooltip';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <Tooltip/>

      {/* <TooltipMenu/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

