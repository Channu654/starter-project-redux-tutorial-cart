const IsloggedReducer = (state = false, action) => {
  switch (action.type) {
    case 'Signin':
      return !state;

    default:
      return state;
  }
};
export default IsloggedReducer;
