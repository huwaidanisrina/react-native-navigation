import React from 'react';
import {Text, View, Image} from 'react-native';
export default class Judul extends React.Component{

	render(){
		return(
			<View>
		<Text style={ini.judul}>Halo</Text>
        <Image source={require('./ss1.png')} style={{height:324, width:368}} />
        <Text>Nama : Huwaida Nisrina Najla</Text>
        <Text>Kelas : XI RPL 4</Text>
        <Text>No Absen : 14</Text>
			</View>
		

			)
	}

}
const ini = {
	judul:{
		color : "#1c4e8a",
		 fontSize : 50,
		 fontWeight: 'bold'
	}

}