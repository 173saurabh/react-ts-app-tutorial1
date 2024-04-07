//import Message from './Message';
//import ListGroup from "./components/ListGroup";
//import Alert from "./components/Alert";
import { ReactNode, FC } from "react";
import Button from "./components/Button";

//For ListGroup Component
/*function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectedItem}
      />
    </div>
  );
}*/

//For Alert Component
/*function App() {
  return (
    <div>
      <Alert>
        Hello <span>Mr.Cho</span>
      </Alert>
    </div>
  );
}*/

//For button component
function App() {
  return (
    <div>
      <Button colour="secondary" onClick={() => console.log("Clicked")}>
        Submit
      </Button>
    </div>
  );
}

export default App;
