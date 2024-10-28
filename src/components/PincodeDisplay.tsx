import React from 'react';
import styled from 'styled-components';

interface PostOffice {
  Name: string;
  District: string;
  State: string;
}

interface PincodeDisplayProps {
  data: PostOffice[];
  error: string | null;
  loading: boolean;
}

const Container = styled.div`
  text-align: center;
  padding: 20px;
  max-width: 600px;
  margin: auto;
`;

const Loading = styled.div`
  font-size: 1.2em;
  color: #007bff;
`;

const Error = styled.div`
  color: red;
  font-size: 1.2em;
`;

const PincodeCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 10px 0;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;

  @media (min-width: 600px) {
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }
`;

const PincodeDisplay: React.FC<PincodeDisplayProps> = ({ data, error, loading }) => {
  if (loading) return <Loading>Loading...</Loading>;
  if (error) return <Error>{error}</Error>;

  return (
    <Container>
      {data.map((office, index) => (
        <PincodeCard key={index}>
          <div>
            <h4>{office.Name}</h4>
            <p>District: {office.District}</p>
          </div>
          <div>
            <p>State: {office.State}</p>
          </div>
        </PincodeCard>
      ))}
    </Container>
  );
};

export default PincodeDisplay;
