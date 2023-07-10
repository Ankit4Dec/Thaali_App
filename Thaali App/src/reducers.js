const initialState = {
    ingredients: []
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_INGREDIENT':
        return {
          ...state,
          ingredients: [...state.ingredients, action.payload]
        };
      case 'REMOVE_INGREDIENT':
        return {
          ...state,
          ingredients: state.ingredients.filter(ingredient => ingredient !== action.payload)
        };
      case 'UPDATE_QUANTITY':
        return {
          ...state,
          ingredients: state.ingredients.map(ingredient => {
            if (ingredient === action.payload.ingredient) {
              return {
                ...ingredient,
                quantity: action.payload.quantity
              };
            }
            return ingredient;
          })
        };
      default:
        return state;
    }
  }
  
  export default reducer;
  