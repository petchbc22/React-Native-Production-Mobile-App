import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  WebView

} from 'react-native';

import { Container, Content, Footer, FooterTab, Button, Icon } from 'native-base';
class pricelist extends Component {
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
            <View style={styles.container}>
                <Text style={styles.textct}>
                    เรารับผลิตวิดีโอสินค้าหรือบริการ/ วิดีโองานอีเว้น/ วิดีโอโมชั่นกราฟฟิก หรืออื่นๆ
                </Text>
                <Text style={styles.textct}>
                    โดยราคาเริ่มต้นที่หลักหมื่นต้นๆ และ เราสามารถผลิตและคิดรูปแบบของวิดีโอได้ตามงบประมาณที่ลูกค้ามี โดยจะเสนอทางเลือกให้ลูกค้าได้เลือก
                </Text>   
            </View>
            <View style={styles.container} >
                <Text style={styles.pb10}>
                    ราคา 20,000 - 50,000 บาท
                </Text>
                <WebView
                    style={{  height:300}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{uri: 'https://www.youtube.com/embed/hZFrOut2oGY'}}
                /> 
            </View>
          </Content>
          <Footer >
              <FooterTab 
              
                style={{backgroundColor: 'black'}}>
                  <Button onPress={() => this.props.navigation.navigate("Main")}>
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
      padding:20
  },
  textct:{
      textAlign:'center',
     
  },
  pb10: {
    paddingBottom:10
  }
});

export default pricelist;