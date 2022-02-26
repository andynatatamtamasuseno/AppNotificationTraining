import { Text, StyleSheet, View } from "react-native";
import React,{Component} from "react";
import Firebase from '@react-native-firebase/app';
import {notif} from './src/notification'



export default class App extends Component{
  componentDidMount= () =>{
    Firebase.initializeApp(this)
    notif.configure();
  }
  
  render(){
    return(
      <View>
        <Text>Hallo, Wellcome to Training FCM</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})