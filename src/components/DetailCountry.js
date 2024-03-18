import React, { useEffect, useState } from "react";
import "../styles/detail-country.css";
import "../styles/back.css";
import Info from "./Info";
import { useLoading } from "../hooks/useLoading";
import { SpinnerCircular } from "spinners-react";

function DetailCountry({ type }) {
  const [countryInfo, setCountryInfo] = useState(null);

  const { setLoading } = useLoading();

  useEffect(() => {
    const countryInfo = async () => {
      let data;
      setLoading(true);
      if ("name" in type) {
        data = await (
          await fetch(`https://restcountries.com/v3.1/name/${type.name}`)
        ).json();
      }
      if ("code" in type) {
        data = await (
          await fetch(`https://restcountries.com/v3.1/alpha/${type.code}`)
        ).json();
      }

      const country = data[0];

      const info = {
        flag: country.flags.png,
        name: country.name.common,
        officialName: country.name.official,
        population: country.population,
        region: country.region,
        subregion: country.subregion,
        capital: country.capital,
        tld: country.tld,
        currencies: country.currencies,
        languages: country.languages,
        borderCountries: country.borders,
      };

      setCountryInfo(info);
      setLoading(false);
    };

    countryInfo();
  }, [type, setLoading]);

  return (
    <div className="country-container">
      {countryInfo ? <Info countryInfo={countryInfo} /> : <SpinnerCircular />}
    </div>
  );
}

export default DetailCountry;
