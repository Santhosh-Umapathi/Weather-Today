import {MMKV} from 'react-native-mmkv';
import {TStorageKey, TStorageValue} from './types';

const ENCRYPTION_KEY = 'WEATHER_TODAY_APP'; // just for testing

// Encrypted storage
export const storage = new MMKV({
  id: ENCRYPTION_KEY,
  encryptionKey: ENCRYPTION_KEY,
});

// Get
export const getData = (key: TStorageKey) => {
  const results = storage.getString(key);

  if (results) {
    return JSON.parse(results);
  }

  return results;
};
export const getAllData = () => storage.getAllKeys();

// Save
export const saveData = <T>(key: TStorageKey, value: TStorageValue<T>) =>
  storage.set(key, JSON.stringify(value));

// Remove
export const deleteData = (key: TStorageKey) => storage.delete(key);
export const deleteAllData = () => storage.clearAll();

// Check
export const checkKey = (key: TStorageKey) => storage.contains(key);

// Encryption
export const encryptAllData = () => storage.recrypt(ENCRYPTION_KEY);
export const removeEncryption = () => storage.recrypt(undefined);
