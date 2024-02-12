/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

interface GeoLocation {
  // Define the properties of the GeoLocation object
  // For example: latitude, longitude, etc.
}

interface Auditor {
  email: string;
  id: number;
  name: string;
  phone: string;
  photo: string;
}

interface Branch {
  address: string;
  audits_count: number;
  business_id: number;
  city: string;
  country: string;
  created_at: string;
  geo_location: GeoLocation; // Use the GeoLocation interface here
  id: number;
  locality: string;
  photo_path: string | null;
  postal_code: string;
  updated_at: string;
}

interface Business {
  business_owner_id: number;
  category: string;
  created_at: string;
  id: number;
  licence_no: number;
  logo_path: string;
  name: string;
  updated_at: string;
}

interface Audit {
  assigned_to: number;
  auditor: Auditor;
  branch: Branch;
  branch_id: number;
  business: Business;
  business_id: number;
  comment: string | null;
  complaint: string | null;
  complaint_id: number | null;
  created_at: string;
  created_by: number;
  date: string;
  form_id: number;
  id: number;
  report_path: string | null;
  status: string;
  total_fine: number | null;
  updated_at: string;
  updated_by: number;
}

const Example: React.FC = () => {
  const [data, setData] = useState<Audit | null>(null);

  useEffect(() => {
    fetch('')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((responseData: { data: Audit }) => setData(responseData.data))
      .catch(error => console.error('Fetch error:', error));
  }, []);

  console.log(data);

  return (
    <View className='flex-1'>
      <Text>Example</Text>
      {data && (
        <>
          <Text>{data.auditor && data.auditor.name}</Text>
          <Text>{data.branch && data.branch.address}</Text>
          {/* Add more Text components for other data properties */}
        </>
      )}
    </View>
  );
};

export default Example;
