import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const handleClick = () => {
    console.log("Hello, world!");
  };
  return (
    <div>
      {/* <Alert>
        Hello, <span>world!</span>
      </Alert> */}
      <Button onClick={handleClick}>My Button</Button>
    </div>
  );
}
export default App;
