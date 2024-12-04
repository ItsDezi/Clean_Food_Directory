import React, { createContext, useEffect, useState } from 'react';
import { template } from '../formDatatemplate';

// Create the context
export const FormContext = createContext();

// Create the provider component
export const FormProvider = ({ children }) => {
  const [data, setData] = useState(template.location);
  useEffect(() => {
    console.log("Updated State", data);
  }, [data]);  // Define a function to update the form data
  const updateData = (newData) => {
    setData((prevData) => ({ ...prevData, ...newData }));
    //console.log("Updated data in context:", data);
  };

  return (
    <FormContext.Provider value={{ data, updateData }}>
      {children}
    </FormContext.Provider>
  );
};
