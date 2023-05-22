import { ScrollView, StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../Constant/Themes'
import BackgroundColor from '../Component/BackgroundColor'
import { useNavigation } from '@react-navigation/native'
import ToolBar from '../Component/ToolBar'


const HomeScreen = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style = {style.container}>
      <ToolBar title='Home Screen' />
      <BackgroundColor>
      <ScrollView style = {{width: SIZES.width, height: SIZES.height}}>
        <View style = {style.btn_container}>
        <TouchableOpacity style = {style.btn} 
        onPress = {() => navigation.navigate('ClientScreen')}
        >
          <Text style = {style.btn_text}>
            Client
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style = {style.btn}
        onPress = {() => navigation.navigate('VendorScreen')}
        >
          <Text style = {style.btn_text}>
            Vendor
          </Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
      </BackgroundColor>
    </SafeAreaView>
  )
}

export default HomeScreen;

const style = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: COLORS.white
  },
  btn_container : {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn : {
    width: '50%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    marginTop: 15,
    borderRadius: 10,
    elevation: 7
  },
  btn_text : {
    fontFamily: 'DMSans-Regular',
    fontSize: 18,
    color: COLORS.black
  },
})