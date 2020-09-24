import React, { useState } from 'react';
import { useParams, Link, NavLink } from 'react-router-dom';
import apiService from '../ApiService';

const initialState = {
  restaurantName: '',
  dish: '',
  price: '',
};


function MenuForm () {

  const {userName} = useParams();

  const [state, setState] = useState(initialState);
  const [inputList, setInputList] = useState([{ dish: "", price: "" }]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
  
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { dish: "", price: "" }]);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
      state && apiService.adMenu(state);
  };
  
    const validateForm = () => {
      return (
        !state.restaurantName || !state.dish || !state.price 
      );
    };

  return (
    <div className="container">
      <header>
        <h1>MenuForm</h1>
        <div className="btn-group">
          <NavLink to={`/homepage/${userName}`} className="btn" activeClassName="active">
            Back
          </NavLink>
          </div>
      </header>

      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Restaurant Name"
          name="restaurantName"
          value={state.restaurantName}
          onChange={handleChange}
        />
        <div className="dish">
          <input
            type="text"
            placeholder="Dish"
            name="dish"
            value={state.dish}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Price"
            name="price"
            value={state.price}
            onChange={handleChange}
          />
        </div>

        {inputList.map((state, i) => {
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
              {inputList.length !== 1 && <button 
              onClick={() => handleRemoveClick(i)}>Remove</button>}
              {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
            </div>
          </div>
        );
      })}
        

        <Link to={`/homepage/${state.userName}`}>
          <button className="form-submit" type="submit" disabled={validateForm()}>
          &nbsp;Submit Menu&nbsp;
          </button>
        </Link>
      </form>

    </div>
  )
}

export default MenuForm;