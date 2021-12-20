import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { increment,decrement } from "../store/action";

const ComponentB = () => {
    const counter = useSelector(state => state)
    const dispatch = useDispatch()
     return (
         <View>
             <Text style={{fontSize:30}}>
                 ComponentB: {counter}
             </Text>
             <View style={styles.btn1}>
             <Button title="+" onPress={() => dispatch(increment())}/>
             </View>
             <Button title="-" onPress={() => dispatch(decrement())}/>
             
         </View>
     )
}

const styles = StyleSheet.create ({
   btn1:{
       marginTop:20,
       marginBottom:20,
      
   }
})

export default ComponentB