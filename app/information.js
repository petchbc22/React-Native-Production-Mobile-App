import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert
} from 'react-native';

class information extends Component {  
    render() {
      return (
        <View style={styles.container}>
                <Text style={styles.h1}>
                  Story Board Co.,Ltd
                </Text>
        </View>
      );
    }
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#DCDCDC',
    },
    h1: {
      fontWeight: 'bold',
      fontSize: 30,
    }
  });

export default information;