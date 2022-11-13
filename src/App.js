import { Navbar } from "./components/Navbar";
import { Contacts } from "./components/Contact/Contacts";
import { useState } from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import { AddContact } from './components/Contact/AddContact/index';
import { EditContact } from './components/Contact/EditContact/index';
import { ViewConatct } from './components/Contact/ViewContact/index'

const App = () => {
  const [loading, setLoading] = useState(false);
  const [getContacts, setContacts] = useState([]);

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
