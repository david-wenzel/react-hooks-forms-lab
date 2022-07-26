import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const [search, setSearch] =useState('')

  function onSearchChange(e) {
    // console.log(e.target.value)
    const itemsSearched = items.filter((item) => item.name.includes(e.target.value))
    setSearch(itemsSearched)
    console.log(itemsSearched)
    console.log(search)
    return setSearch
  }
  

  setItems(search)

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const handleSubmit = (e, itemObj) =>{
    e.preventDefault()
    console.log(itemObj)
}

  return (
    <div className="ShoppingList">
      <ItemForm handleSubmit={handleSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
