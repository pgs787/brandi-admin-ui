const initialState = {
  wholesalePrice: 0,
  salePrice: 0,
  discountInfo: {
    discountRate: 0,
    discountedPrice: 0,
    discountPeriod: '',
  },
  minVolume: 0,
  maxVolume: 0,
  productTags: [],
};

export default function saleInfo(state = initialState, action) {
  switch (action.type) {
    case 'SET_WHOLESALE_PRICE':
      return { ...state, wholesalePrice: action.payload };
    case 'SET_SALE_PRICE':
      return { ...state, salePrice: action.payload };
    case 'SET_DISCOUNT_RATE':
      return {
        ...state,
        discountInfo: { ...state.discountInfo, discountRate: action.payload },
      };
    case 'SET_DISCOUNTED_PRICE':
      return {
        ...state,
        discountInfo: {
          ...state.discountInfo,
          discountedPrice: action.payload,
        },
      };
    case 'SET_DISCOUNT_PERIOD':
      return {
        ...state,
        discountInfo: {
          ...state.discountInfo,
          discountPeriod: action.payload,
        },
      };
    default:
      return state;
  }
}
