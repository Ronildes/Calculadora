/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   TouchableOpacity,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 class InputNumberButton extends Component{
   render(){
    const { value, handleOnPress } = this.props;
  
    return (
      <TouchableOpacity 
        style={styles.container}
        onPress={() => handleOnPress(value)}
      >
        <Text style={ styles.text }>{value}</Text>
      </TouchableOpacity>
    );
  }
}

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     margin: 1,
     backgroundColor: 'rgba(255, 255, 255, 0.1)',
     justifyContent: 'center',
     alignItems: 'center',
   },
   text:{
     color: 'white',
     fontSize: 26,
   }

 });
 
 export default InputNumberButton;
 