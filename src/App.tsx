import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { BiBulb } from "react-icons/bi";
import produce from "immer";
import { set } from "immer/dist/internal";
import NavBar from "./components/navbar";
import Cart from "./components/Cart";
import Form from "./components/Form";
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
  // const [bugs, setBugs] = useState([
  //   {
  //     id: 1,
  //     title: "Bug 1",
  //     fixed: false,
  //   },
  //   {
  //     id: 2,
  //     title: "Bug 2",
  //     fixed: false,
  //   },
  // ]);
  // const handleClick = () => {
  //   //setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  //   setBugs(
  //     produce((draft) => {
  //       const bug = draft.find((bug) => bug.id === 1);
  //       if (bug) {
  //         bug.fixed = true;
  //       }
  //     })
  //   );
  // };
  // const [cartItems, setCartItems] = useState(["Product 1", "Product 2"]);
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
      {/* {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? "fixed" : "new"}
        </p>
      ))}
      <button onClick={handleClick}>Fix Bug</button> */}
      {/* <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} /> */}
      <Form />
    </div>
  );
}
export default App;
