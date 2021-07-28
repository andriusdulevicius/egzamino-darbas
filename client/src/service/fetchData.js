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

const postNewUser = async (newObj) => {
  try {
    const res = await fetch(`${fetchApiBaseUrl}/addNewUser`, {
      method: 'POST',
      body: JSON.stringify(newObj),
      ...reqOptions,
    });
    await res.json();
  } catch (err) {
    console.log('Error occured: ', err);
  }
};

const deleteOneUser = async (id) => {
  try {
    const res = await fetch(`${fetchApiBaseUrl}/delete/${id}`, {
      method: 'DELETE',
      ...reqOptions,
    });
    await res.json();
  } catch (err) {
    console.log('Delete user failed.. ', err);
  }
};

const editOneUser = async (id, newBody) => {
  const res = await fetch(`${fetchApiBaseUrl}/edit/${id}`, {
    method: 'PUT',
    body: JSON.stringify(newBody),
    ...reqOptions,
  });
  await res.json();
};

export { getAllUsers, deleteOneUser, postNewUser, editOneUser };
