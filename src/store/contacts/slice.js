import { createSlice, nanoid } from '@reduxjs/toolkit';
import { initialState } from './initialState';
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    createContactAction: (state, { payload }) => {
      const isAlreadyExist = state.contacts.find(
        el => el.name.toLowerCase() === payload.name.toLowerCase()
      );
      if (isAlreadyExist)
        return alert(`${isAlreadyExist.name} is already in contacts`);
      const newContact = { ...payload, id: nanoid() };
      state.contacts = [...state.contacts, newContact];
    },
    deleteContactAction: (state, { payload }) => {
      state.contacts = state.contacts.filter(el => el.id !== payload);
    },
    filterContacts: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { createContactAction, deleteContactAction, filterContacts } =
  contactsSlice.actions;
