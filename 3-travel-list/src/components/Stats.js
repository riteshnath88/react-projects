export default function Stats({ items }) {
  // Base case - if no items added in the list, just return with the following message
  // Option of early return should be used where ever necessary to prevent unnecessary calcualtion.
  if (items.length === 0) {
    return (
      <p className="stats">
        <em> Start adding some items to your packing list 🚀</em>
      </p>
    );
  }
  // Below is a derived state. We should not define a new state like const [numItems, setNumItems] = useState()
  const numItems = items.length;
  const packedItemsArray = items.filter((item) => item.packed);
  const packedItems = packedItemsArray.length;
  const percentage = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything ready to go ✈️"
          : `🚗You have ${numItems} items on your list, and you already packed
        ${packedItems} (${percentage}%)`}
      </em>
    </footer>
  );
}
