const CounterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'incre':
      return state + 1;
    case 'Decre':
      return state - 1;

    default:
      return state;
      console.log('state:', state);
  }
};
export default CounterReducer;
