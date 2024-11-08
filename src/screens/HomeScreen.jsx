import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';
import MiniHeader from '../components/MiniHeader';
import InputTextField from '../components/InputTextField';
import InputPicker from '../components/InputPicker';
import Change from 'react-native-vector-icons/FontAwesome';
import {useEffect, useState} from 'react';
import {convertApiCall, ratesApiCall} from '../api/AllRates';

function HomeScreen() {
  const [rates, setRates] = useState([]);
  const [selectedValue1, setSelectedValue1] = useState('USD');
  const [selectedValue2, setSelectedValue2] = useState('EUR');
  const [date, setDate] = useState('');

  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const getAllRates = async () => {
      const reasult = await ratesApiCall();
      setRates(reasult.rates);
      setDate(reasult.date);
    };
    getAllRates();
  }, []);

  const convertRates = async () => {
    const results = await convertApiCall(
      selectedValue1,
      selectedValue2,
      amount,
    );
    console.log(results);
  };

  console.log('selected value 1----------', selectedValue1);
  console.log('selected value 2----------', selectedValue2);
  console.log('Amount ----------', amount);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <StatusBar barStyle="light-content" />
        <Header />
        <View>
          <MiniHeader label={`${date}  Rates`} />
          <View className="mx-4">
            <InputTextField
              text={'Input Amount'}
              value={amount}
              onChangeText={setAmount}
            />

            <InputPicker
              text={'Select Currency'}
              valueSet={rates}
              selectedValue={selectedValue1}
              onValueChange={setSelectedValue1}
            />

            <View className="w-[100%] h-10 justify-center items-center my-3">
              <Change size={20} color={'black'} name="sort" />
            </View>

            <InputPicker
              text={'Select Currency'}
              valueSet={rates}
              selectedValue={selectedValue2}
              onValueChange={setSelectedValue2}
            />

            <TouchableOpacity
              className="w-[100%] h-[55] rounded-md bg-slate-700 mt-7 justify-center items-center"
              onPress={convertRates}>
              <Text
                className="text-white text-xl"
                style={{fontFamily: 'Poppins-Regular'}}>
                Convert
              </Text>
            </TouchableOpacity>
            <View className="mt-5">
              <Text
                className="text-md text-black text-lg text-bold"
                style={{fontFamily: 'Poppins-Regular'}}>
                {amount} {selectedValue1} =
              </Text>
              <Text
                className="text-3xl text-black"
                style={{fontFamily: 'Poppins-Regular'}}>
                {selectedValue2}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
