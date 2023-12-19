import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
const App = (): JSX.Element => {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.view}>
        <Text style={Styles.text}>Hello</Text>
      </View>
    </SafeAreaView>
  );
};
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.15,
    padding: 25,
    backgroundColor: 'beige',
  },
  text: {
    color: 'cornflowerblue',
    fontSize: 40,
    fontFamily: 'Oswald',
    fontWeight: '400',
  },
});
export default App;
