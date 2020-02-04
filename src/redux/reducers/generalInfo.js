const initialState = {
  sellingStatus: '판매',
  displayStatus: '진열',
  categories: {
    firstCategory: '',
    secondCategory: '',
  },
  provisionNotice: {
    manufacturer: '',
    manufactureDate: '',
    originCountry: '',
  },
  productName: '',
  productDesc: '',
  colorFilter: '',
  styleFilter: '',
  ageFilter: [],
  youtubeUrl: '',
};

export default function generalInfo(state = initialState, action) {
  switch (action.type) {
    case 'SET_SELL_STATUS':
      return { ...state, sellingStatus: action.payload };
    case 'SET_DISPLAY_STATUS':
      return { ...state, displayStatus: action.payload };
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
    case 'SET_COLOR_FILTER':
      return {
        ...state,
        colorFilter: action.payload,
      };
    case 'SET_STYLE_FILTER':
      return {
        ...state,
        styleFilter: action.payload,
      };
    case 'SET_AGE_FILTER':
      return {
        ...state,
        ageFilter: action.payload,
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
