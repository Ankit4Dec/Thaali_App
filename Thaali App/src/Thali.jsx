import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addIngredient, removeIngredient, updateQuantity } from "./actions";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Thali = () => {
  const ingredients = useSelector((state) => state.ingredients);
  const dispatch = useDispatch();

  const handleAddIngredient = (ingredient) => {
    dispatch(addIngredient(ingredient));
  };

  const handleRemoveIngredient = (ingredient) => {
    dispatch(removeIngredient(ingredient));
  };

  const handleQuantityChange = (ingredient, quantity) => {
    dispatch(updateQuantity(ingredient, quantity));
  };

  return (
    <div>
      <h2 style={{ color: "White" }}>Menu</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            <span style={{ margin: "20px" }}>
              {ingredient.name} - {ingredient.quantity}
            </span>
            <button onClick={() => handleRemoveIngredient(ingredient)}>
              Remove
            </button>
            <input
              type="number"
              value={ingredient.quantity}
              onChange={(e) => handleQuantityChange(ingredient, e.target.value)}
            />
          </li>
        ))}
      </ul>

      {/* Button  */}
      <div style={{ display: "flex" , flexWrap:'wrap' , marginLeft:'60px'}}>
        {/* ////////////////////////// */}
        <div style={{ margin: "20px 80px" }}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="../public/Roti/r1.jpg" />
            <Card.Body>
              <Card.Title>Chapati</Card.Title>
              <Button
                onClick={() =>
                  handleAddIngredient({
                    name: "Chapati",
                    quantity: 1,
                    price: 10,
                  })
                }
                style={{ margin: "20px" }}
                variant="primary"
              >
                Add
              </Button>
            </Card.Body>
          </Card>
        </div>
        {/* <button
          onClick={() =>
            handleAddIngredient({ name: "Chapati", quantity: 1, price: 10 })
          }
          style={{ margin: "20px" }}
        >
          Add Chapati
        </button> */}

        {/* //////////////////////////// */}

        <div style={{ margin: "20px 80px" }}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="../public/Roti/pickle.jpg" />
            <Card.Body>
              <Card.Title>Pickle</Card.Title>
              <Button
                onClick={() =>
                  handleAddIngredient({ name: "Pickle", quantity: 1, price: 5 })
                }
                style={{ margin: "20px" }}
                variant="primary"
              >
                Add
              </Button>
            </Card.Body>
          </Card>
        </div>
        {/* <button
          onClick={() =>
            handleAddIngredient({ name: "Pickle", quantity: 1, price: 5 })
          }
          style={{ margin: "20px" }}
        >
          Add Pickle
        </button> */}

        {/* //////////////////////////// */}
        <div style={{ margin: "20px 80px" }}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="../public/Roti/curd.jpg" />
            <Card.Body>
              <Card.Title>Curd</Card.Title>
              <Button
                onClick={() =>
                  handleAddIngredient({ name: "Curd", quantity: 1, price: 15 })
                }
                style={{ margin: "20px" }}
                variant="primary"
              >
                Add
              </Button>
            </Card.Body>
          </Card>
        </div>
        {/* <button
          onClick={() =>
            handleAddIngredient({ name: "Curd", quantity: 1, price: 15 })
          }
          style={{ margin: "20px" }}
        >
          Add Curd
        </button>
         */}

        {/* //////////////////////////// */}
        <div style={{ margin: "20px 80px" }}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="../public/Roti/sweet.jpg" />
            <Card.Body>
              <Card.Title>Sweet</Card.Title>
              <Button
                onClick={() =>
                  handleAddIngredient({ name: "Sweet", quantity: 1, price: 20 })
                }
                style={{ margin: "20px" }}
                variant="primary"
              >
                Add
              </Button>
            </Card.Body>
          </Card>
        </div>
        {/* <button
          onClick={() =>
            handleAddIngredient({ name: "Sweet", quantity: 1, price: 20 })
          }
          style={{ margin: "20px" }}
        >
          Add Sweet
        </button> */}

        {/* //////////////////////////// */}
        <div style={{ margin: "20px 80px" }}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="../public/Roti/dal.jpg" />
            <Card.Body>
              <Card.Title>Daal</Card.Title>
              <Button
               onClick={() =>
                handleAddIngredient({ name: "Daal", quantity: 1, price: 25 })
              }
              style={{ margin: "20px" }}
                variant="primary"
              >
                Add
              </Button>
            </Card.Body>
          </Card>
        </div>
        {/* <button
          onClick={() =>
            handleAddIngredient({ name: "Daal", quantity: 1, price: 25 })
          }
          style={{ margin: "20px" }}
        >
          Add Daal
        </button> */}

        {/* //////////////////////////// */}
        <div style={{ margin: "20px 80px" }}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="../public/Roti/paneer.jpg" />
            <Card.Body>
              <Card.Title>Paneer Dish</Card.Title>
              <Button
                onClick={() =>
                    handleAddIngredient({ name: "Paneer Dish", quantity: 1, price: 30 })
                  }
                  style={{ margin: "20px" }}
                variant="primary"
              >
                Add
              </Button>
            </Card.Body>
          </Card>
        </div>
        {/* <button
          onClick={() =>
            handleAddIngredient({ name: "Paneer Dish", quantity: 1, price: 30 })
          }
          style={{ margin: "20px" }}
        >
          Add Paneer Dish
        </button> */}
      </div>
    </div>
  );
};

export default Thali;
