import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { BiBulb } from "react-icons/bi";

function App() {
  const handleClick = () => {
    setAlertVisibility(true);
  };

  const [alertVisible, setAlertVisibility] = useState(false);
  const [items, setItems] = useState(["Miami", "New York", "Boston"]);
  function handleSelectItem(item: string) {
    console.log(item);
  }
  return (
    <div>
      {/* <Alert>
        Hello, <span>world!</span>
      </Alert> */}
      {/* {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button onClick={handleClick}>My Button</Button> */}
      {/* <ListGroup
        heading="Miami"
        items={items}
        onSelectItem={handleSelectItem}
      /> */}
      <BiBulb color="red" />
    </div>
  );
}
export default App;
