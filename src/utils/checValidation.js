export const checkUrl = url => {
  const mailtest = /^http[s]?\:\/\/[w]+\./i;
  return mailtest.test(url);
};

export const checkId = id => {
  const idtest = /^[A-Za-z0-9]([-_]?[0-9a-zA-Z]){4,20}$/;
  return idtest.test(id);
};
/^http[s]?\:\/\//i;
