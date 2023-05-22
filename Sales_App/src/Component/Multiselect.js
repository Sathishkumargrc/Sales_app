import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, SafeAreaView} from 'react-native';
import {MultiSelect} from 'react-native-element-dropdown';
import {COLORS, SIZES} from '../Constant/Themes';
import AntDesign from 'react-native-vector-icons/AntDesign';

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

const MultiSelectComponent = props => {
  const [selected, setSelected] = useState([]);

  const renderItem = item => {
    //any
    return (
      <View style={styles.item}>
        <Text style={styles.selectedTextStyle}>{item.label}</Text>
        <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <MultiSelect
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        containerStyle={styles.innerContainer}
        visibleSelectedItem={{backgroundColor: 'red'}}
        data={data}
        labelField="label"
        valueField="value"
        showsVerticalScrollIndicator={false}
        placeholder={props.name}
        value={selected}
        search
        searchPlaceholder="Search..."
        onChange={item => {
          setSelected(item);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color="black"
            name="Safety"
            size={20}
          />
        )}
        renderItem={renderItem}
        renderSelectedItem={(item, unSelect) => (
          <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
            <View style={styles.selectedStyle}>
              <Text style={styles.textSelectedStyle}>{item.label}</Text>
              <AntDesign color="black" name="delete" size={17} />
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default MultiSelectComponent;

const styles = StyleSheet.create({
  container: {padding: 10, flex: 1},
  dropdown: {
    height: 50,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 12,
    shadowColor: '#000',
    width: '110%',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  innerContainer: {
    borderRadius: 15,
  },
  placeholderStyle: {
    fontSize: 11,
    color: COLORS.blackTextColor,
    fontFamily: 'DMSans-Bold',
  },
  selectedTextStyle: {
    fontSize: 12,
    color: COLORS.blackTextColor,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    backgroundColor: 'white',
    shadowColor: '#000',
    marginTop: 8,
    marginRight: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  textSelectedStyle: {
    marginRight: 5,
    fontSize: 16,
    // backgroundColor: 'red',
    flexDirection: 'row'
  },
});
