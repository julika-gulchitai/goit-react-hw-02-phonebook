import { ContactElem } from 'components/ContactElem/ContactElem';
import {
  Button,
  StyledContacts,
} from 'components/ContactForm/ContactForm.styled';

export const ContactList = ({ filteredContacts, onDeleteContact }) => {
  return (
    <StyledContacts>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <Button onClick={() => onDeleteContact(contact.id)} type="button">
            Delete
          </Button>
        </li>
      ))}
    </StyledContacts>
  );
};
