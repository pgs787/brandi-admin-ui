const initialState = {
  detailImg: {
    backgroundImg: null,
  },
  detailInfo: {
    introduce: null,
    detailIntro: null,
    site: null,
    managerName: null,
    managerNumber: null,
    managerMail: null,
    managerNameSecond: null,
    managerNumberSecond: null,
    managerMailSecond: null,
    managerNameThird: null,
    managerNumberThird: null,
    managerMailThird: null,
    instaId: null,
    csNumber: null,
    kakaoId: null,
    yellowId: null,
  },
};

export default function userBusinessInfo(state = initialState, action) {
  switch (action.type) {
    case 'SET_DETAIL_INFO':
      return {
        ...state,
        detailInfo: {
          ...state.detailInfo,
          [action.status]: action.payload,
        },
      };
    case 'SET_DETAIL_IMG':
      return {
        ...state,
        detailImg: {
          ...state.detailImg,
          [action.status]: action.payload,
        },
      };
    default:
      return {
        ...state,
      };
  }
}
