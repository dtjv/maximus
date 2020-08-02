import localforage from "localforage";

const STORAGE_KEY = "maximus";

export const getSavedWods = async ({ key = STORAGE_KEY } = {}) => {
  return (await localforage.getItem(key)) || [];
};

export const saveNewWod = async ({ key = STORAGE_KEY, newWod = {} } = {}) => {
  if (!Object.keys(newWod).length) return;

  const wods = (await localforage.getItem(key)) || [];

  return await localforage.setItem(key, [newWod, ...wods]);
};
