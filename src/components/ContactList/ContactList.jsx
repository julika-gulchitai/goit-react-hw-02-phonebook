import { ContactElem } from 'components/ContactElem/ContactElem';
import {
  Button,
  StyledContacts,
} from 'components/ContactForm/ContactForm.styled';

export const ContactList = ({ filteredContacts, deleteContact }) => {
  return (
    <>
      <ul>
        <StyledContacts>
          {filteredContacts.map(contact => (
            <ContactElem
              key={contact.id}
              {...contact}
              deleteContact={deleteContact}
            />
          ))}
        </StyledContacts>
      </ul>
    </>
  );
};
