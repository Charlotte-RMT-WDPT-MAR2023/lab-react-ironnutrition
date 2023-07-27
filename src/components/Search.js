import React from 'react';

function Search(props) {
  const { originalArray, setFoods } = props;

  const filterFoods = (event) => {
    const userSearch = event.target.value.toLowerCase();

    const searchResult = originalArray.filter((item) => {
      const itemName = item.name.toLowerCase();
      return itemName.startsWith(userSearch);
    });
    setFoods(searchResult);
  };

  return (
    <div>
      <h2>Search</h2>
      <input type="text" onChange={filterFoods} />
    </div>
  );
}

export default Search;
