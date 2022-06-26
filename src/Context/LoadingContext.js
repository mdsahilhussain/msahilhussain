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
        <div class="three-body">
          <div class="three-body__dot"></div>
          <div class="three-body__dot"></div>
          <div class="three-body__dot"></div>
        </div>
      ) : (
        children
      )}
    </LoadingContext.Provider>
  );
}
