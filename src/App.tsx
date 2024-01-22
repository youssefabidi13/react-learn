import ListGroup from "./components/ListGroup";
function App() {
  let items = ["New York", "Los Angeles", "Chicago", "Houston", "Philadelphia"];
  const handelSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handelSelectItem}
      />
    </div>
  );
}
export default App;
