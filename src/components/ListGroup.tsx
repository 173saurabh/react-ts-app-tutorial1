//import { Fragment } from "react";
import { MouseEvent, useState } from "react";

// { items: [], heading: string}
interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  //State Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //items = [];

  /*if (items.length === 0)
    return (
      <>
        <h1>List</h1>
        <p>No item found</p>
      </>
    );*/

  //const message = items.length === 0 ? <p>No item found</p> : null;

  /*const getMessage = () => {
    items.length === 0 ? <p>No item found</p> : null;
  };*/

  //EventHandler
  //const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
