import { useState, useEffect } from 'react';
import axios from 'axios';

interface PincodeData {
  PostOffice: Array<{
    Name: string;
    District: string;
    State: string;
  }>;
  Status: string;
}

const usePincode = (pincode: string) => {
  const [data, setData] = useState<PincodeData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (pincode.length === 6) {
      setLoading(true);
      axios.get(`https://api.postalpincode.in/pincode/${pincode}`)
        .then(response => {
          const result = response.data[0];
          if (result.Status === "Success") {
            setData(result);
            setError(null);
          } else {
            setError("Invalid Pincode");
            setData(null);
          }
        })
        .catch(() => setError("Error fetching data"))
        .finally(() => setLoading(false));
    }
  }, [pincode]);

  return { data, loading, error };
};

export default usePincode;
