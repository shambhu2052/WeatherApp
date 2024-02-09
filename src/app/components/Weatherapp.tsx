"use client";
import React, { useState, useEffect } from "react";

const icon = [
  {
    iconpath: "/../assets/clear.png",
  },
  {
    iconpath: "/../assets/cloud.png",
  },
  {
    iconpath: "/../assets/drizzle.png",
  },
  {
    iconpath: "/../assets/rain.png",
  },
  {
    iconpath: "/../assets/snow.png",
  },
];
const Weatherapp = () => {
  let api_key = "54d9a6bc5ff08c6d41348adda71fde21";
  const [cityfield, setCityfield] = useState("");
  const [data, setData] = useState<any>([]);
  const [wicon, setWicon] = useState(icon[0].iconpath);
  let api_url = `https://api.openweathermap.org/data/2.5/weather?q=${cityfield}&units=Metric&appid=${api_key}`;
  useEffect(() => {
    const getweatherapi = async () => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Nepal&units=Metric&appid=${api_key}`
      );
      const dataapi = await res.json();
      setData(dataapi);
    };
    getweatherapi();
  }, []);
  const search = async () => {
    const res = await fetch(api_url);
    const apidata = await res.json();
    setData(apidata);
    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setWicon(icon[0].iconpath);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setWicon(icon[1].iconpath);
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setWicon(icon[2].iconpath);
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setWicon(icon[2].iconpath);
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setWicon(icon[3].iconpath);
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setWicon(icon[3].iconpath);
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setWicon(icon[3].iconpath);
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      setWicon(icon[4].iconpath);
    } else {
      setWicon(icon[0].iconpath);
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      search();
    }
  };
  return (
    <div>
      <div className="max-w-[800px]  mx-auto h-[500px] mt-[55px] rounded-lg container ">
        <div className="flex justify-center gap-3 pt-14">
          <input
            type="text"
            className="cityfield w-[256px] md:w-[362px] h-[50px] bg-[#ebfffc] border-none outline-none rounded-[40px] pl-[29px] md:pl-[40px] text-[#626262] font-normal text-xl"
            placeholder="Search"
            onChange={(e) => setCityfield(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <div
            onClick={() => {
              search();
            }}
            className="flex justify-center items-center w-[50px] h-[50px] bg-[#ebfffc] rounded-[40px] cursor-pointer"
          >
            <img src="/../assets/search.png" alt="image of serch icons" />
          </div>
        </div>
        <div className="mt-[29px] flex justify-center">
          <img
            src={wicon}
            alt="image of weather"
            className="w-[100px] h-[100px]"
          />
        </div>
        <h2 className="text-center text-white text-2xl font-normal">
          {data?.main?.temp} degree celcius
        </h2>
        <h2 className="text-center text-white py-3  text-2xl font-normal">
          Country: {data?.name}
        </h2>
        <div className="data-container">
          <div className="element">
            <img src="/../assets/humidity.png" alt="icons" className="icon" />
            <div className="data">
              <h2 className="humidity-percent">{data?.main?.humidity}%</h2>
              <h3 className="text">Humidity</h3>
            </div>
          </div>
          <div className="element">
            <img src="/../assets/wind.png" alt="icons" className="icon" />
            <div className="data">
              <h2 className="humidity-percent">{data?.wind?.speed} km/h</h2>
              <h3 className="text">Wind Speed</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weatherapp;
