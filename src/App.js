import { Navbar } from "./components/Navbar";
import { Contacts } from "./components/Contact/Contacts";
import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import { AddContact } from './components/Contact/AddContact/index';
import { EditContact } from './components/Contact/EditContact/index';
import { ViewConatct } from './components/Contact/ViewContact/index';
import axios from 'axios';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [getContacts, setContacts] = useState([]);
  const [getGroups, setGroups] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data: contactsData } = await axios.get("http://localhost:9000/contacts");
        const { groups: groupsData } = await axios.get("http://localhost:9000/groups");
        console.log(contactsData);
        setContacts(contactsData);
        setGroups(groupsData);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    }
    fetchData();
  }, [])
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to={"/contacts"} />} />
        <Route path="/contacts" element={<Contacts contacts={getContacts} loading={loading} />} />
        <Route path="/contacts/add" element={<AddContact />} />
        <Route path="/contacts/:contactId" element={<ViewConatct />} />
        <Route path="/contacts/edit/:contactId" element={<EditContact />} />
      </Routes>
    </div>
  );
}

export default App;
