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

/*              옵션정보 액션함수             */

// 옵션정보 선택
export const optionSet = set => {
  return {
    type: 'OPTION_SET',
    payload: set,
  };
};
// 기본정보 컬러 선택
export const selectBasicColor = color => {
  return {
    type: 'SELECT_BASIC_COLOR',
    payload: color,
  };
};
// 기본정보 사이즈 선택
export const selectBasicSize = size => {
  return {
    type: 'SELECT_BASIC_SIZE',
    payload: size,
  };
};
// 선택된 옵션 리스트
export const selectedList = select => {
  return {
    type: 'SELECTED_LIST',
    payload: select,
  };
};
// 선택된 기본옵션 리스트 삭제
export const removeBasicList = item => {
  return {
    type: 'REMOVE_BASIC_LIST',
    payload: item,
  };
};
// 재고정보 일괄 선택
export const setStock = (set, num) => {
  return {
    type: 'SET_STOCK',
    payload: {
      set: set,
      num: num,
    },
  };
};
// 선택된 기본옵션 컬러 변경
export const colorChange = (color, target) => {
  return {
    type: 'COLOR_CHANGE',
    payload: {
      color: color,
      target: target,
    },
  };
};
// 선택된 기본옵션 사이즈 변경
export const sizeChange = (size, target) => {
  return {
    type: 'SIZE_CHANGE',
    payload: {
      size: size,
      target: target,
    },
  };
};
// 선택된 기본옵션 재고정보 변경
export const stockChange = (set, num, target) => {
  return {
    type: 'STOCK_CHANGE',
    payload: {
      set: set,
      num: num,
      target: target,
    },
  };
};
// 기본옵션 재고정보 리셋
export const resetStock = (set, target) => {
  return {
    type: 'RESET_STOCK',
    payload: {
      set: set,
      target: target,
    },
  };
};
// 선택된 기본옵션 재고정보 수량변경
export const setStockCount = (count, target) => {
  return {
    type: 'SET_STOCK_COUNT',
    payload: {
      count: count,
      target: target,
    },
  };
};
// 옵션없음
export const nonOptionStock = stock => {
  return {
    type: 'NON_OPTION_STOCK',
    payload: stock,
  };
};

/*                  상품관리 액션함수                 */

// 이전페이지
export const setBeforePage = set => {
  return {
    type: 'SET_BEFORE_PAGE',
    payload: set,
  };
};
// 다음페이지
export const setAfterPage = set => {
  return {
    type: 'SET_AFTER_PAGE',
    payload: set,
  };
};
// 페이지 선택
export const selectedPage = set => {
  return {
    type: 'SELECTED_PAGE',
    payload: set,
  };
};
// 페이지 상품 개수
export const setShowList = set => {
  return {
    type: 'SET_SHOW_LIST',
    payload: set,
  };
};

// 페이지 제한
export const setMaxPage = set => {
  return {
    type: 'SET_MAX_PAGE',
    payload: set,
  };
};
// 페이지네이션 정보
export const pagenateData = set => {
  return {
    type: 'PAGENATE_DATA',
    payload: set,
  };
};
// 제품 총 개수
export const totalProductCount = count => {
  return {
    type: 'TOTAL_PRODUCT_COUNT',
    payload: count,
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
