import { Navbar } from "./components/Navbar";
import { Contacts } from "./components/Contact/Contacts";
import { useState } from "react";

const App = () => {
  const [getContacts, setContacts] = useState([]);

  return (
    <div className="App">
      <Navbar />
      <Contacts contacts={getContacts} />
    </div>
  );
}

export default App;
