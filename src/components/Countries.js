import React, { useContext } from "react";
import Country from "./Country";
import { DetailContext } from "../components/MainWindow";

import "../styles/countries.css";

function Countries({ countries }) {
  const { setIsDetail } = useContext(DetailContext);

  return (
    <div className="countries-box">
      {countries.map((country) => (
        <Country key={country.name} country={country} handleClick={setIsDetail} />
      ))}
    </div>
  );
}

export default Countries;
