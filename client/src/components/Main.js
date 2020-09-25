import React, { useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import apiService from '../ApiService';


function Main () {

  const {userName} = useParams();

  const [startersList, setStartersList] = useState([{ dish: "", price: "" }]);


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
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    startersList && apiService.postMenu(startersList);
  };
  
    const validateForm = () => {
      return (
    !startersList[0].dish || !startersList[0].price 
      );
    };

  return (
    <div>
      <h2>Main</h2>
      <form className="form" onSubmit={handleSubmit} >
        {startersList.map((state, i) => {
        return (
          <div className="box">
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
          <button className="form-submit" type="submit" disabled={validateForm()}>
          &nbsp;Submit Menu&nbsp;
          </button>
      </form>
    </div>
  )
}

export default Main;