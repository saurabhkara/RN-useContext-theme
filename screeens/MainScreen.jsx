import { View, Text, StyleSheet, StatusBar, Switch } from "react-native";
import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { ThemeContext } from "../context/themeContext";

export default function MainScreen({ navigation }) {
  const [color, setColor] = useContext(ThemeContext);
  const [isEnabled, setIsEnabled] = useState(false);

  function toggleSwitch() {
    console.log("toggled");
    setColor(!color);
    setIsEnabled(!isEnabled);
  }

  return (
    <View style={[styles.container, { backgroundColor: color? "white":'black' }]}>
      <Text style={{ alignItems: "center", color: color? "white":'black' }}>
        30-03-2023 Task
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("second")}
      >
        <Text
          style={{
            alignItems: "center",
            justifyContent: "center",
            color: color? "white":'black' ,
          }}
        >
          Second Screen
        </Text>
      </TouchableOpacity>
      <Text style={{ textAlign: "center", color:color? 'black' :"white" }}>
        {color ? "Light mode" : " Dark Mode"}
      </Text>
      <Switch
        value={isEnabled}
        style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
        onValueChange={toggleSwitch}
        thumbColor={isEnabled ? "white" : "black"}
      />
      <StatusBar backgroundColor={color? "white":'black' } barStyle={color?"dark-content":"light-content"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:'center',
    alignItems: "center",
  },
  button: {
    backgroundColor: "cyan",
    width: 80,
    height: 40,
    borderRadius: 10,
    marginVertical: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
});
