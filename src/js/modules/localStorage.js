/* eslint-disable max-len */
export const getStorage = key => {
  const objFromStorage = JSON.parse(localStorage.getItem(key));
  if (objFromStorage === null) {
    return [];
  } else {
    return objFromStorage;
  }
};

export const setStorage = (key, obj) => {
  const getData = getStorage(key);
  if (Array.isArray(obj)) {
    getData.splice(0, getData.length, ...obj);
  } else {
    getData.push(obj);
  }

  const newData = JSON.stringify(getData);
  localStorage.setItem(key, newData);
};

export const removeStorage = (id, usersName) => {
  const getDataFromStorage = getStorage(usersName);

  getDataFromStorage.forEach((item, index) => {
    if (id === item.id) {
      getDataFromStorage.splice([index], 1);
      setStorage(usersName, getDataFromStorage);
    }
  });
};

export const renewBasketQuantity = () => {
  const basketItemQuantity = document.querySelector('.header__nav-basket-quantity');
  const itemsInStorage = getStorage('basket');
  let productCounter = 0;
  itemsInStorage.forEach(() => {
    productCounter += 1;
  });
  basketItemQuantity.textContent = productCounter;
};
