import React, { useState, useEffect } from "react";
import "../styles/window.css";
import Search from "./Search";
import Filter from "./Filter";
import Countries from "./Countries";
import { useLoading } from "../hooks/useLoading";
import { SpinnerCircular } from "spinners-react";

const initialCountries = {
  all: [],
  result: [],
  searched: [],
};

function Window() {
  const [countries, setSelectedCountries] = useState(initialCountries);
  const [inputValue, setInputValue] = useState({ input: "" });

  const { loading, setLoading } = useLoading();

  const searchIn = (countries, phrase) => {
    return countries.filter((country) =>
      country.name.toLowerCase().startsWith(phrase.toLowerCase()) ? country : ""
    );
  };

  const handleInput = (e) => {
    setInputValue({ ...inputValue, input: e.target.value });

    const searchCountries = searchIn(countries.result, e.target.value);

    setSelectedCountries({ ...countries, searched: searchCountries });
  };

  const handleChange = async (e) => {
    if (e.target.value === "All") {
      const searchCountries = searchIn(countries.all, inputValue.input);
      setSelectedCountries({
        ...countries,
        result: countries.all,
        searched: searchCountries,
      });
      return;
    }
    setLoading(true);
    const regionCountries = await (
      await fetch(`https://restcountries.com/v3.1/region/${e.target.value}`)
    ).json();

    const infoRegionCountries = regionCountries.map((country) => ({
      flag: country.flags.png,
      name: country.name.common,
      population: country.population,
      region: country.region,
      capital: country.capital,
    }));

    const searchCountries = searchIn(infoRegionCountries, inputValue.input);

    setSelectedCountries({
      ...countries,
      result: infoRegionCountries,
      searched: searchCountries,
    });
    setLoading(false);
  };

  useEffect(() => {
    const dataFetch = async () => {
      setLoading(true);
      const countries = await (
        await fetch("https://restcountries.com/v3.1/all")
      ).json();

      const infoCountries = countries.map((country) => ({
        flag: country.flags.png,
        name: country.name.common,
        population: country.population,
        region: country.region,
        capital: country.capital,
      }));

      setSelectedCountries({
        ...countries,
        all: infoCountries,
        result: infoCountries,
        searched: infoCountries,
      });
      setLoading(false);
    };

    dataFetch();
  }, [setLoading]);

  return (
    <div className="window-countries window-countries-dark">
      <Search handleInput={handleInput} />
      <Filter handleChange={handleChange} />
      {!loading ? (
        <Countries countries={countries.searched} />
      ) : (
        <SpinnerCircular />
      )}
    </div>
  );
}

export default Window;
