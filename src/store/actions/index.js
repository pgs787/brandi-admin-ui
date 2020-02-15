export const setSeller = seller => {
  return {
    type: 'SET_SELLER',
    payload: seller,
  };
};

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

export const setUseProvisionNotice = status => {
  return {
    type: 'SET_USE_PROVISION_NOTICE',
    payload: status,
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

export const setProductRepImage = imageUrl => {
  return {
    type: 'SET_PRODUCT_REP_IMAGE',
    payload: imageUrl,
  };
};

export const setProductDetails = source => {
  return {
    type: 'SET_PRODUCT_DETAILS',
    payload: source,
  };
};

export const setYoutubeUrl = url => {
  return {
    type: 'SET_YOUTUBE_URL',
    payload: url,
  };
};

export const setWholesalePrice = price => {
  return {
    type: 'SET_WHOLESALE_PRICE',
    payload: price,
  };
};

export const setSalePrice = price => {
  return {
    type: 'SET_SALE_PRICE',
    payload: price,
  };
};

export const setDiscountRate = rate => {
  return {
    type: 'SET_DISCOUNT_RATE',
    payload: rate,
  };
};

export const setDiscountedPrice = price => {
  return {
    type: 'SET_DISCOUNTED_PRICE',
    payload: price,
  };
};

export const setDiscountStartDate = datetime => {
  return {
    type: 'SET_DISCOUNT_START_DATE',
    payload: datetime,
  };
};

export const setDiscountEndDate = datetime => {
  return {
    type: 'SET_DISCOUNT_END_DATE',
    payload: datetime,
  };
};

export const selectBasicColor = color => {
  return {
    type: 'SELECT_BASIC_COLOR',
    payload: color,
  };
};

export const selectBasicSize = size => {
  return {
    type: 'SELECT_BASIC_SIZE',
    payload: size,
  };
};

export const selectedList = select => {
  return {
    type: 'SELECTED_LIST',
    payload: select,
  };
};
export const removeBasicList = id => {
  return {
    type: 'REMOVE_BASIC_LIST',
    payload: id,
  };
};

export const setStock = set => {
  return {
    type: 'SET_STOCK',
    payload: set,
  };
};

export const colorChange = (color, target) => {
  return {
    type: 'COLOR_CHANGE',
    payload: {
      color: color,
      target: target,
    },
  };
};
export const sizeChange = (size, target) => {
  return {
    type: 'SIZE_CHANGE',
    payload: {
      size: size,
      target: target,
    },
  };
};

export const stockChange = (set, target) => {
  return {
    type: 'STOCK_CHANGE',
    payload: {
      set: set,
      target: target,
    },
  };
};

export const setStockCount = (count, target) => {
  return {
    type: 'SET_STOCK_COUNT',
    payload: {
      count: count,
      target: target,
    },
  };
};
export const setType = type => {
  return {
    type: 'SET_TYPE',
    payload: type,
  };
};

export const addAutonomyOption = () => {
  return {
    type: 'ADD_AUTONOMY_OPTION',
  };
};
export const setMinVolume = number => {
  return {
    type: 'SET_MIN_VOLUME',
    payload: number,
  };
};

export const setMaxVolume = number => {
  return {
    type: 'SET_MAX_VOLUME',
    payload: number,
  };
};

export const setProductTags = arr => {
  return {
    type: 'SET_PRODUCT_TAGS',
    payload: arr,
  };
};

export const nonOptionStock = stock => {
  return {
    type: 'NON_OPTION_STOCK',
    payload: stock,
  };
};

export const setSellerImg = value => {
  return {
    type: 'SET_SELLER_IMG',
    payload: value,
  };
};

export const setSellerName = (value, status) => {
  return {
    type: 'SET_SELLER_NAME',
    payload: value,
    status: status,
  };
};

export const setBusinessInfo = (value, status) => {
  return {
    type: 'SET_BUSINESS_INFO',
    payload: value,
    status: status,
  };
};

export const setBusinessImg = (value, status) => {
  return {
    type: 'SET_BUSINESS_IMG',
    payload: value,
    status: status,
  };
};

export const setDetailInfo = (value, status) => {
  return {
    type: 'SET_DETAIL_INFO',
    payload: value,
    status: status,
  };
};

export const setDetailImg = (value, status) => {
  return {
    type: 'SET_DETAIL_IMG',
    payload: value,
    status: status,
  };
};

export const setOtherInfo = (value, status) => {
  return {
    type: 'SET_OTHER_INFO',
    payload: value,
    status: status,
  };
};
