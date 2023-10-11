import { FormCreateContact } from 'components/Forms/FormCreateContact';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  createContactAction,
  deleteContactAction,
  filterContacts,
} from 'store/contacts/slice';

export const App = () => {
  // const [contacts, setContacts] = useState(
  //   JSON.parse(localStorage.getItem('contacts')) || []
  // );

  const { contacts, filter } = useSelector(store => store.contacts);
  const dispatch = useDispatch();

  const createContact = body => {
    dispatch(createContactAction(body));
  };

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const handleDelete = id => {
    dispatch(deleteContactAction(id));
  };

  const filterContact = value => {
    dispatch(filterContacts(value));
  };

  let filteredContacts = null;
  filteredContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1>Phone book</h1>
      <FormCreateContact createContact={createContact} />

      <h2>Contacts</h2>
      <Filter filterContact={filterContact} />

      {filteredContacts ? (
        <ContactList array={filteredContacts} handleDelete={handleDelete} />
      ) : (
        <ContactList array={contacts} handleDelete={handleDelete} />
      )}
    </div>
  );
};
