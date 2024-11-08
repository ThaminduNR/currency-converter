import {View, Text} from 'react-native';
import React from 'react';
import InnerHeader from '../components/InnerHeader';
import InputTextField from '../components/InputTextField';

const SearchScreen = () => {
  return (
    <View>
      <InnerHeader label="Search" iconName="ellipsis-horizontal-sharp" />
      <View className="mx-4">
        <InputTextField text={null} value={null} onChangeText={null} />
      </View>
    </View>
  );
};

export default SearchScreen;
