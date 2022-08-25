import React, { useState, useEffect } from "react";

export const LoadingContext = React.createContext();

export function LoadingProvider({ children }) {
  const [loading, setLoding] = useState(false);

  useEffect(() => {
    setLoding(true);
    setTimeout(() => {
      setLoding(false);
    }, 6000);
  }, []);

  return (
    <LoadingContext.Provider value={loading}>
      {loading ? (
        <div className="three-body">
          <div className="three-body__dot"></div>
          <div className="three-body__dot"></div>
          <div className="three-body__dot"></div>
        </div>
      ) : (
        children
      )}
    </LoadingContext.Provider>
  );
}
