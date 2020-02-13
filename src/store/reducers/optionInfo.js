const initialState = {
  basicColor: [],
  basicSize: [],
  setStock: 0,
  selectedList: [],
  setType: 0,
  autonomyList: ['', ''],
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
    case 'STOCK_CHANGE':
      return {
        ...state,
        selectedList: state.selectedList.map((element, index) =>
          index === action.payload.target
            ? { ...element, stock: action.payload.set }
            : element,
        ),
      };
    case 'SET_TYPE':
      return {
        ...state,
        setType: action.payload,
      };
    case 'ADD_AUTONOMY_OPTION':
      return {
        ...state,
        autonomyList: state.autonomyList.concat(''),
      };
    case 'AUTONOMY_REMOVE':
      return {
        ...state,
        autonomyList: state.autonomyList.filter((element, index) => {
          return index !== action.payload;
        })
      }
    case 'AUTONOMY_OPTION_LIST':
      return {
        ...state,
        autonomyList: state.autonomyList.map((element, index) => {
          return index === action.payload.id ? 
            {name: action.payload.name, 
            list: action.payload.list} : element
        })
      }
    case 'SEQUENCE_SET_UP':
      return {
        ...state,
        autonomyList: action.payload
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
