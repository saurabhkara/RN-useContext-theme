import { View, Text, StyleSheet, } from 'react-native'
import React,{useContext} from 'react';
import { ThemeContext } from '../context/themeContext';

export default function Second() {
    const [color, setColor] = useContext(ThemeContext);
    console.log("color", color);
  return (
    <View style={[styles.container,{backgroundColor: color? "white":'black'}]}>
      <Text style={{color:color?'black':"white", fontSize:25}}>Second Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    }
})