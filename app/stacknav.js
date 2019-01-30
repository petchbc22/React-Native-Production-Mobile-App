import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View, TouchableOpacity,Image} from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator  } from  'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import MainScreen from "./MainScreen";
import DetailScreen from "./DetailScreen";
import LoginScreen from "./login";
import information from "./information";

const stackNav = StackNavigator({
  Main : {
    screen: MainScreen,
    navigationOptions: ({navigation}) => ({
        headerStyle :{backgroundColor:'black'},
        titleStyle: {
            textAlign: 'center',
            alignSelf: 'center'
          },
        headerTitle: <Image style={{width: 160, height: 45,alignSelf: 'center'}}source={ require('../img/Story-board-w.png') } />,
        headerLeft:(<TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
                       <Image 
                            style={{width: 20, height: 20}}
                            source={require('../img/menu-w.png')}
                        />
                  </TouchableOpacity>
        ),
        headerRight:(
            <TouchableOpacity onPress={() => navigation.navigate("login")}>
                <Image 
                    style={{width: 25, height: 25}}
                    source={require('../img/login-icon.png')}
                />
            </TouchableOpacity>
        ),
        tintColor: '#000000',
        headerStyle: { paddingRight: 10, paddingLeft: 15,backgroundColor:'black',height:70 }
    })
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: ({navigation}) => ({
      title: "Detail",
    })     
  },
//   ส่วน header ของหน้า login สามารถ custom ได้
  login: {
    screen: LoginScreen,
    navigationOptions: ({navigation}) => ({
        headerStyle :{backgroundColor:'black'},
        titleStyle: {
            textAlign: 'center',
            alignSelf: 'center'
          },
        headerTitle: <Image style={{width: 160, height: 45,alignSelf: 'center'}}source={ require('../img/Story-board-w.png') } />,
        headerLeft:(<TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
                       <Image 
                            style={{width: 20, height: 20}}
                            source={require('../img/menu-w.png')}
                        />
                  </TouchableOpacity>
        ),
        headerRight:(
            <TouchableOpacity onPress={() => navigation.navigate("Main")}>
                <Image 
                    style={{width: 25, height: 25}}
                    source={require('../img/home-ico.png')}
                />
            </TouchableOpacity>
        ),
        tintColor: '#000000',
        headerStyle: { paddingRight: 10, paddingLeft: 15,backgroundColor:'black',height:70 }
    })
  },
  information: {
    screen: information,
    navigationOptions: ({navigation}) => ({
        headerStyle :{backgroundColor:'black'},
        titleStyle: {
            textAlign: 'center',
            alignSelf: 'center'
          },
        headerTitle: <Image style={{width: 160, height: 45,alignSelf: 'center'}}source={ require('../img/Story-board-w.png') } />,
        headerLeft:(<TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
                       <Image 
                            style={{width: 20, height: 20}}
                            source={require('../img/menu-w.png')}
                        />
                  </TouchableOpacity>
        ),
        headerRight:(
            <TouchableOpacity onPress={() => navigation.navigate("Main")}>
                <Image 
                    style={{width: 25, height: 25}}
                    source={require('../img/home-ico.png')}
                />
            </TouchableOpacity>
        ),
        tintColor: '#000000',
        headerStyle: { paddingRight: 10, paddingLeft: 15,backgroundColor:'black',height:70 }
    })
  }
  
});

export default stackNav;