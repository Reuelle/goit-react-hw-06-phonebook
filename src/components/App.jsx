import React from 'react';
import './App.module.css';  // Ensure this path is correct
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  return (
    <div className="app">
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <h2 className="subtitle">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
