import React, { useContext } from "react";
import { DetailContext } from "../components/MainWindow";
import "../styles/detail-country.css";

function Info({ countryInfo }) {
  const { setIsDetail } = useContext(DetailContext);

  function mapValues(values) {
    return values.map((value, index) => {
      if (values.length - 1 === index) {
        return value;
      }
      return value + ", ";
    });
  }

  function mapObject(values) {
    return Object.values(values).map((value, index) => {
      if (value.name) return value.name + ", ";

      return mapObject(value);
    });
  }

  return (
    <div className="info-container">
      <img className="box-detail-image" src={countryInfo.flag} alt="" />
      <h3 className="box-detail-name">{countryInfo.name}</h3>
      <div className="info">
        Official Name:
        <div className="info-value">{countryInfo.officialName}</div>
      </div>
      <div className="info">
        Population:
        <div className="info-value">{countryInfo.population}</div>
      </div>
      <div className="info">
        Region:
        <div className="info-value">{countryInfo.region}</div>
      </div>
      <div className="info">
        Subregion:
        <div className="info-value">{countryInfo.subregion}</div>
      </div>
      <div className="info">
        Capital:
        <div className="info-value">{mapValues(countryInfo.capital)}</div>
      </div>
      <div className="info">
        Top Level Domain:
        <div className="info-value">{mapValues(countryInfo.tld)}</div>
      </div>
      <div className="info">
        Currencies:
        <div className="info-value">{mapObject(countryInfo.currencies)}</div>
      </div>
      <div className="info">
        Languages:
        <div className="info-value">
          {mapValues(Object.values(countryInfo.languages))}
        </div>
      </div>
      <div className="info border-info">
        Border Countries:
        <div className="border-box">
          {countryInfo.borderCountries !== undefined
            ? countryInfo.borderCountries.map((border) => (
                <button
                  className="back back-detail"
                  key={border}
                  onClick={() =>
                    setIsDetail({ status: true, type: { code: border } })
                  }
                >
                  {border}
                </button>
              ))
            : "No borders"}
        </div>
      </div>
    </div>
  );
}

export default Info;
