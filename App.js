import React from 'react'
import Login from './components/login'
import Profile from './components/Profile'
import {Home} from './views/Home/Home'
import { NewsDetail } from './views/News/NewsDetail'
import { ShopDetail } from './views/Shop/ShopDetail'
import { createStackNavigator, createAppContainer, createSwitchNavigator,createDrawerNavigator } from 'react-navigation';
const App = createStackNavigator(
    {
        Profile: {
            screen: Profile,
            navigationOptions: {
              header: null,
            },
          },
        Login: {
            screen: Login,
            navigationOptions: {
              header: null,
            },
          },
          Home: {
            screen: Home,
            navigationOptions: {
              header: null,
            },
          },
          NewsDetail: { 
            screen: NewsDetail,
            navigationOptions: {
                title: 'รายละเอียด',
                headerTintColor: '#f3f3f3',
                headerTitleStyle: {
                    fontSize: 18,
                    fontFamily: 'Kanit-Regular',
                    color: '#f3f3f3'
                },
                headerStyle: {
                    backgroundColor: '#010001',
                },
            }
        },
        ShopDetail: { 
            screen: ShopDetail, 
            navigationOptions: {
                title: 'รายละเอียด',
                headerTintColor: '#f3f3f3',
                headerTitleStyle: {
                    fontSize: 18,
                    fontWeight: '400',
                    fontFamily: 'Kanit-Regular',
                    color: '#f3f3f3'
                },
                headerStyle: {
                    backgroundColor: '#010001',
                },
            }
        }
    },
  
    //You can hide the header from all the screens in once using defaultNavigationOptions
    // {
    //   defaultNavigationOptions: {
    //     header: null
    //   },
    // },
    { initialRouteName: 'Login' }
  );
  
  //Not show warning
  console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
  console.disableYellowBox = true;
  
  
  
   export default createAppContainer(App);
  
  