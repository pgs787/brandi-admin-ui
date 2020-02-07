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
