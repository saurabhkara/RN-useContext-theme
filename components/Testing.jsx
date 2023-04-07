//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class Testing extends React.Component {
   

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.name}</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
       
    },
});

//make this component available to the app
export default Testing;
