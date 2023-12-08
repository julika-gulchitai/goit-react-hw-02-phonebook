import {
  StyledLabel,
  StyledContacts,
  Button,
} from 'components/ContactForm/ContactForm.styled';
import { nanoid } from 'nanoid';
import React from 'react';

export const ContactElem = ({ name, number, id }) => {
  return (
    <li>
      <StyledContacts>
        {' '}
        key={id}, name = {name} number={number}
      </StyledContacts>
      <Button>Delete</Button>
    </li>
  );
};
