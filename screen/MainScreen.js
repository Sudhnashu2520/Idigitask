import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native';

function MainScreen() {
    const navigation =  useNavigation();
  return (
    <>
    <TouchableOpacity style={{height:40,width:70,alignItems:'center',justifyContent:'center'}} onPress={()=> {navigation.navigate("Component1")}}>
        <Text>Component 1</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{height:40,width:70,alignItems:'center',justifyContent:'center'}} onPress={()=> {navigation.navigate("Component2")}}>
       <Text>Component 2</Text> 
    </TouchableOpacity>
      
    </>
  )
}

export default MainScreen;
