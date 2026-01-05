const initialState = {
  itemsOrdered: 0,
  typeOfItems: "",
  timeOfOrderPlaced: "",
  payment: "",
};

const OrderReducer = (state = initialState, action) => {
  if (action.type === "") {
    return state;
  } else {
    return state;
  }
};

export default OrderReducer;
