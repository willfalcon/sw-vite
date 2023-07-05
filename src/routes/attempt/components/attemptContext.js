import { createContext, useContext } from 'react';

export const AttemptContext = createContext();

export const useAttemptContext = () => useContext(AttemptContext);
