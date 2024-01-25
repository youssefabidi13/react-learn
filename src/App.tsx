import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { BiBulb } from "react-icons/bi";
import produce from "immer";
import { set } from "immer/dist/internal";
function App() {
  // const handleClick = () => {
  //   setAlertVisibility(true);
  // };

  // const [alertVisible, setAlertVisibility] = useState(false);
  // const [items, setItems] = useState(["Miami", "New York", "Boston"]);
  // function handleSelectItem(item: string) {
  //   console.log(item);
  // }
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [person, setPerson] = useState({
  //   firstname: "",
  //   lastname: "",
  // });
  // const [isLoading, setIsLoading] = useState(false);
  const [bugs, setBugs] = useState([
    {
      id: 1,
      title: "Bug 1",
      fixed: false,
    },
    {
      id: 2,
      title: "Bug 2",
      fixed: false,
    },
  ]);
  const handleClick = () => {
    //setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    setBugs(
      produce((draft) => {
        draft[0].fixed = true;
      })
    );
  };
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
      {/* <BiBulb color="red" /> */}
    </div>
  );
}
export default App;
