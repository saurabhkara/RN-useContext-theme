//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Testing from '../components/Testing';
import Header from '../components/Header';
import Greetings from '../components/Greetings';
import StateClass from '../components/StateClass';
import LifeCycle from '../components/LifeCycle';

import Challenge from '../components/Challenge';
// create a component
class MyClass extends Component {

   

    render() {
       
        return (
            <View style={styles.container}>
                <Header name="Saurabh"/>
                <Greetings />
                <StateClass />
                {/* <Testing  name='Class based component practice'/> */}
                <Challenge />
                <LifeCycle />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default MyClass;
