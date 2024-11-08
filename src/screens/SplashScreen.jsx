import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  const goNext = () => {
    navigation.navigate('HomeTabs');
  };
  return (
    <View className="flex-1 items-center justify-center mx-4">
      <View className="flex-1 items-center justify-center">
        <Image
          source={require('../assets/images/Logo.png')}
          style={{width: 200, height: 200}}
        />
      </View>
      <View className="flex-1 w-[100%] justify-end mb-5">
        <TouchableOpacity
          className="w-[100%] h-[55] rounded-md bg-slate-700 mt-7 justify-center items-center"
          onPress={goNext}>
          <Text
            className="text-white text-xl"
            style={{fontFamily: 'Poppins-Regular'}}>
            Let's Convert
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SplashScreen;
