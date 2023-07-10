export const addIngredient = (ingredient) => {
    return {
      type: 'ADD_INGREDIENT',
      payload: ingredient
    };
  }
  
  export const removeIngredient = (ingredient) => {
    return {
      type: 'REMOVE_INGREDIENT',
      payload: ingredient
    };
  }
  
  export const updateQuantity = (ingredient, quantity) => {
    return {
      type: 'UPDATE_QUANTITY',
      payload: { ingredient, quantity }
    };
  }
  