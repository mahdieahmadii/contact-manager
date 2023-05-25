import { useState, useEffect } from "react";
import "./App.css";
import Contacts from "./components/Contact/Contacts";
import AddContact from "./components/Contact/AddContact";
import EditContact from "./components/Contact/EditContact";
import ViewContact from "./components/Contact/ViewContact";
import Navbar from "./components/Contact/index";
import { Navigate, Route, Routes } from "react-router-dom";
import axios from "axios";
import { getAllContacts, getAllGroups } from "./services/contactService";

const App = () => {
  const [getContacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [getGroups, setGroups] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data: contactsData } = await getAllContacts();
        const { data: groupsData } = await getAllGroups();
        setContacts(contactsData);
        setGroups(groupsData);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/contacts" />} />
        <Route
          path="/contacts"
          element={<Contacts contacts={getContacts} loading={loading} />}
        />
        <Route path="/comtacts/add" element={<AddContact />} />
        <Route path="/contacts/:contactId" element={<ViewContact />} />
        <Route path="/contacts/edit/:contactId" element={<EditContact />} />
      </Routes>
    </div>
  );
};

export default App;
