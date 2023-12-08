import {
  StyledLabel,
  StyledContacts,
  Button,
} from 'components/ContactForm/ContactForm.styled';
import React from 'react';

export const ContactElem = ({ name, number, id, deleteContact }) => {
  return (
    <>
      <div>
        {name}: {number}{' '}
      </div>
      <Button type="button" onClick={() => deleteContact(id)}>
        Delete
      </Button>
    </>
  );
};
