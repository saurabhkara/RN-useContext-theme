import React from 'react';
import {Text, View} from 'react-native';

class LifeCycle extends React.Component{


    constructor(){
        super()
        console.log('constructor 0');
    }

    static getDerivedStateFromProps(){
        console.log('Get derived State from Props')
        return null;
    }

    componentDidMount(){
        console.log("component did mount 2")
    }

    render(){
        console.log("render method 1")
        return(
            <View>
                <Text>Class components </Text>
            </View>
        )
    }
}

export default LifeCycle;