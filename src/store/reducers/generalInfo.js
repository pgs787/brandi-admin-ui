const initialState = {
  selectedSeller: null,
  isSelling: true,
  isDisplaying: true,
  categories: {
    firstCategory: null,
    secondCategory: null,
  },
  useProvisionNotice: false,
  provisionNotice: {
    manufacturer: null,
    manufactureDate: null,
    originCountry: null,
  },
  productName: null,
  productDesc: null,
  productRepImage: null,
  productDetails: null,
  youtubeUrl: null,
};

export default function generalInfo(state = initialState, action) {
  switch (action.type) {
    case 'SET_SELLER':
      return { ...state, selectedSeller: action.payload };
    case 'SET_SELL_STATUS':
      return { ...state, isSelling: action.payload };
    case 'SET_DISPLAY_STATUS':
      return { ...state, isDisplaying: action.payload };
    case 'SET_FIRST_CATEGORY':
      return {
        ...state,
        categories: { ...state.categories, firstCategory: action.payload },
      };
    case 'SET_SECOND_CATEGORY':
      return {
        ...state,
        categories: { ...state.categories, secondCategory: action.payload },
      };
    case 'SET_USE_PROVISION_NOTICE':
      return { ...state, useProvisionNotice: action.payload };
    case 'SET_MANUFACTURER':
      return {
        ...state,
        provisionNotice: {
          ...state.provisionNotice,
          manufacturer: action.payload,
        },
      };
    case 'SET_MANUFACTURE_DATE':
      return {
        ...state,
        provisionNotice: {
          ...state.provisionNotice,
          manufactureDate: action.payload,
        },
      };
    case 'SET_ORIGIN_COUNTRY':
      return {
        ...state,
        provisionNotice: {
          ...state.provisionNotice,
          originCountry: action.payload,
        },
      };
    case 'SET_PRODUCT_NAME':
      return {
        ...state,
        productName: action.payload,
      };
    case 'SET_PRODUCT_DESC':
      return {
        ...state,
        productDesc: action.payload,
      };
    case 'SET_PRODUCT_REP_IMAGE':
      return {
        ...state,
        productRepImage: action.payload,
      };
    case 'SET_PRODUCT_DETAILS':
      return {
        ...state,
        productDetails: action.payload,
      };
    case 'SET_YOUTUBE_URL':
      return {
        ...state,
        youtubeUrl: action.payload,
      };
    default:
      return state;
  }
}
