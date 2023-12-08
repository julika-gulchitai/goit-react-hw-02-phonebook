import {
  StyledLabel,
  StyledContacts,
  Button,
} from 'components/ContactForm/ContactForm.styled';
import React from 'react';

export const ContactElem = ({ name, number, id }) => {
  return (
    <li>
      <StyledContacts key={id}>*</StyledContacts>
    </li>
  );
};
