
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
export default class lab extends Component{
    constructor(props){
        super(props)
    }
    
    componentDidMount(){
        console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
    }
    render(){
        return(
            <ScrollView  style={{flex:1}}>
            <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#bbded6'}}>
                <TouchableOpacity onPress={() => alert('ไอ้แดงมันเป็นนักสู้')}>
                <Text>
                    TEST
                </Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        )
    }
}