import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

interface PincodeInputProps {
  onSearch: (pincode: string) => void;
}

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  max-width: 400px;

  @media (max-width: 600px) {
    flex-direction: column;
    max-width: 90%;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;

  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

const SearchButton = styled.button`
  background-color: #007bff;
  border: none;
  color: white;
  padding: 10px;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 4px;
  margin-left: 10px;

  @media (max-width: 600px) {
    margin-left: 0;
    width: 100%;
  }
`;

const PincodeInput: React.FC<PincodeInputProps> = ({ onSearch }) => {
  const [pincode, setPincode] = useState('');

  const handleSearch = () => {
    if (pincode) onSearch(pincode);
  };

  return (
    <InputContainer>
      <Input
        type="text"
        placeholder="Enter Pincode"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
      />
      <SearchButton onClick={handleSearch}>
        <AiOutlineSearch />
      </SearchButton>
    </InputContainer>
  );
};

export default PincodeInput;
