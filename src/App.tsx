import React, { useState } from 'react';
import styled from 'styled-components';
import PincodeInput from './components/PincodeInput';
import PincodeDisplay from './components/PincodeDisplay';
import usePincode from './hooks/usePincode';

// Wrapper component to center the content
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  padding: 20px;
  background-color: #f7f8fa;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`;

const App: React.FC = () => {
  const [pincode, setPincode] = useState('');
  const { data, loading, error } = usePincode(pincode);

  const handleSearch = (pincode: string) => {
    setPincode(pincode);
  };

  return (
    <AppContainer>
      <Title>Pincode Fetcher</Title>
      <PincodeInput onSearch={handleSearch} />
      <PincodeDisplay data={data?.PostOffice || []} error={error} loading={loading} />
    </AppContainer>
  );
};

export default App;
