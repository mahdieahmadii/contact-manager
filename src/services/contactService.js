import axios from "axios";

const server_URL = "http://localhost:9000";

export const getAllContacts = () => {
  const url = `${server_URL}/contacts`;
  return axios.get(url);
};

export const getContact = (contactID) => {
  const url = `${server_URL}/contacts/${contactID}`;
  return axios.get(url);
};

export const getAllGroups = () => {
  const url = `${server_URL}/groups`;
  return axios.get(url);
};

export const getGroup = (groupId) => {
  const url = `${server_URL}/groups/${groupId}`;
  return axios.get(url);
};

export const createContact = (contact) => {
  const url = `${server_URL}/contacts`;
  return axios.post(url, contact);
};

export const updateContact = (contact, contactId) => {
  const url = `${server_URL}/contacts/${contactId}`;
  return axios.put(url, contact);
};

export const deleteContact = (contactId) => {
  const url = `${server_URL}/contacts/${contactId}`;
  return axios.delete(url);
};
