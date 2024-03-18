import React, { useContext } from "react";
import { DetailContext } from "../components/MainWindow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "../styles/back.css";

function Back() {
  const { setIsDetail } = useContext(DetailContext);

  return (
    <div
      className="back"
      onClick={() => {
        setIsDetail({ status: false, type: {} });
      }}
    >
      <FontAwesomeIcon icon={faArrowLeft} />
      Back
    </div>
  );
}

export default Back;
