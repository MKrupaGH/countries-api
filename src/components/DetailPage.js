import React from "react";
import Back from "./Back";
import DetailCountry from "./DetailCountry";
import "../styles/detail-page.css";

function DetailPage({ type }) {

  return (
    <div className="detail-page">
      <Back />
      <DetailCountry type={type} />
    </div>
  );
}

export default DetailPage;
