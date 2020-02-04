export default function displayStatus(state = '진열', action) {
  switch (action.type) {
    case 'SET_DISPLAY_STATUS':
      return action.payload;
    default:
      return state;
  }
}
