/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

const BASE_URL = process.env.EXPO_PUBLIC_API_URL;

const searchAudits = async () => {
  const response = await fetch(`${BASE_URL}/audits`);
  const audits = await response.json();
  return audits;
};

const addAudits = async (audit: any) => {
  const response = await fetch(`${BASE_URL}/audits`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(audit),
  });
  return response.json();
};

export { searchAudits, addAudits };
