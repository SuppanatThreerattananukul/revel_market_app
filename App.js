import React from 'react'
import Login from './components/login'
import Profile from './components/Profile'
import {Home} from './views/Home/Home'
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
  
  