import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './SideMenu.style';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View,Image} from 'react-native';
import { StackNavigator } from 'react-navigation';

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <View style={styles.navSectionStyle}>
              <Image 
                  style={{width: 90, height: 90,alignSelf: 'center'}}
                  source={require('../img/sb-ico.png')}
              />
            </View>
            <View style={{flex:1,flexDirection:'row',paddingLeft:15,paddingTop:5,paddingBottom:5}}>
              <Image 
                    style={{width: 30, height: 30,alignSelf: 'center'}}
                    source={require('../img/video-ico.png')}
              />
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate("login")}>
                Video Production 
              </Text>
            </View>
            <View style={{flex:1,flexDirection:'row',paddingLeft:15,paddingTop:5,paddingBottom:5}}>
              <Image 
                    style={{width: 30, height: 30,alignSelf: 'center'}}
                    source={require('../img/information.png')}
              />
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate("information")}>
                Info Storyboard 
              </Text>
            </View>
          </View>

        </ScrollView>
        <View style={styles.footerContainer}>
          <Text>This is my fixed footer</Text>
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;