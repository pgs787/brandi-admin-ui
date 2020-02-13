const initialState = {
  basicColor: [],
  basicSize: [],
  setStock: 0,
  selectedList: [],
  nonOptionStock: ''
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
    case 'REMOVE_BASIC_LIST':
      return {
        ...state,
        selectedList: state.selectedList.filter((element, index) => {
          return index !== action.payload;
        }),
      };
    case 'COLOR_CHANGE':
      return {
        ...state,
        selectedList: state.selectedList.map((element, index) => 
          index === action.payload.target
            ? {...element, color: action.payload.color.value}
            : element,
        ),
      };
    case 'SIZE_CHANGE':
      return {
        ...state,
        selectedList: state.selectedList.map((element, index) => 
          index === action.payload.target
            ? {...element, size: action.payload.size.value} 
            : element,
        )
      }
    case 'STOCK_CHANGE':
      return {
        ...state,
        selectedList: state.selectedList.map((element, index) =>
          index === action.payload.target
            ? { ...element, stock: action.payload.set }
            : element,
        ),
      };
    case 'SET_STOCK_COUNT':
      return {
        ...state,
        selectedList: state.selectedList.map((element, index) => 
          index === action.payload.target
          ? {...element, count: action.payload.count} 
          : element,
        )
      }
    case 'NON_OPTION_STOCK':
      return {
        ...state,
        nonOptionStock: action.payload
      }
    default:
      return state;
  }
}
