import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Travel from './components/Travel';

const App = () => {
  return (
    <View style={styles.main}>
      <Travel />
    </View>
  );
};
const styles = StyleSheet.create({
  main: {},
});

export default App;
