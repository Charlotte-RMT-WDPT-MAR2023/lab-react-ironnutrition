import { useState } from 'react';
import { Divider, Input, Button } from 'antd';

function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [image, setImage] = useState();
  const [servings, setServings] = useState(1);
  const handleNameInput = (e) => setName(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handleServingsInput = (e) => setServings(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = { name, calories, image, servings };

    console.log('Submitted: ', newFood);

    props.addFood(newFood);
   
    setName('');
    setCalories('');
    setImage(1);
    setServings(1);
  };



  
  return (
    <div className="AddFood">
      <form  onSubmit={handleSubmit}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <Divider>Add Food Entry</Divider>
        <label>Name</label>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleNameInput}
        />

        <label>Calories:</label>
        <Input
          type="number"
          name="calories"
          value={calories}
          onChange={handleCaloriesInput}
        />

        <label>Image:</label>
        <Input
          type="string"
          name="image"
          value={image}
          onChange={handleImageInput}
        />

        <label>Servings:</label>
        <Input
          type="number"
          name="servings"
          checked={servings}
          onChange={handleServingsInput}
        />

        <Button type="submit">Add a Food</Button>
      </form>
    </div>
  );
}

export default AddFoodForm;
