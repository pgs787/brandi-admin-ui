export const checkUrl = url => {
  const mailtest = /^http[s]?\:\/\/[w]+\./i;
  return mailtest.test(url);
};

export const checkId = id => {
  const idtest = /^[A-Za-z0-9]([-_]?[0-9a-zA-Z--_]){4,20}$/;
  return idtest.test(id);
};

export const checkPhoneNumber = number => {
  const numberTest = /^\d{11}$/;
  return numberTest.test(number);
};

export const checkSalePrice = number => {
  const salePriceTest = /^$|^\d+0$/;
  return salePriceTest.test(number);
};

export const checkPercentage = number => {
  const percentageTest = /^$|^[0-9]$|^[1-9][0-9]$|^(100)$/;
  return percentageTest.test(number);
};

export const checkSellerName = name => {
  const nametest = /^[ㄱ-ㅣ가-힣-0-9]([0-9ㄱ-ㅣ가-힣]){1,20}$/;
  return nametest.test(name);
};

export const checkSellerNameEng = name => {
  const nametest = /^[A-Za-z0-9]([0-9a-zA-Z--_]){1,20}$/;
  return nametest.test(name);
};
