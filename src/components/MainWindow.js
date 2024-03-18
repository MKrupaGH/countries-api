import React, { useState, createContext } from "react";
import "../styles/main-window.css";
import Header from "./Header";
import Window from "./Window";
import DetailPage from "./DetailPage";
import { LoadingProvider } from "../hooks/useLoading";

export const DetailContext = createContext();

function MainWindow() {
  const [isDetail, setIsDetail] = useState({
    status: false,
    type: {},
  });

  return (
    <div className="window">
      <Header />
      <LoadingProvider>
        <DetailContext.Provider value={{ setIsDetail }}>
          {!isDetail.status ? <Window /> : <DetailPage type={isDetail.type} />}
        </DetailContext.Provider>
      </LoadingProvider>
    </div>
  );
}

export default MainWindow;
