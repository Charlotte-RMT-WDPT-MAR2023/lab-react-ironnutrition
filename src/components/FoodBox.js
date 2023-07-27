// FoodBox.js
import React from 'react';
import { Card, Col, Button } from 'antd';

function FoodBox(props) {
  const { name, calories, image, servings, deleteFood, foodIndex } = props;
  const TotalCalories = calories * servings;

  return (
    <Col>
      <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={image} alt={name} style={{ height: '60px' }} />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>Total Calories: {TotalCalories} kcal</p>
        <Button type="primary" onClick={() => deleteFood(foodIndex)}>
          Delete
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
