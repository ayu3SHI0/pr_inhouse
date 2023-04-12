import React, { createContext, useContext, useState } from 'react';

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState({ smartId: '', password: '' });

  const updateUser = (field, value) => {
    setUser(prevUser => ({
        ...prevUser,
        [field]: value
      }));
     };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}