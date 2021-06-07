export const createLocalStorage = (key) => {
  const storage = localStorage.getItem(key);
  if (storage) {
    return JSON.parse(storage);
  }
  localStorage.setItem(key, JSON.stringify([]));
  return [];
};

export const updateLocalStorageItem = (key, recipe) => {
  let output = [];

  if (localStorage.getItem(key)) createLocalStorage(key);

  const storage = JSON.parse(localStorage.getItem(key));

  if (storage.find((recipeStored) => recipeStored.id === recipe.id)) {
    output = deleteLocalStorageItem(key, recipe);
  } else output = [...storage, recipe];

  localStorage.setItem(key, JSON.stringify(output));
  return output;
};

export const updateLocalStorageInProgress = (key, recipe) => {
  let output = {};

  const storage = JSON.parse(localStorage.getItem(key));

  output = { ...storage, ...recipe };

  localStorage.setItem(key, JSON.stringify(output));
};

export const deleteLocalStorageItem = (key, recipe) => {
  const storage = JSON.parse(localStorage.getItem(key));
  const deletedStorage = storage.filter(
    (recipeItem) => recipeItem.id !== recipe.id,
  );
  localStorage.setItem(key, deletedStorage);
  return deletedStorage;
};
