const initialState = {
  optionSet: 0,
  basicColor: [],
  basicSize: [],
  setStock: false,
  stockState: 0,
  selectedList: null,
  nonOptionStock: '',
};

export default function optionInfo(state = initialState, action) {
  switch (action.type) {
    case 'OPTION_SET':
      return {
        ...state,
        optionSet: action.payload,
      };
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
        setStock: action.payload.set,
        stockState: action.payload.num,
      };
    case 'SELECTED_LIST':
      return {
        ...state,
        selectedList: action.payload,
      };
    case 'REMOVE_BASIC_LIST':
      return {
        ...state,
        selectedList: state.selectedList.filter(element => {
          return element.id !== action.payload;
        }),
      };
    case 'COLOR_CHANGE':
      return {
        ...state,
        selectedList: state.selectedList.map((element, index) =>
          index === action.payload.target
            ? {
                ...element,
                basic_options_colors_id: action.payload.color.value,
              }
            : element,
        ),
      };
    case 'SIZE_CHANGE':
      return {
        ...state,
        selectedList: state.selectedList.map((element, index) =>
          index === action.payload.target
            ? { ...element, basic_options_sizes_id: action.payload.size.value }
            : element,
        ),
      };
    case 'RESET_STOCK':
      return {
        ...state,
        selectedList: state.selectedList.map((element, index) =>
          index === action.payload.target
            ? { ...element, stock_volume: action.payload.set }
            : element,
        ),
      };
    case 'STOCK_CHANGE':
      return {
        ...state,
        selectedList: state.selectedList.map((element, index) =>
          index === action.payload.target
            ? {
                ...element,
                is_stock_managed: action.payload.set,
                stockState: action.payload.num,
              }
            : element,
        ),
      };

    case 'SET_STOCK_COUNT':
      return {
        ...state,
        selectedList: state.selectedList.map((element, index) =>
          index === action.payload.target
            ? { ...element, stock_volume: parseInt(action.payload.count) }
            : element,
        ),
      };
    case 'NON_OPTION_STOCK':
      return {
        ...state,
        nonOptionStock: action.payload,
      };
    default:
      return state;
  }
}
