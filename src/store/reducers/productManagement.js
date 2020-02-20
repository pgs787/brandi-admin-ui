const basicDate = date => {
  const year = date.getFullYear() + '';
  const month =
    date.getMonth() + 1 < 10
      ? '0' + (date.getMonth() + 1)
      : '' + (date.getMonth() + 1);
  const day = date.getDate() < 10 ? '0' + date.getDate() : '' + date.getDate();
  const set = year + month + day;
  return set;
};

const initialState = {
  currentPage: 1,
  showList: { label: 10, value: 10 },
  pagenateData: {
    startDate: '20200101',
    endDate: '20200219',
    sellingStatus: '전체',
    displayStatus: '전체',
    discountStatus: '전체',
    sellerNameInput: '',
    selectOptionInput: '',
    selectedOption: { value: '상품명', label: '상품명' },
  },
  totalProductCount: '',
  setMaxPage: 10,
};

export default function productManagement(state = initialState, action) {
  switch (action.type) {
    case 'SET_BEFORE_PAGE':
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    case 'SET_AFTER_PAGE':
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case 'SELECTED_PAGE':
      return {
        ...state,
        currentPage: action.payload,
      };
    case 'SET_SHOW_LIST':
      return {
        ...state,
        showList: action.payload,
      };
    case 'PAGENATE_DATA':
      return {
        ...state,
        pagenateData: action.payload,
      };
    case 'TOTAL_PRODUCT_COUNT':
      return {
        ...state,
        totalProductCount: action.payload,
      };
    case 'SET_MAX_PAGE':
      return {
        ...state,
        setMaxPage: action.payload,
      };
    default:
      return state;
  }
}
