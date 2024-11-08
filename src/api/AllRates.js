import axios from 'axios';

const AllRatesApi = 'http://api.exchangeratesapi.io/v1/latest';
const apiKey = 'f606d877717e8af90f451deb450c317d';
const convertApi = 'http://api.exchangeratesapi.io/v1/convert';

export const ratesApiCall = async () => {
  try {
    const response = await axios.get(AllRatesApi, {
      params: {
        access_key: apiKey,
      },
    });
    return response.data;
  } catch (error) {
    console.log('Error fetching data', error);
    return {};
  }
};

export const convertApiCall = async (from, to, amount) => {
  // const newAmount = parseFloat(amount);
  if (isNaN(amount)) {
    console.log('Invalid amount');
    return {};
  }

  try {
    const response = await axios.get(convertApi, {
      params: {
        access_key: apiKey,
        from: from,
        to: to,
        amount: amount,
      },
    });
    return response.data;
  } catch (error) {
    console.log('Error fetching data', error);
    return {};
  }
};
