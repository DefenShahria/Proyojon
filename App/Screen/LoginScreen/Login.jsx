import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../../utils/Colors'

export default function Login() {
  return (
    <View style={{alignItems:'center'}}>
    
      <Image source={require('./../../../asset/login.png')} 
      style={styles.firstimage}
      />
      <View style={styles.subContainer}>
        <Text style={{fontSize:20,color:Colors.White,textAlign:'center'}}>
          Let's Find  <Text style={{fontWeight:'bold'}}>Professionla CLeaning and Repair</Text>  Service
        </Text>

        <TouchableOpacity style={styles.button} onPress={()=>console.log("Button Pressed")}>
        <Text style={{fontSize:18,fontWeight:'bold',color:Colors.Indigo,textAlign:'center'}}>
          Let's Get Start
        </Text>
        </TouchableOpacity>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  firstimage:{
    width:230,
    height:450,
    borderWidth:3,
    borderColor: Colors.Black,
    borderRadius:15,
    marginTop:50

  },
  subContainer:{
    width:'100%',
    backgroundColor:Colors.Indigo,
    height:'50%',
    marginTop:-30,
    borderTopRightRadius:30,
    borderTopLeftRadius:30,
    padding:20

  },
  button:{
    marginTop:20,
    backgroundColor:Colors.White,
    borderRadius:99,
    padding:15
  }

})