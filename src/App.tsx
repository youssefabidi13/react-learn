import { useEffect, useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { BiBulb } from "react-icons/bi";
import produce from "immer";
import { is, set } from "immer/dist/internal";
import Cart from "./components/Cart";
import Form from "./components/Form";
import ExpenseList from "./components/expense-tracker/components/ExpenseList";
import ExpenseFilter from "./components/expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./components/expense-tracker/components/ExpenseForm";
import categories from "./components/expense-tracker/components/categories";
import ProductList from "./components/ProductList";
import axios, { Axios, AxiosError, CanceledError } from "axios";

// const connect = () => {
//   console.log("connect");
// };
// const disconnect = () => {
//   console.log("disconnect");
// };
interface User {
  id: number;
  name: string;
}
function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    // try {
    //   const fetchUsers = async () => {
    //     const res = await axios.get(
    //       "https://jsonplaceholder.typicode.com/users"
    //     );
    //     setUsers(res.data);
    //   };
    //   fetchUsers();
    // } catch (err) {
    //   setError((err as AxiosError).message);
    // }
    const controller = new AbortController();
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => {
      controller.abort();
    };
  }, []);
  // const [selectedCategory, setSelectedCategory] = useState("");
  // const [expenses, setExpenses] = useState([
  //   {
  //     id: 1,
  //     description: "Buy a book",
  //     amount: 20,
  //     category: "Entertainment",
  //   },
  //   {
  //     id: 2,
  //     description: "Buy a milk",
  //     amount: 5,
  //     category: "Groceries",
  //   },
  //   {
  //     id: 3,
  //     description: "Buy a car",
  //     amount: 20000,
  //     category: "Utilities",
  //   },
  // ]);
  // const visibleExpenses = selectedCategory
  //   ? expenses.filter((expense) => expense.category === selectedCategory)
  //   : expenses;
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
  // const [category, setCategory] = useState("");
  return (
    <>
      {/* <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) =>
            console.log(setSelectedCategory(category))
          }
        />
      </div> */}
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
      {/* <Form /> */}
      {/* <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      /> */}
      {/* <select
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="">All categories</option>
        <option value="Clothing">Clothing</option>
        <option value="Household">HouseHold</option>
      </select>
      <ProductList category={category} /> */}
      {error && <p>{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}
export default App;
