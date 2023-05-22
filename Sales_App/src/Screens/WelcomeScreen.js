import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Images from '../Constant/Images'
import { COLORS, FONTS, SIZES } from '../Constant/Themes'
import { useNavigation } from '@react-navigation/native'

const WelcomeScreen = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={style.container}>
      <ScrollView style={{
        width: SIZES.width,
        height: SIZES.height,
      }}>
        <View style={{ alignItems: 'center', top: 10 }} >
          <Image source={Images.TT_Logo} style={{ width: 75, height: 65 }} />
        </View>

        <View style={{ alignItems: 'center',top: 15 }}>
          <Text style={FONTS.company_name_small}>TECHNO TACKLE</Text>
          <Text style={FONTS.company_name_small}>SOFTWARE SOLUTIONS</Text>
        </View>

        <View style={{ alignItems: 'center', top: 20}}>
          <Image source={Images.Welcome_page} resizeMode='cover' style={{ width: '100%', height: 440,}} />
        </View>

        <TouchableOpacity style={style.get_started} onPress = {() => navigation.replace('LoginScreen')}>
          <Text style = {{fontFamily: 'DMSans-Bold', fontSize: 16, color: COLORS.black}}>
            Get Started
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default WelcomeScreen

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white
  },
  get_started: {
    alignItems: 'center',
    height: 50,
    width: '85%',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor : COLORS.pure,
    borderRadius: 15,
    marginTop: 50
  }
})