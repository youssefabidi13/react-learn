import { MouseEvent } from "react";
function ListGroup() {
  let items = ["New York", "Los Angeles", "Chicago", "Houston", "Philadelphia"];
  const message = items.length === 0 && <p>There are no items in the list</p>;
  const handelClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>List</h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={item} className="list-group-item" onClick={handelClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
