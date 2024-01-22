import React, { useState } from "react";
import ReactMapGl from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const token =
  "pk.eyJ1IjoicHJhbmFsaS0xNSIsImEiOiJjbHE2NXZzajkwMTZ1MmpxcTQwMndmb3MxIn0.wLp1pz8Sdzo5ul5S7GtnGA";
console.log(token);

const App = () => {
  const [countryList, setcountryList] = useState(false);
  const [viewPort, setviewPort] = useState({
    latitude: 20.5937,
    longitude: 78.9629,
    zoom: 6,
  });
  const handleCountryList = () => {
    setcountryList(true);
  };
  return (
    <div>
      {countryList ? (
        <iframe src="mfe1-cdem.vercel.app" frameborder="0"></iframe>
      ) : (
        <div className="p-6 block h-screen w-4/5 ml-80 ">
          <h1 className="text-3xl text-center font-bold ">Map View</h1>
          <a className="font-light" onClick={handleCountryList} href="#">
            CountryList➡️
          </a>
          <ReactMapGl
            {...viewPort}
            mapboxAccessToken={token}
            width="100%"
            height="100%"
            transitionDuration="200"
            mapStyle="mapbox://styles/pranali-15/clq656hvd000k01pk5qvhd94m"
          ></ReactMapGl>
        </div>
      )}
    </div>
  );
};

export default App;
