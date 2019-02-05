import React, {Component} from 'react';
import {Text,View,StyleSheet,Image,WebView} from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon } from 'native-base';

class MainScreen extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }
  render () {
    return (
      <Container>
          <Content>
            <WebView
              style={{ margin:20, height:300}}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              source={{uri: 'https://www.youtube.com/embed/MGhMdT_C-vQ'}}
            />
          </Content>
          <Footer >
              <FooterTab 
              
                style={{backgroundColor: 'black'}}>
                  <Button active onPress={() => this.props.navigation.navigate("Main")}>
                    <Image 
                        style={{width: 25, height: 25}}
                        source={require('../img/home-ico.png')}
                        
                    />
                    
                  </Button>
                  <Button onPress={() => this.props.navigation.navigate("ProductionHouse")}>
                    <Image 
                        style={{width: 25, height: 25}}
                        source={require('../img/production-ico.png')}
                    />
                  </Button>
                  <Button>
                    <Image 
                        style={{width: 25, height: 25}}
                        source={require('../img/cart-ico.png')}
                    />
                  </Button>
                  <Button>
                    <Image 
                        style={{width: 25, height: 25}}
                        source={require('../img/search-ico.png')}
                    />
                  </Button>
              </FooterTab>
          </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  }
});

export default MainScreen;