import React from 'react';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Container, StyledTitle } from './ContactForm/ContactForm.styled';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };
  render() {
    return (
      <Container>
        <StyledTitle>Phonebook</StyledTitle>
        <ContactForm />

        <StyledTitle style={{ fontSize: '30px' }}>Contacts</StyledTitle>
        <Filter />
        <ContactList />
      </Container>
    );
  }
}
