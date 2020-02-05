const initialState = {
  wholesalePrice: null,
  salePrice: null,
  discountInfo: {
    discountRate: null,
    discountedPrice: null,
    discountPeriod: null,
  },
  minVolume: null,
  maxVolume: null,
  productTags: [],
  useRelationProduct: null,
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
    case 'SET_MIN_VOLUME':
      return {
        ...state,
        minVolume: action.payload,
      };
    case 'SET_MAX_VOLUME':
      return {
        ...state,
        maxVolume: action.payload,
      };
    case 'SET_USE_RELATION_PRODUCT':
      return {
        ...state,
        useRelationProduct: action.payload,
      };
    default:
      return state;
  }
}
