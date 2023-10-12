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
  const { contacts } = useSelector(store => store.contacts);
  const dispatch = useDispatch();

  const createContact = body => {
    const isAlreadyExist = contacts.find(
      el => el.name.toLowerCase() === body.name.toLowerCase()
    );
    if (isAlreadyExist)
      return alert(`${isAlreadyExist.name} is already in contacts`);
    dispatch(createContactAction(body));
  };

  const handleDelete = id => {
    dispatch(deleteContactAction(id));
  };

  const filterContact = value => {
    dispatch(filterContacts(value));
  };

  return (
    <div className={css.container}>
      <h1>Phone book</h1>
      <FormCreateContact createContact={createContact} />

      <h2>Contacts</h2>
      <Filter filterContact={filterContact} />

      <ContactList handleDelete={handleDelete} />
    </div>
  );
};
