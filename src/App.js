import "./App.css";
import Contacts from "./components/Contact/Contacts";
import Navbar from "./components/Contact/index";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Contacts />
    </div>
  );
};

export default App;
