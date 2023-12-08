import {
  StyledContacts,
  StyledInput,
  StyledTitle,
} from 'components/ContactForm/ContactForm.styled';

export const Filter = ({ filter, handleInputChange }) => {
  return (
    <>
      <StyledTitle style={{ fontSize: '30px' }}>
        Find contact by name
      </StyledTitle>
      <StyledInput
        name="filter"
        value={filter}
        onChange={handleInputChange}
        placeholder="Enter user name"
      ></StyledInput>
    </>
  );
};
