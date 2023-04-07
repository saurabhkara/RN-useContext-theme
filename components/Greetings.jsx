import React from 'react';
import {View, Text} from 'react-native';

class Greetings extends React.Component{

    

    render(){

        const date = new Date();
        const hour = date.getHours();
        console.log(hour);
        let timeofDay;
        if(hour<12){
            timeofDay='Good Morning'
        }else if(hour>12 && hour<17){
            timeofDay ='Good Afternoon'
        }else{
            timeofDay = "Good Night";
        }

        return(
            <View>
                <Text>{timeofDay} to you, sir or madam</Text> 
            </View>
        )
    }
}

export default Greetings;