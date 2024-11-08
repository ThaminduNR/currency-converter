import {View, Text, TextInput} from 'react-native';
import React from 'react';

const InputTextField = ({text, value, onChangeText}) => {
  return (
    <View>
      <Text style={{fontFamily: 'Poppins-Regular'}}>{text}:</Text>
      <TextInput
        className="w-[100%] h-[55] p-2 border border-gray-400 rounded-md my-2"
        placeholder="Type here"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default InputTextField;
