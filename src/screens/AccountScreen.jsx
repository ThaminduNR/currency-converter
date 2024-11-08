import {View, Text} from 'react-native';
import React from 'react';
import InnerHeader from '../components/InnerHeader';

const AccountScreen = () => {
  return (
    <View>
      <InnerHeader label="My Account" iconName="ellipsis-horizontal-sharp" />
    </View>
  );
};

export default AccountScreen;
