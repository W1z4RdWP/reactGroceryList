import Content from './Content';
import AddItem from './AddItem';
import Header from './Header'
import SearchItem from './SearchItem';
import Footer from './Footer'
import { useEffect, useState } from 'react';

// npx json-server -p 3500 -w data/db.json

function App() {

  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('shoppingList')) || []
  );

  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')

useEffect(()=>{
  localStorage.setItem('shoppingList', JSON.stringify(items))
},[items])

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('shoppingList', JSON.stringify(newItems))
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setAndSaveItems(listItems);
  }


  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    console.log(newItem)
    addItem(newItem);
    setNewItem('');
    console.log("submitted ", e)
  }

  return (
    <div className="App">
      <Header title="Список покупок" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      ></AddItem>
      <SearchItem search={search}
        setSearch={setSearch}>
      </SearchItem>
      <Content
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}

      />
      <Footer length={items.length}></Footer>
    </div>
  );
}

export default App;
