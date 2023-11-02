import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 1, packed: false },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    // In react, we are not allowed to mutate state. so we cant do items => item.push(item)
    setItems((items) => [...items, item]);
  }

  // The function will be used to stroke an item if cross is clicked, signifying that the item
  // has been packed. So we pass on the id from Item Element from where we call it and use a
  // filter to keep only those items which don't match with the id.
  // We are passing the function as a prop to the PackingList. From packingList, we will again move
  // it to Item component as a props because the finxt cross button is in Item component.

  function handleDeleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }
  // For the above function, since we wnated to delete an element, we used filter. but for the trailing
  //  function, we want to alter/toggle the packed status of the items object. So we are using map which
  // returns a new array based on condition. We are checking if the item.id is equal to the id passed
  // through the function and if so, we are spreading the item object and overriding the packed status to
  // toggling the value, else simply returning the same item.
  // We will once again pass handleToggleItem function as a prop to packageItem and then to Item component.
  function handleToggleItem(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteAll() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onDeleteAll={handleDeleteAll}
      />
      <Stats items={items} />
    </div>
  );
}
