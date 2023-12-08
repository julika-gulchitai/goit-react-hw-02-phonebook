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
  //     <input type="text" name="name" required />

  state = {
    name: '',
    number: '',
  };

  //   handleNameChange = e => {
  //     this.setState({ name: e.target.value });
  //   };
  //   handleNumberChange = e => {
  //     this.setState({ number: e.target.value });
  //   };

  handleInputChange = e => {
    const { name, value } = e;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onContactAdd(this.state.name, this.state.number);
    // this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <StyledLabel>
          {'Name'}
          <StyledInput
            name="name"
            value={name}
            type="text"
            onChange={this.handleInputChange}
            placeholder="name"
            required
          />
        </StyledLabel>
        <StyledLabel>
          {'Number'}
          <StyledInput
            name="number"
            value={number}
            type="tel"
            onChange={this.handleInputChange}
            placeholder="phone number"
            required
          />
        </StyledLabel>
        <Button>Add contacts</Button>
      </StyledForm>
    );
  }
}
