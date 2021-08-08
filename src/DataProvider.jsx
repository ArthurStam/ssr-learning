import React, { useState } from 'react'

export const DataProviderContext = React.createContext({});

export const DataProvider = ({ children, initialData }) => {
  const [data, setData] = useState(initialData);

  const updateData = (updates) => {
    setData({ ...data, ...updates  });
  }

  return (
    <DataProviderContext.Provider value={{ ...data, updateData }}>
      {children}
    </DataProviderContext.Provider>
  );
}
