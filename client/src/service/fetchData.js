const fetchApiBaseUrl = 'http://localhost:5000';
const reqOptions = {
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
};

const getAllUsers = async () => {
  try {
    const res = await fetch(`${fetchApiBaseUrl}/AllUsers`, reqOptions);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log('Get all users error: ', err);
  }
};

export { getAllUsers };
