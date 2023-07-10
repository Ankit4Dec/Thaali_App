import React from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const ingredients = useSelector(state => state.ingredients);

  const totalPrice = ingredients.reduce((total, ingredient) => {
    return total + (ingredient.quantity * ingredient.price);
  }, 0);

  const handleCheckout = () => {
    if (ingredients.length < 2) {
      alert('Please add at least two items to the Thali.');
    } else {
      // Proceed to checkout
    }
  }

  return (
    <div style={{background:"#8d1a1a"}}>
      <h2>Checkout</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.name} - {ingredient.quantity}</li>
        ))}
      </ul>
      <p>Total Price: {totalPrice}</p>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}

export default Checkout;
