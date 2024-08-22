"use client";
import React, { useState } from "react";
import { CountryModel } from "../models/getPaisResponseData.model";
import GoogleMapComponent from "./GoogleMap";

const CountryMap = ({ country }: { country: CountryModel }) => {
  //   const [mapId, setmapId] = useState();
  //   fetch(country.maps.googleMaps)
  //     .then(async (response) => {
  //       const redirectUrl = (await response.json()).responseUrl;
  //       const mapId = redirectUrl.match(/map_id=([^&]+)/)[1];
  //       setmapId(mapId);
  //       console.log(mapId);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  if (country.maps.googleMaps) {
    return <GoogleMapComponent url={country.maps.googleMaps} />;
  } else {
    return (
      <h3 className="text-white bg-black/25 rounded-xl mt-1 p-2">
        No registra mapa
      </h3>
    );
  }

  //   if (mapId) {
  //     return (
  //       <div>
  //         <iframe
  //           src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=map_id:${mapId}`}
  //           width="600"
  //           height="450"
  //           style={{ border: 0 }}
  //           allowFullScreen
  //           loading="lazy"
  //         />
  //       </div>
  //     );
  //   }
};

export default CountryMap;
