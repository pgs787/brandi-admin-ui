const initialState = {
  businessInfo: {
    ceoName: null,
    sellerName: null,
    businessNumber: null,
    correspondNumber: null,
  },
  businessImg: {
    registImg: null,
    sellingImg: null,
  },
};

export default function userBusinessInfo(state = initialState, action) {
  switch (action.type) {
    case 'SET_BUSINESS_INFO':
      return {
        ...state,
        businessInfo: {
          ...state.businessInfo,
          [action.status]: action.payload,
        },
      };
    case 'SET_BUSINESS_IMG':
      return {
        ...state,
        businessImg: {
          ...state.businessImg,
          [action.status]: action.payload,
        },
      };
    default:
      return {
        ...state,
      };
  }
}
