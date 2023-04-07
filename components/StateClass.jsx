import React from 'react';
import {View, Text} from 'react-native';


class StateClass extends React.Component{

    constructor(props){
        super(props);
        this.state={
            goOut:true
        }
    }

    

    toggleOut=()=>{
        console.log('method calling');
        this.setState(previousState =>{
            return {goOut : !previousState.goOut};
        })
        // this.setState({
        //     goOut:false
        // })
        // console.log(this.setState)
    }

    render(){
        return(
            <View>
                <Text onPress={this.toggleOut}>Practice Classbased component {this.state.goOut ?'Yes' :"No"}</Text>
            </View>
        )
    }
}

export default StateClass;