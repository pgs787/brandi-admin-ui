export default function sellingStatus(state = '판매', action) {
  switch (action.type) {
    case 'SET_SELL_STATUS':
      return action.payload;
    default:
      return state;
  }
}
