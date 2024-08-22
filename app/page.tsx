"use client";

import React, { useState } from "react";
import Input from "./components/Input";
import CurrentCountry from "./components/CurrentCountry";
import { CountryModel } from "./models/getPaisResponseData.model";
import CountryDetails from "./components/CountryDetails";
import CountryMap from "./components/CountryMap";
// import WeatherDetails from "./component/WeatherDetails";
// import Current from "./component/Current";
// import WeekForecast from "./component/WeekForecast";

const Home = () => {
  const [data, setData] = useState<CountryModel[]>();
  const [country, setCountry] = useState("");
  const [error, setError] = useState("");

  const url = `https://restcountries.com/v3.1/name/${country}`;

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        const response = await fetch(url);
        if (response.status !== 200) {
          throw new Error();
        }
        const data = await response.json();
        setData(data);
        setCountry("");
        setError("");
      } catch (error) {
        setError("País no encontrado");
        setData(undefined);
      }
    }
  };

  let content;

  if (typeof data === "undefined" && error === "") {
    content = (
      <div>
        <h2> Bienvenido a paises y sus mapas!!! </h2>
      </div>
    );
  } else if (error !== "") {
    content = (
      <div>
        <p>Pais no encontrado</p>
        <p>Introduzca un país válido</p>
      </div>
    );
  } else {
    content = (
      <div className="flex flex-col items-center gap-y-4">
        {data?.map((country) => {
          return (
            <div className="bg-white/40 rounded-xl w-11/12">
              <div className="flex md:flex-row flex-col p-8 items-center justify-between gap-10">
                <CurrentCountry country={country} />
                <CountryMap country={country} />
                <p>
                  <b> </b>
                </p>
              </div>
              <div>
                <CountryDetails country={country} />
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="bg-cover bg-gradient-to-r from-blue-500 to-blue-300 h-fit">
      <div className="flex flex-col bg-white/25 w-full h-fit">
        {/* INPUT AND LOGO */}
        <div className="flex flex-col md:flex-row justify-between items-center p-12">
          <Input handleSearch={handleSearch} setCountry={setCountry} />
          <h1 className="mb-8 md:mb-0 order-1 text-white py-2 rounded-xl italic font-bold">
            Paises y Mapas.
          </h1>
        </div>
        {/* {data.current ? <div>{data.current.temp_f}</div> : null} */}
        {content}
      </div>
    </div>
  );
};

export default Home;
