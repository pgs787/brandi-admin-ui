export const setSellStatus = status => {
  return {
    type: 'SET_SELL_STATUS',
    payload: status,
  };
};

export const setDisplayStatus = status => {
  return {
    type: 'SET_DISPLAY_STATUS',
    payload: status,
  };
};

export const setFirstCategory = category => {
  return {
    type: 'SET_FIRST_CATEGORY',
    payload: category,
  };
};

export const setSecondCategory = category => {
  return {
    type: 'SET_SECOND_CATEGORY',
    payload: category,
  };
};

export const setManufacturer = name => {
  return {
    type: 'SET_MANUFACTURER',
    payload: name,
  };
};

export const setManufactureDate = date => {
  return {
    type: 'SET_MANUFACTURE_DATE',
    payload: date,
  };
};

export const setOriginCountry = country => {
  return {
    type: 'SET_ORIGIN_COUNTRY',
    payload: country,
  };
};

export const setProductName = name => {
  return {
    type: 'SET_PRODUCT_NAME',
    payload: name,
  };
};

export const setProductDesc = desc => {
  return {
    type: 'SET_PRODUCT_DESC',
    payload: desc,
  };
};

export const setColorFilter = color => {
  return {
    type: 'SET_COLOR_FILTER',
    payload: color,
  };
};

export const setStyleFilter = style => {
  return {
    type: 'SET_STYLE_FILTER',
    payload: style,
  };
};

export const setAgeFilter = age => {
  return {
    type: 'SET_AGE_FILTER',
    payload: age,
  };
};

export const setYoutubeUrl = url => {
  return {
    type: 'SET_YOUTUBE_URL',
    payload: url,
  };
};
