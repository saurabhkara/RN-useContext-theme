import React from "react";
import { Text, View } from "react-native";

class Challenge extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count: 0,
            name:'Saurabh'
        };
        this.changeName = this.changeName.bind(this);
    }
  

  increaseCount = () => {
    console.log("increase count");
    this.setState((prev) => {
      return {
        count: prev.count + 1,
      };
    });
  };

  decreaseCount = () => {
    console.log("Decrease count");
    this.setState((prev) => {
      console.log(prev);
      return {
        ...prev,
        count: prev.count - 1,
      };
    });
  };

  changeName(){
    this.setState(prevState=>{
        return(
            {
                ...prevState,
                name:"Kumar"
            }
        )
    })
  }

  render() {
    return (
      <View style={{ flexDirection: "row", marginTop:22 }}>
        <Text onPress={this.increaseCount} style={{fontSize:25, marginHorizontal:20, padding:10}}>+</Text>
        <Text style={{fontSize:20, marginHorizontal:25}}>{this.state.count}</Text>
        <Text onPress={this.decreaseCount} style={{fontSize:25,marginHorizontal:20, padding:10}}>-</Text>
        <Text onPress={this.changeName}>{this.state.name}</Text>
      </View>
    );
  }
}

export default Challenge;
