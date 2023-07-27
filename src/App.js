import React, { useState } from 'react';
import foodData from './foods.json';
import FoodBox from './components/FoodBox.js';
import Search from './components/Search.js';
import AddFoodForm from './components/AddFoodForm.js';
import { Row, Divider, Button } from 'antd';

function App() {
  const [foods, setFoods] = useState(foodData);
  const [showForm, setShowForm] = useState(false);

  const addNewFood = (food) => {
    const updatedFoods = [...foods, food];
    setFoods(updatedFoods);
  };

  const deleteFood = (foodIndex) => {
    const filteredFoods = foods.filter((food, index) => index !== foodIndex);
    setFoods(filteredFoods);
  };

  return (
    <div className="App">
      <Button onClick={() => setShowForm(!showForm)}>
        {showForm ? (
          <AddFoodForm addFood={addNewFood} />
        ) : (
          'Add More Food'
        )}
      </Button>

      <Search foods={foods} setFoods={setFoods} />

      <Divider>Food List</Divider>

      {foods.length === 0 ? ( // Check if there are no foods to display
        <p>Oops! There is no more content to show</p>
      ) : (
        <Row style={{ width: '100%', justifyContent: 'center' }}>
          {foods.map((food, index) => (
            <FoodBox
              key={index}
              foodIndex={index}
              name={food.name}
              calories={food.calories}
              image={food.image}
              servings={food.servings}
              deleteFood={deleteFood}
            />
          ))}
        </Row>
      )}
    </div>
  );
}

export default App;
