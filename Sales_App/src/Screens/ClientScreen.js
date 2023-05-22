import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import ToolBar from '../Component/ToolBar';
import MultiSelectComponent from '../Component/Multiselect';
import BackgroundColor from '../Component/BackgroundColor';
import Data from '../Component/Dummy';
import {COLORS} from '../Constant/Themes';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';

const ClientScreen = () => {

    const navigation = useNavigation();
  const ListDetails = ({
    Company,
    City,
    Technology,
    Mobile,
    Email,
    Budget,
    Status,
  }) => {
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity style={style.devContainer}
        onPress = {() => navigation.navigate('DeveloperDetails')}
        >
          <View style={style.textContainer}>
            <Text style={style.listText}>Company Name :</Text>
            <Text style={style.originalText}> {Company}</Text>
          </View>

          <View style={style.textContainer}>
            <Text style={style.listText}>City :</Text>
            <Text style={style.originalText}> {City}</Text>
          </View>

          <View style={style.textContainer}>
            <Text style={style.listText}>Technology :</Text>
            <Text style={style.originalText}> {Technology}</Text>
          </View>

          <View style={style.textContainer}>
            <Text style={style.listText}>Budget Range :</Text>
            <Text style={style.originalText}> {Budget}</Text>
          </View>

          <View style={style.textContainer}>
            <Text style={style.listText}>Mobile Number :</Text>
            <Text style={style.originalText}> {Mobile}</Text>
          </View>

          <View style={style.textContainer}>
            <Text style={style.listText}>Email id :</Text>
            <Text style={style.originalText}> {Email}</Text>
          </View>

          <View style={style.textContainer}>
            <Text style={style.listText}>Status :</Text>
            <Text style={style.originalText}> {Status}</Text>
          </View>
          
          <View style = {{padding: 2, flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity style = {{paddingHorizontal: 10}}>
            <MaterialCommunityIcons name = 'account-edit-outline' size = {30} color = {COLORS.pure} />
          </TouchableOpacity>
          <TouchableOpacity>
          <MaterialCommunityIcons name = 'delete-alert' size = {30} color = 'red' />
          </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ToolBar title="Client screen" backBtn={true} />
      <>
        <ScrollView>
          <BackgroundColor>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <MultiSelectComponent name="City" />
              <MultiSelectComponent name="Technology" />
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <MultiSelectComponent name="Low budget" />
              <MultiSelectComponent name="Status" />
            </View>

            <View>
              <FlatList
                data={Data}
                renderItem={({item}) => (
                  <ListDetails
                    Company={item.Company}
                    Technology={item.Technology}
                    Mobile={item.Mobile}
                    Email={item.Email}
                    City={item.City}
                    Budget={item.Budget}
                    Status={item.Status}
                  />
                )}
                {...console.log('>>>>', Data)}
                keyExtractor={item => item.id}
              />
            </View>
          </BackgroundColor>
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default ClientScreen;

const style = StyleSheet.create({
  devContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: COLORS.white,
    elevation: 7,
    width: '80%',
    borderRadius: 20,
    alignSelf: 'center',
  },
  listText: {
    fontFamily: 'DMSans-Bold',
    fontSize: 16,
    color: COLORS.blackTextColor,
  },
  originalText: {
    fontFamily: 'DMSans-Bold',
    fontSize: 13,
    color: COLORS.gray2,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    padding: 6
  },
});
