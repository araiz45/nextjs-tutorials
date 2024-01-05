"use client";
import React, {
  useContext,
  useState,
  createContext,
  PropsWithChildren,
} from "react";

interface objFetch {
  name: string;
  email: string;
  id: string;
  pic: string;
}

interface objFetchState {
  data: objFetch;
  setData(arg: objFetch): void;
}

const objContext = createContext<objFetchState | null>(null);
const useTheme = (): objFetchState => {
  const context = useContext(objContext);

  if (!context) {
    throw new Error("Please use ThemeProvider in parent component");
  }
  return context;
};

export const ThemeProvider = (props: PropsWithChildren) => {
  const [data, setData] = useState<objFetch | null>(null);
  return (
    <objContext.Provider value={{ data, setData }}>
      {props.children}
    </objContext.Provider>
  );
};

export default useTheme;
