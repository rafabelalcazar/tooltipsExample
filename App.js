import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Tooltip from './components/Tooltip';
import TooltipMenu from './components/TooltipMenu';
import Tooltip from './components/Tooltip';
import CustomButton from './components/CustomButton';

const data = [
  {
      label: 'No me entregaron mi pedido',
      onPress: () => { }
  },
  {
      label: 'Demora en la entrega',
      onPress: () => { }
  },
  {
      label: 'Producto en mal estado',
      onPress: () => { }
  },
  {
      label: 'No era mi orden',
      onPress: () => { }
  },
  {
      label: 'No hice este pedido',
      onPress: () => { }
  },
  {
      label: 'Inconvenientes con la facturación',
      onPress: () => { }
  },
  {
      label: 'Otro...',
      onPress: () => { }
  },
]

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <Tooltip data={data} component={<CustomButton/>} />
      
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

