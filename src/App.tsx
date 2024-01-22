import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const handleClick = () => {
    setAlertVisibility(true);
  };

  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {/* <Alert>
        Hello, <span>world!</span>
      </Alert> */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button onClick={handleClick}>My Button</Button>
    </div>
  );
}
export default App;
