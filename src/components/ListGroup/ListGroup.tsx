import { useState } from "react";
import styles from "./ListGroup.module.css";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li<ListItemProps>`
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
  background-color: ${(props) => (props.active ? "#eee" : "transparent")};
`;
interface ListItemProps {
  active: boolean;
}
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const message = items.length === 0 && <p>There are no items in the list</p>;
  return (
    <>
      <h1>{heading}</h1>
      {message}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}
export default ListGroup;
