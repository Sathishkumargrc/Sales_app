import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import Images from '../Constant/Images'
import { COLORS, FONTS, SIZES } from '../Constant/Themes';
import { useNavigation } from '@react-navigation/native';
import { IS_LOGGED_IN } from '../Constant/StoredData';
// import { useDispatch } from 'react-redux';
// import { setUserID } from '../redux/slice/User';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SpalshScreen = () => {

    const navigation = useNavigation();
    // const dispatch = useDispatch();

    setTimeout (() => {
         AsyncStorage.getItem(IS_LOGGED_IN).then(value => {
            if(value){
                // dispatch(setUserID());
                navigation.replace('RootNavigator');
            }else{
                navigation.replace('AuthNavigator');
            }
        })
    },2000)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={style.container}>
                <Image source={Images.TT_Logo} resizeMode='contain' style = {{top: -30}} />
                <Text style={FONTS.company_name}>TECHNO TACKLE</Text>
                <Text style={FONTS.company_name}>SOFTWARE SOLUTIONS</Text>
            </View>
        </SafeAreaView>
    )
}

export default SpalshScreen

const style = StyleSheet.create({
    container: {
        width: SIZES.width,
        height: SIZES.height,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.white
    },
})