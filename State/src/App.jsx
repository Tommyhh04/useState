/*I am not sure why but the code doesnt work unless i import React from "react" manually. Best guess is Scrimba is using an old method to use useState and maybe in later videos it will be the modern way??*/
import React from "react";

//Very simple app that adds one more item to the list each time a button is pressed. Practice for useState
function App() {
  const [things, setThings] = React.useState(["Thing 1", "Thing 2"]);

  //Each time the add item button is clicked this code runs. It should add a new paragraph with text "Thing (number)"
  function addItem() {
    const newThingText = `Thing ${things.length + 1}`;
    setThings((prevState) => [...prevState, newThingText]);
  }
  //Creates a paragraph for each item created on the list
  const thingsElements = things.map((thing) => <p key={thing}>{thing}</p>);
  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {thingsElements}
    </div>
  );
}

export default App;
