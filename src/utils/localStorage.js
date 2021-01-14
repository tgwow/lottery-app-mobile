import AsyncStorage from '@react-native-async-storage/async-storage';

export const clearData = async (keys) => {
  try {
    await AsyncStorage.multiRemove(keys);
  } catch (e) {
    console.log('[AsyncStore[multiRemove]]', e);
  }
};

export const storeData = async (data) => {
  const keyAndValue = [];
  Object.keys(data).forEach((item) => {
    keyAndValue.push([`@${item}`, `${data[item]}`]);
  });
  try {
    await AsyncStorage.multiSet(keyAndValue);
  } catch (e) {
    console.log('[AsyncStore[multiSet]]', e);
  }
};
