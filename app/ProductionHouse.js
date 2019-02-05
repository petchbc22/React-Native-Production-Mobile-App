import React, { Component } from 'react';
import { AppRegistry, StyleSheet, TextInput,ActivityIndicator, ListView, Text, View, Alert,Image, Platform,TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Container, Content, Footer, FooterTab, Button, Icon } from 'native-base';

class MainActivity extends Component {

    static navigationOptions =
    {
       title: 'MainActivity',
    };

    constructor(props) {

        super(props);

        this.state = {

          isLoading: true,
          text: '',
        }
        this.arrayholder = [] ;
      }

    OpenSecondActivity(id) {
       
        this.props.navigation.navigate('Second', { ListViewClickItemHolder: id });
    
      }
     
     
      componentDidMount() {
     
        return fetch('http://192.168.1.111/production-mobile-app/FlowersList.php')
          .then((response) => response.json())
          .then((responseJson) => {
            let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.setState({
              isLoading: false,
              dataSource: ds.cloneWithRows(responseJson),
            }, function() {
              // In this block you can do something with new state.
              this.arrayholder = responseJson ;
            });
          })
          .catch((error) => {
            console.error(error);
          });
      }
      GetListViewItem (Name) {
    
        Alert.alert(Name);
       
       }
       GetListViewItem (Images) {
        
        Alert.alert(Images);
       
      }
      SearchFilterFunction(text){
          const newData = this.arrayholder.filter(function(item){
              const itemData = item.Name.toUpperCase()
              const textData = text.toUpperCase()
              return itemData.indexOf(textData) > -1
          })
          this.setState({
              dataSource: this.state.dataSource.cloneWithRows(newData),
              text: text
          })
      }
      ListViewItemSeparator = () => {
        return (
          <View
            style={{
              height: .5,
              width: "100%",
              backgroundColor: "#000",
            }}
          />
        );
      }
     
     
      render() {
        if (this.state.isLoading) {
          return (
            <View style={{flex: 1, paddingTop: 20}}>
              <ActivityIndicator />
            </View>
          );
        }
     
        return (
     
          <View style={styles.MainContainer}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                  onChangeText={(text) => this.SearchFilterFunction(text)}
                  value={this.state.text}
                  underlineColorAndroid='transparent'
                  placeholder="ค้นหา"/>
                <Image style={styles.inputIcon} source={require('../img/search.png')}/>
            </View>
            <ListView
                dataSource={this.state.dataSource}
                renderSeparator= {this.ListViewItemSeparator}
                renderRow={(rowData) => 
                  <TouchableOpacity style={{flex:1, flexDirection: 'row'}} onPress={this.OpenSecondActivity.bind(this,rowData.id)} >
                    <Image source = {{ uri: rowData.Images }} style={styles.imageViewContainer} />
                    <Text style={styles.textViewContainer}>{rowData.Name}</Text>
                  </TouchableOpacity>
              }
            />
          </View>
        );
      }
    }


class SecondActivity extends Component
{
 static navigationOptions =
 {
    title: 'SecondActivity',
 };

 constructor(props) {
    
       super(props)

       this.state={

        id : '',
        Name : '',
        Images : ''
       }
    
     }

 componentDidMount(){

    fetch('http://192.168.1.111/production-mobile-app/filter.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
       
          // Getting the id.
          id: this.props.navigation.state.params.ListViewClickItemHolder
       
        })
       
      }).then((response) => response.json())
            .then((responseJson) => {

              this.setState({

                id : responseJson[0].id,
                Name : responseJson[0].Name,
                Images : responseJson[0].Images

              })
              
            }).catch((error) => {
              console.error(error);
            });
       
 }

 render()
 {
    return(
       <View style = { styles.MainContainer }>

        <View style={{flex:1, flexDirection: 'column'}} >
        <Text style={styles.textViewContainer} > {'Department = ' + this.state.Images} </Text>
         <Text style={styles.textViewContainer} > {'id = ' + this.state.id} </Text>
 
         <Text style={styles.textViewContainer} > {'Name = ' + this.state.Name} </Text>
 
    

 
        </View>

      </View>
    );
 }
}

export default MyNewProject = StackNavigator(
  {
    First: { 
      screen: MainActivity ,
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
    
    Second: { 
      screen: SecondActivity,
      navigationOptions: ({navigation}) => ({
          headerStyle :{backgroundColor:'black'},
          titleStyle: {
              textAlign: 'center',
              alignSelf: 'center'
            },
          headerTitle: <Image style={{width: 160, height: 45,alignSelf: 'center'}}source={ require('../img/Story-board-w.png') } />,
          headerLeft:(<TouchableOpacity onPress={() => navigation.navigate("ProductionHouse")}>
                         <Image 
                              style={{width: 20, height: 20}}
                              source={require('../img/left-icon.png')}
                          />
                    </TouchableOpacity>
          ),
          headerRight:(<TouchableOpacity onPress={() => navigation.navigate("Main")}>
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

const styles = StyleSheet.create({

  MainContainer :{
    justifyContent: 'center',
    flex:1,
    backgroundColor: 'white'
  },
  imageViewContainer: {
    width: 200,
    height: 200 ,
    margin: 10,
    borderRadius : 10
  },
  textViewContainer: {
    textAlignVertical:'center',
    width:'50%', 
    padding:20
  },
  TextInputStyleClass:{
    textAlign: 'center',
  
    borderWidth: 1,
    borderRadius: 3 ,
    backgroundColor : "#FFFFFF",
  
    marginLeft: 5,
    marginRight: 5 
  },
  inputContainer: {
    backgroundColor: '#dcdcdc',
    borderRadius:20,
    margin:10,
    flexDirection: 'row',
    alignItems:'center',
    textAlign: 'center'
  },
  inputs:{
    marginLeft:16,
    flex:1,
  },
  inputIcon:{
  width:20,
  height:20,
  marginRight:16,
  justifyContent: 'center'
  },


});