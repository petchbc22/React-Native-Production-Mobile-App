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
            <View style={styles.containerlistmenu}>
              <Image 
                    style={styles.imgicon}
                    source={require('../img/production-ico.png')}
              />
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate("ProductionHouse")}>
                Production House
              </Text>
            </View>
            <View style={styles.containerlistmenu}>
              <Image 
                    style={styles.imgicon}
                    source={require('../img/video-ico.png')}
              />
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate("login")}>
                Video Production 
              </Text>
            </View>
            <View style={styles.containerlistmenu}>
              <Image 
                    style={styles.imgicon}
                    source={require('../img/coin-ico.png')}
              />
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate("pricelist")}>
                Price List
              </Text>
            </View>
            <View style={styles.containerlistmenu}>
              <Image 
                    style={styles.imgicon}
                    source={require('../img/information.png')}
              />
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate("information")}>
                Info Storyboard 
              </Text>
            </View>
          </View>

        </ScrollView>
        <View style={styles.footerContainer}>
          <Text style={styles.textinfixfooter}>Expo By Storyboard V.1.0</Text>
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;