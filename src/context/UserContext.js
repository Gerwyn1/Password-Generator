import { useState, createContext } from "react";
import { useMediaQuery } from "@mui/material";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const mobile = useMediaQuery("(max-width:425px)");
  const [included, setIncluded] = useState([]);
  const [charValue, setCharValue] = useState(0);

  const handleIncludedChange = (e) => {
    const index = included.indexOf(e.target.value);
    if (index === -1) setIncluded([...included, e.target.value]);
    else setIncluded(included.filter((include) => include !== e.target.value));
  };

  return (
    <UserContext.Provider
      value={{
        mobile,
        included,
        handleIncludedChange,
        charValue,
        setCharValue,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
