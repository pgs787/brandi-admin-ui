const initialState = {
  basicColor: [],
  basicSize: [],
  setStock: [],
  selectedList: [],
};

export default function optionInfo(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_BASIC_COLOR':
      return {
        ...state,
        basicColor: action.payload,
      };
    case 'SELECT_BASIC_SIZE':
      return {
        ...state,
        basicSize: action.payload,
      };
    case 'SET_STOCK':
      return {
        ...state,
        setStock: action.payload,
      };
    case 'SELECTED_LIST':
      return {
        ...state,
        selectedList: action.payload,
      };
    default:
      return state;
  }
}
