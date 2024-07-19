import './App.css'; // Import the CSS file
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  return (
    <div className="center-container">
      <div className="phonebook">
        <div className="wrapper">
          <h1 className="block">Phonebook</h1>
          <div className="block">
            <ContactForm />
          </div>
          <h2 className="block">Contacts</h2>
          <div className="block">
            <Filter />
          </div>
          <div className="block">
            <ContactList />
          </div>
        </div>
      </div>
    </div>
  );
};
