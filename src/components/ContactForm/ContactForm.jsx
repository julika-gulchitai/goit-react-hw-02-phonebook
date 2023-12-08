import { ContactElem } from 'components/ContactElem/ContactElem';
import {
  StyledBtn,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledTitle,
  Button,
} from './ContactForm.styled';
import React from 'react';

export class ContactForm extends React.Component {
  //   <>
  //     <input type="text" name="name" required />
  //   </>;
  //   const handleSubmit = e => {
  //     e.preventDefault();
  //   };
  //   return (
  //     <div>
  //       <StyledForm onSubmit={handleSubmit}>
  //         <ContactElem />
  //         <StyledBtn>Add contact</StyledBtn>
  //       </StyledForm>
  //     </div>
  //   );
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    console.log(e.target.value);
  };
  handleNumber = e => {
    console.log(e.target.value);
  };

  handleInputChange = (field, e) => {
    this.setState({ [field]: e.target.value });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <StyledLabel name="Name">
          {'Name'}
          <StyledInput value={name} type="text" name="name" required />
        </StyledLabel>
        <StyledLabel>
          {'Number'}
          <StyledInput value={number} type="tel" name="number" required />
        </StyledLabel>
        <Button>Add contacts</Button>
      </>
    );
  }
}
