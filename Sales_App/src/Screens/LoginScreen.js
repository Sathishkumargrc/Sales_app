import { ScrollView, StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, {useState} from 'react';
import { COLORS, FONTS, SIZES } from '../Constant/Themes';
import Images from '../Constant/Images';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useIsFocused, useNavigation } from '@react-navigation/native';
import Helper from '../Component/Helper';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { LOGIN_URL, SALT } from '../Constant/ApiConstants';
import md5 from 'md5';
import { setResponse, setUserID } from '../redux/slice/User';
import LoaderModal from '../Component/LoaderModel';
import { DEV_ID, IS_LOGGED_IN, TRUE, USER_DETAILS } from '../Constant/StoredData';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {

  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [seePassword, setSeePassword] = useState(true);
  const [password, setPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const loginValidation = () => {
    if (username == '' && password == '') {
      Alert.alert('Please enter your credentials!');
    } else if(username != '' && password == ''){
      Alert.alert('Please enter your correct password!')
    }else if(username == '' && password != ''){
      Alert.alert('Please enter your correct username!')
    }else if (!Helper.isValidPassword(password)) {
      Alert.alert('Please enter your valid credentials!');
    } else {
      storeData();
    }
  };

  const AlertShow = () => {
    Alert.alert(
      "Success!",
      'Customer Logged in successfully.',
      [
        { text: "OK", onPress: () => navigation.replace('HomeScreen') }
      ]
    );

  }

  const storeDataAsync = async (value, userDetails) => {

    console.log({value,userDetails})
    
    try {
      await AsyncStorage.setItem(IS_LOGGED_IN, TRUE);
      await AsyncStorage.setItem(DEV_ID, value);

      const jsonValue = JSON.stringify(userDetails); // for multiple object storage
      await AsyncStorage.setItem(USER_DETAILS, jsonValue);
      console.log('>>>>>>>json', jsonValue)

      // navigation.replace('HomeScreen');
      AlertShow();
    } catch (e) {
      // saving error
    } 
  };

  const storeData = async () => {
    console.log('>>>>>>>')
    setIsLoading(true);
    const authToken = md5(SALT + username + password);
  
    await axios
      .post(LOGIN_URL, {
        username : username,
        password : password,
        auth_key: authToken,
      })
      .then(async function (response) {
        console.log('>>>>login response',response);
        setIsLoading(false)
        var res = response.data;
        dispatch(setResponse(res));
        console.log('>>>>>>>data', res)
        if (res.success) {
          var id = response.data.parameters.login_id;
          dispatch(setUserID(id));
          // storeData(id, response.data.parameters);
          console.log('>>>>>>>>> id', id)
          // AlertShow();
          await storeDataAsync(id.toString(), response.data.parameters);

        } else {
          Alert.alert(res.message);
        }
      })
      .catch(function (error) {
        setIsLoading(false)
        console.log(error);
      });
  }

  

  return (
    <SafeAreaView style = {style.container}>
      <LoaderModal modalVisible = {isLoading} />
      <ScrollView style = {{width: SIZES.width, height: SIZES.height}}>
        <View style = {{top: 15}}>
        <View style={{ alignItems: 'center' }} >
          <Image source={Images.TT_Logo} style={{ width: 75, height: 65 }} />
        </View>

        <View style={{ alignItems: 'center', marginTop: 5}}>
          <Text style={FONTS.company_name_small}>TECHNO TACKLE</Text>
          <Text style={FONTS.company_name_small}>SOFTWARE SOLUTIONS</Text>
        </View>
        </View>

        <View style = {{alignItems: 'center'}}>
          <Image source={Images.Login_page} resizeMode = 'contain' style={{ width: '100%', height: 440 }} />
        </View>
        
        <View style={style.userBox}>
          {/* <Image source={icons.Profile} style={style.image3} resizeMode = 'contain' /> */}
          <MaterialCommunityIcons name ='account' size = {25} color = 'black' />
          <TextInput
            placeholder="Username"
            placeholderTextColor= {COLORS.blackTextColor}
            value = {username.trimStart()}
            onChangeText={text => setUsername(text)}
            style={{width: '88%', marginLeft: 6, top: 3, color: COLORS.blackTextColor}}
            maxLength = {25}
          />
        </View>

        <View style={style.passwordBox}>
          <MaterialCommunityIcons name = 'lock' size = {25} color = 'black' />
          <TextInput
            placeholder="Password"
            placeholderTextColor= {COLORS.blackTextColor}
            style={{width: '80%', marginLeft: 7, top: 3, color: COLORS.blackTextColor}}
            secureTextEntry={seePassword}
            value={password.trimStart()}
            onChangeText={text => setPassword(text)}
            maxLength = {25}
          />
          <TouchableOpacity onPress={() => setSeePassword(!seePassword)}>
            <MaterialCommunityIcons
              name= {seePassword ? "eye-off-outline" : "eye-outline" }
              style={style.eyeIcon}
              size={20}
            />
          </TouchableOpacity>
        </View>
        
        {/* loginValidation() */}
        <TouchableOpacity style = {style.login_btn} onPress = {() => navigation.replace('RootNavigator') }> 
          <Text style = {{fontFamily: 'DMSans-Bold', fontSize: 18, color: COLORS.white}}>Log in</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default LoginScreen

const style = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white
  },
  userBox : {
    flexDirection: 'row',
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    top: -40,
    borderColor: COLORS.pure,
    borderWidth: 0.2,
  },
  passwordBox : {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
    alignSelf: 'center',
    borderRadius: 10,
    borderColor: COLORS.pure,
    borderWidth: 0.2,
    top: -30
  },
  login_btn : {
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
    height: 45,
    backgroundColor : COLORS.pure,
    alignSelf: 'center',
    borderRadius: 20
  },
})