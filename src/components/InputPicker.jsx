import {View, Text} from 'react-native';
import React from 'react';
import {Picker} from '@react-native-picker/picker';

const InputPicker = ({text, valueSet, selectedValue, onValueChange}) => {
  return (
    <View>
      <Text style={{fontFamily: 'Poppins-Regular'}}>{text}:</Text>
      <View className=" w-[auto] h-[auto] border border-gray-300 rounded-md mt-2">
        <Picker
          className="w-[100%]  border border-gray-300"
          selectedValue={selectedValue}
          onValueChange={onValueChange}>
          {Object.keys(valueSet).map(key => (
            <Picker.Item key={key} label={key} value={key} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export default InputPicker;
