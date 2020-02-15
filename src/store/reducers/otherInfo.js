const initialState = {
  deliveryInfo: null,
  refundInfo: null,
};

export default function otherInfo(state = initialState, action) {
  switch (action.type) {
    case 'SET_OTHER_INFO':
      return {
        ...state,
        [action.status]: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
