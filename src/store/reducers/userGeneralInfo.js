const initialState = {
  sellerName: {
    kr: null,
    en: null,
  },
  sellerImg: null,
};

export default function userGeneralInfo(state = initialState, action) {
  switch (action.type) {
    case 'SET_SELLER_NAME':
      return {
        ...state,
        sellerName: {
          ...state.sellerName,
          [action.status]: action.payload,
        },
      };
    case 'SET_SELLER_IMG':
      return {
        ...state,
        sellerImg: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
