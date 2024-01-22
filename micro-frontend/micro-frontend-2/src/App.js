import React, { useEffect, useState } from "react";
import "./index.css";
const App = () => {
  const [countries, setCountries] = useState([]);
  const [mapview, setmapview] = useState(false);
  useEffect(() => {
    // Fetch data from Rest Countries API
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);
  const handleMapView = () => {
    setmapview(true);
  };
  return (
    <div>
      {mapview ? (
        <iframe src="mfe3.vercel.app" frameborder="0"></iframe>
      ) : (
        <div className="bg-gray-100 h-fit w-4/5 ml-80 font-bold">
          <h1 className="text-3xl text-center">Country Information</h1>
          <a className="font-light ml-12" onClick={handleMapView} href="#">
            MapView➡️
          </a>
          <div className="relative overflow-x-auto p-10">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border border-collapse ">
              <thead className="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border border-collapse shadow-md">
                <tr className="border-y-2">
                  <th scope="col" className="px-6 py-3 font-bold text-lg">
                    Countries
                  </th>
                  <th scope="col" className="px-6 py-3 font-bold text-lg">
                    Capitals
                  </th>
                  <th scope="col" className="px-6 py-3 font-bold text-lg">
                    Continents
                  </th>
                  <th scope="col" className="px-6 py-3 font-bold text-lg">
                    Population
                  </th>
                  <th scope="col" className="px-6 py-3 font-bold text-lg">
                    Time Zones
                  </th>
                  <th scope="col" className="px-6 py-3 font-bold text-lg">
                    Maps
                  </th>
                </tr>
              </thead>
              <tbody>
                {countries.map((item, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-950 dark:border-gray-700"
                  >
                    <td className="px-6 py-4 font-normal">
                      {item?.name?.common}
                    </td>
                    <td className="px-6 py-4 font-normal">{item?.capital}</td>
                    <td className="px-6 py-4 font-normal">
                      {item?.continents}
                    </td>
                    <td className="px-6 py-4 font-normal">
                      {item?.population}
                    </td>
                    <td className="px-6 py-4 font-normal break-all max-w-xs whitespace-wrap">
                      {item?.timezones}
                    </td>
                    <td className="px-6 py-4 font-semibold hover:text-gray-950">
                      <a
                        href={item?.maps?.googleMaps}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Go To Maps
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
