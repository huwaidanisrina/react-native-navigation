import React from 'react';
import { View, Text, Button, Image, TextInput } from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import Judul from './Component/Judul';

class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <Text style={{color:"#1c4e8a",fontSize:36,fontWeight:'bold'}}>SOCIAL MEDIA</Text>
                <TextInput
                    style={{height: 40,marginTop:50}}
                    placeholder="Username"
                    onChangeText={(text) => this.setState({text})}></TextInput>
                <TextInput
                    style={{height: 40}}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(text) => this.setState({text})}></TextInput>
        <Button
          title="LOGIN"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Details' })
              ],
            }))
          }}
        />
      </View>
    );
  }  
}


class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Judul/>
      </View>
    );
  }  
}

export default createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
}, {
    initialRouteName: 'Home',

});