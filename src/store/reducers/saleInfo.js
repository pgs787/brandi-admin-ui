const initialState = {
  wholesalePrice: null,
  salePrice: null,
  discountInfo: {
    discountRate: null,
    discountedPrice: null,
    discountStartDate: null,
    discountEndDate: null,
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
    case 'SET_DISCOUNT_START_DATE':
      return {
        ...state,
        discountInfo: {
          ...state.discountInfo,
          discountStartDate: action.payload,
        },
      };
    case 'SET_DISCOUNT_END_DATE':
      return {
        ...state,
        discountInfo: {
          ...state.discountInfo,
          discountEndDate: action.payload,
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
