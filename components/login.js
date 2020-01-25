import React, { Component } from 'react';
import {
    Image, StatusBar, ScrollView, Text, TextInput, TouchableOpacity,
    View, Dimensions, FlatList,StyleSheet,Animated,Alert,ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import NetworkFailed from './NetworkFailed';
import NotFound from './NotFound';

import UserModel from '../models/UserModel'

var user_model = new UserModel
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height
const mocks = [
    {
        id: 1,
        images:
            'http://bnk48ota.com/wp-content/uploads/sites/11/2018/11/PANDA.jpg',
    },
    {
        id: 2,
        images:
            'http://bnk48ota.com/wp-content/uploads/sites/11/2018/11/FOND.jpg',
    },
    {
        id: 3,
        images:
            'http://bnk48ota.com/wp-content/uploads/sites/11/2018/11/NIKY.jpg',
    },
    {
        id: 4,
        images:
            'http://bnk48ota.com/wp-content/uploads/sites/11/2018/11/MUSIC.jpg',
    },
    {
        id: 5,
        images:
            'http://bnk48ota.com/wp-content/uploads/sites/11/2018/11/PUN.jpg',
    },
    {
        id: 6,
        images:
            'http://bnk48ota.com/wp-content/uploads/sites/11/2018/11/CHERPRANG.jpg',
    },
    {
        id: 7,
        images:
            'http://bnk48ota.com/wp-content/uploads/sites/11/2018/11/WEE.jpg',
    },
    {
        id: 8,
        images:
            'http://bnk48ota.com/wp-content/uploads/sites/11/2018/11/JUNÉ.jpg',
    },
    {
        id: 9,
        images:
            'http://bnk48ota.com/wp-content/uploads/sites/11/2018/11/PHUKKHOM.jpg',
    },
    {
        id: 10,
        images:
            'http://bnk48ota.com/wp-content/uploads/sites/11/2018/11/JENNIS.jpg',
    },
    {
        id: 11,
        images:
            'http://bnk48ota.com/wp-content/uploads/sites/11/2018/11/MOBILE.jpg',
    },
]
export default class Login extends Component {
    scrollX = new Animated.Value(0);
    constructor(props) {
        super(props)

    }
    state = {
        logo: [],
        email:'admin',
        password:'123456'
    }
    componentDidMount() {
        this.setState({
            logo: mocks
        })
        console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
        console.disableYellowBox = true;
    }

    getLogin = () =>{
        if (this.state.email.length == 0) {
            Alert.alert("แจ้งเตือน","กรุณาระบุบัญชีผู้ใช้");
        }else if(this.state.password.length == 0){
            Alert.alert("แจ้งเตือน","กรุณากรอกรหัสผ่าน");
        }else{
            this.setState({
                loading: true,
                alert: '',
            }, () => {
                user_model.getLogin(this.state.email,this.state.password).then((response) => {
                    console.log('[_getLogin] response:',response.data[0].user_code);

                    if (response == false) {
                        this.setState({
                            loading: false,
                            alert: 'network-failed',
                        });
                    }else if (response.data.length == 0) {
                        this.setState({
                            loading: false,
                            alert: 'not-found',
                        },() => {
                            Alert.alert("Function",alert);
                        });
                    }else{
                        this.setState({
                            loading: false,
                        },() => {
                            Alert.alert("Function","_getLogin", [{ text: 'OK', onPress: () => this.props.navigation.navigate('Home',{ user_code: response.data[0].user_code }) }, { text: 'cancel', }]);
                            
                        });
                    }
                    console.log(this.state.alert)
                });
            });
        }
    
    }
    renderDots() {
        const { destinations } = this.state.logo;
        const dotPosition = Animated.divide(this.scrollX, width);
        return (
          <View style={[
            { justifyContent: 'center', alignItems: 'center', marginTop: 20,flexDirection: 'row',flex:1 }
          ]}>
            {this.state.logo.map((item, index) => {
              const borderWidth = dotPosition.interpolate({
                inputRange: [index -1, index, index + 1],
                outputRange: [0, 2.5, 0],
                extrapolate: 'clamp'
              });
              return (
                <Animated.View
                  key={`step-${item.id}`}
                  style={[style.dots, style.activeDot, { borderWidth: borderWidth } ]}
                />
              )
            })}
          </View>
        )
      }

    render() {
        var display = [];
        if (this.state.loading) {
            display.push(
                <View style={{ flexDirection: "row", justifyContent: "center", flex: 1, backgroundColor: '#25aae1', borderRadius: 2, padding: 10, }}>
                    <ActivityIndicator size="small" color="#fff"/>
                </View>
            )
        }else{
            display.push(
                
            )
        }
        return (
            <ScrollView style={{backgroundColor:'#bbded6'}}>
                <StatusBar hidden={true} />
                <View >
                    <FlatList
                        horizontal
                        pagingEnabled
                        scrollEnabled
                        showsHorizontalScrollIndicator={false}
                        decelerationRate={0}
                        scrollEventThrottle={16}
                        snapToAlignment="center"
                        style={{ overflow: 'visible' ,paddingTop:20}}
                        data={this.state.logo}
                        keyExtractor={(item, index) => `${item.id}`}
                        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.scrollX }} }])}
                        renderItem={({ item }) =>
                            <Image resizeMode="contain" source={{ uri: item.images }}
                                style={{
                                    width: width, height: height / 2.5, paddingHorizontal: 50,borderRadius: 30,
                                }} />}
                    />
                     {this.renderDots()}
                   </View>
                   <View style={{paddingHorizontal:36,marginTop:50}}>
                    <View style={[style.row_unferline,{marginBottom:16}]}>
                        <Icon name="email-outline" style={[style.login_icon]}/>
                        <TextInput
                            placeholder="Email address"
                            placeholderTextColor="#ADADAD"
                            value = {this.state.email}
                            onChangeText={(value) => {this.setState({email : value})}}
                            underlineColorAndroid="transparent" 
                            style={{color:'#fff',flex:1,fontSize:16,paddingLeft:12}}/>
                    </View>
                    <View style={[style.row_unferline,{marginBottom:16}]}>
                        <Icon name="lock-outline" style={[style.login_icon]}/>
                        <TextInput placeholder="Password"
                            placeholderTextColor="#ADADAD"
                            underlineColorAndroid="transparent"
                            value = {this.state.password}
                            onChangeText={(value) => {this.setState({password : value})}}
                            secureTextEntry={true} 
                            style={{color:'#fff',flex:1,fontSize:16,paddingLeft:12}}/>
                    </View>
                    <TouchableOpacity style={{flex:1,backgroundColor:'#fae3d9',borderRadius:5,padding:10}} onPress={() =>  this.getLogin()}>
                        <Text style={{alignSelf:"center",fontSize:16,}}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
                {display}
            </ScrollView>
        )
    }
}
const style = StyleSheet.create({
    row_unferline:{
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#b6b6b6'
    },
    login_icon:{
        alignSelf: 'center',
        fontSize: 20,
        color: '#ADADAD'
    },
    dots: {
      width: 10,
      height: 10,
      borderWidth: 2.5,
      borderRadius: 5,
      marginHorizontal: 6,
      backgroundColor: 'gray',
      borderColor: 'transparent',
    },
    activeDot: {
      width: 12.5,
      height: 12.5,
      borderRadius: 6.25,
      borderColor: '#f0cf85',
    }
})
