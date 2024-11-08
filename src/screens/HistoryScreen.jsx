import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import InnerHeader from '../components/InnerHeader';
import Icon from 'react-native-vector-icons/Ionicons';

const HistoryScreen = () => {
  return (
    <SafeAreaView className="flex-1">
      <InnerHeader label="My Histrory" iconName="ellipsis-horizontal-sharp" />
      <View style={{flex: 4, marginHorizontal: 16, marginTop: 16}}></View>
      {/* Button area */}
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}
        className="mx-4">
        <View className="flex-row justify-between items-center">
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              color: 'black',
              fontSize: 20,
            }}></Text>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              color: 'black',
              fontSize: 20,
            }}></Text>
        </View>
        <TouchableOpacity
          className=" bg-slate-700"
          style={{
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            marginTop: 10,
            marginBottom: 20,
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              color: 'white',
              fontSize: 20,
            }}>
            Clear
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HistoryScreen;
