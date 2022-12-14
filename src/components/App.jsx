import { PhonebookList } from './Phonebook/PhoneBookList';
import { FormForPhoneBook } from './Phonebook/FormForPhonebook/FormForPhoneBook';

import { FilterForPhoneBook } from './Phonebook/FilterForPhonbook/FilterForPhoneBook';

export const App = () => {
  return (
    <div
      style={{
        backgroundColor: 'rgb(225, 179, 152)',
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
      <h1>Phonebook</h1>
      <FormForPhoneBook />
      <h2>Contacts</h2>
      <FilterForPhoneBook />
      <PhonebookList />
    </div>
  );
};
