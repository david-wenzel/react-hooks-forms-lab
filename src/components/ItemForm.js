import React, {useState} from "react";
import { v4 as uuid } from "uuid";


function ItemForm({handleSubmit}) {

  const [name, setName] = useState('')

  const changeName = (e) => {
      setName(e.target.value)
  }

  const [category, setCategory] = useState('Produce')

  const changeCategory = (e) => {
    setCategory(e.target.value)
  }

  return (
    <form className="NewItem" onSubmit={(e) => handleSubmit(e, FormData)}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={changeName}/>
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={changeCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
