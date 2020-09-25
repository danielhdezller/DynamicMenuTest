import React, { useState } from 'react';
import apiService from '../ApiService';

function Starters () {



  const [startersList, setStartersList] = useState([{ dish: "", price: "" }]);
  const [mainList, setMainList] = useState([{ dish: "", price: "" }]);
  const [dessertList, setDessertList] = useState([{ dish: "", price: "" }]);
  const [drinkList, setDrinkList] = useState([{ drink: "", price: "" }]);

  
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...startersList];
    list[index][name] = value;
    setStartersList(list);
  };
  
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...startersList];
    list.splice(index, 1);
    setStartersList(list);
  };
  // handle click event of the Add button
  const handleAddClick = () => {
    setStartersList([...startersList, { dish: "", price: "" }]);
  };
/////////////////////////////////////////////////////
  // handle input change
  const handleInputChangesetMainList = (e, index) => {
    const { name, value } = e.target;
    const list = [...mainList];
    list[index][name] = value;
    setMainList(list);
  };
  
  // handle click event of the Remove button
  const handleRemoveClicksetMainList = index => {
    const list = [...mainList];
    list.splice(index, 1);
    setMainList(list);
  };
  // handle click event of the Add button
  const handleAddClicksetMainList = () => {
    setMainList([...mainList, { dish: "", price: "" }]);
  };
/////////////////////////////////////////////////////
  // handle input change
  const handleInputChangesetDessertList = (e, index) => {
    const { name, value } = e.target;
    const list = [...dessertList];
    list[index][name] = value;
    setDessertList(list);
  };
  
  // handle click event of the Remove button
  const handleRemoveClicksetDessertList = index => {
    const list = [...dessertList];
    list.splice(index, 1);
    setDessertList(list);
  };
  // handle click event of the Add button
  const handleAddClicksetDessertList = () => {
    setDessertList([...dessertList, { dish: "", price: "" }]);
  };
/////////////////////////////////////////////////////
  // handle input change
  const handleInputChangesetDrinkList = (e, index) => {
    const { name, value } = e.target;
    const list = [...drinkList];
    list[index][name] = value;
    setDrinkList(list);
  };
  
  // handle click event of the Remove button
  const handleRemoveClicksetDrinkList = index => {
    const list = [...drinkList];
    list.splice(index, 1);
    setDrinkList(list);
  };
  // handle click event of the Add button
  const handleAddClicksetDrinkList = () => {
    setDrinkList([...drinkList, { drink: "", price: "" }]);
  };

  
  const postRequest = {
    restaurant: {
      starters: startersList,
      main: mainList,
      dessert: dessertList,
      drinks: drinkList,
    }}


    function validateForm () {
      const validateStartersList = startersList.map(function(x) {
        return !x.dish || !x.price;
      });
      const validateMainList = mainList.map(function(x) {
        return !x.dish || !x.price;
      });
      const validateDessertList = dessertList.map(function(x) {
        return !x.dish || !x.price;
      });
      const validateDrinkList = drinkList.map(function(x) {
        return !x.drink || !x.price;
      });
      const arrConcat = validateStartersList.concat(validateMainList, validateDessertList, validateDrinkList);
      const result = arrConcat.includes(true)
      return result;
    }
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    startersList && apiService.postMenu(postRequest);
  };

  return (
    <div>
      <form className="form" autoComplete="off" onSubmit={handleSubmit} >
      <h2>Starters</h2>
        {startersList.map((state, i) => {
        return (
          <div key="{i}" className="box">
            <input
              type="text"
              placeholder="Dish Name"
              name="dish"
              value={state.dish}
              onChange={e => handleInputChange(e, i)}
            />
            <input
              type="text"
              placeholder="Price"
              name="price"
              value={state.price}
              onChange={e => handleInputChange(e, i)}
            />
            <div className="btn-box">
              {startersList.length !== 1 && <button 
              onClick={() => handleRemoveClick(i)}>Remove</button>}
              {startersList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
            </div>
          </div>
        );
      })}
      <h2>Main</h2>
        {mainList.map((state, i) => {
        return (
          <div key="{i}" className="box">
            <input
              type="text"
              placeholder="Dish Name"
              name="dish"
              value={state.dish}
              onChange={e => handleInputChangesetMainList(e, i)}
            />
            <input
              type="text"
              placeholder="Price"
              name="price"
              value={state.price}
              onChange={e => handleInputChangesetMainList(e, i)}
            />
            <div className="btn-box">
              {mainList.length !== 1 && <button 
              onClick={() => handleRemoveClicksetMainList(i)}>Remove</button>}
              {mainList.length - 1 === i && <button onClick={handleAddClicksetMainList}>Add</button>}
            </div>
          </div>
        );
      })}

      <h2>Dessert</h2>
        {dessertList.map((state, i) => {
        return (
          <div key="{i}" className="box">
            <input
              type="text"
              placeholder="Dish Name"
              name="dish"
              value={state.dish}
              onChange={e => handleInputChangesetDessertList(e, i)}
            />
            <input
              type="text"
              placeholder="Price"
              name="price"
              value={state.price}
              onChange={e => handleInputChangesetDessertList(e, i)}
            />
            <div className="btn-box">
              {dessertList.length !== 1 && <button 
              onClick={() => handleRemoveClicksetDessertList(i)}>Remove</button>}
              {dessertList.length - 1 === i && <button onClick={handleAddClicksetDessertList}>Add</button>}
            </div>
          </div>
        );
      })}

      <h2>Drinks</h2>
        {drinkList.map((state, i) => {
        return (
          <div key="{i}" className="box">
            <input
              type="text"
              placeholder="Drink Name"
              name="drink"
              value={state.drink}
              onChange={e => handleInputChangesetDrinkList(e, i)}
            />
            <input
              type="text"
              placeholder="Price"
              name="price"
              value={state.price}
              onChange={e => handleInputChangesetDrinkList(e, i)}
            />
            <div className="btn-box">
              {drinkList.length !== 1 && <button 
              onClick={() => handleRemoveClicksetDrinkList(i)}>Remove</button>}
              {drinkList.length - 1 === i && <button onClick={handleAddClicksetDrinkList}>Add</button>}
            </div>
          </div>
        );
      })}
          <button className="form-submit" type="submit" disabled={validateForm()}>
          &nbsp;Submit Menu&nbsp;
          </button>
      </form>
    </div>
  )
}

export default Starters;