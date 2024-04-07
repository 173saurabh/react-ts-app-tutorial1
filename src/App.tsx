//import Message from './Message';
//import ListGroup from "./components/ListGroup";
import { useState } from "react";
import Alert from "./components/Alert";
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
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button colour="secondary" onClick={() => setAlertVisibility(true)}>
        Submit
      </Button>
    </div>
  );
}

export default App;
