import React, { useState, createContext } from "react";
import Router from "./routes";

export const UserContext = createContext();

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const contextValues = {
    isModalOpen: isModalOpen,
    setIsModalOpen: setIsModalOpen,
  };
  return (
    <>
      <div className="App">
        <UserContext.Provider value={contextValues}>
          <Router />
        </UserContext.Provider>
      </div>
    </>
  );
}

export default App;
