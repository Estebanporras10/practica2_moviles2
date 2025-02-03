import React from 'react';
		import {Text, TouchableOpacity, View} from 'react-native';
		import {useNavigation} from '@react-navigation/native';
		import {style_01} from '../style/style_01';

		const MyNavigator = ({navigation}) => {
		  const navi = useNavigation();
		  return (
			<View style={style_01.row}>
			<TouchableOpacity style={style_01.btn_button} onPress={() => { navi.navigate('pokemon'); }}>
			  <Text style={style_01.btn_Label}>pokemon</Text>
			</TouchableOpacity>
			  <TouchableOpacity style={style_01.btn_button} onPress={() => { navi.navigate('Details'); }}>
				<Text style={style_01.btn_Label}>Details</Text>
			  </TouchableOpacity>
			</View>
		  );
		};

		export default MyNavigator;