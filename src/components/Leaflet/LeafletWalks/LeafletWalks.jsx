"use client";

import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { iconWalkings, townMarker, walks } from "./constantes"; // Ne pas inclure handleWalkSelect ici
import MarkerClusterGroup from "react-leaflet-cluster";
import "./LeafletWalks.scss";

const WalksMap = () => {
  const [mapCenter, setMapCenter] = useState([48.5613977, 7.5024652]);
  const [selectedWalk, setSelectedWalk] = useState(null);

  const getCustomIcon = (type) => {
    return new Icon({
      iconUrl: iconWalkings[type].iconUrl,
      iconSize: iconWalkings[type].iconSize,
    });
  };

  const handleWalkSelect = (walkName) => {
    setSelectedWalk(null);

    const selectedWalk = walks.find((walk) => walk.name === walkName);

    if (selectedWalk) {
      setSelectedWalk(selectedWalk);

      const startPoint = selectedWalk.coordinates[0];

      setMapCenter(startPoint);
    }
  };

  return (
    <section className="walks-map">
      <h2>Sentiers</h2>
      <div className="walk-selector">
        <select onChange={(e) => handleWalkSelect(e.target.value)}>
          <option value="">Sélectionnez un sentier</option>
          {walks.map((walk, index) => (
            <option key={index} value={walk.name}>
              {walk.name}
            </option>
          ))}
        </select>
      </div>
      <MapContainer
        center={mapCenter}
        zoom={13}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MarkerClusterGroup>
          {townMarker.map((marker, index) => (
            <Marker
              key={index}
              position={marker.coordinates}
              icon={getCustomIcon(marker.type)}
            >
              <Popup>{marker.name}</Popup>
            </Marker>
          ))}
          {selectedWalk && (
            <>
              <Polyline positions={selectedWalk.coordinates} color="red" />
              <Marker
                position={selectedWalk.coordinates[0]}
                icon={getCustomIcon(selectedWalk.startIcon)}
              >
                <Popup>Départ</Popup>
              </Marker>
              <Marker
                position={
                  selectedWalk.coordinates[selectedWalk.coordinates.length - 1]
                }
                icon={getCustomIcon(selectedWalk.endIcon)}
              >
                <Popup>Arrivée</Popup>
              </Marker>
              {selectedWalk.attractions.map((attraction, index) => (
                <Marker
                  key={index}
                  position={attraction.coordinates}
                  icon={getCustomIcon(attraction.icon)}
                >
                  <Popup>{attraction.name}</Popup>
                </Marker>
              ))}
            </>
          )}
        </MarkerClusterGroup>
      </MapContainer>
      {selectedWalk && (
        <section className="walk-details">
          <h2>{selectedWalk.name}</h2>
          <p>{selectedWalk.description}</p>

          <h4>Infos sur le sentier:</h4>
          <p>
            Dénivelé: <span>{selectedWalk.denivele}</span>
          </p>
          <div className="danger">
            <p>
              Effort:
              <img src={selectedWalk.infoSentier.effort} alt="Effort" />
            </p>
            <p>
              Technique:
              <img src={selectedWalk.infoSentier.technique} alt="Technique" />
            </p>
            <p>
              Risque:
              <img src={selectedWalk.infoSentier.risque} alt="Risque" />
            </p>
          </div>
        </section>
      )}
    </section>
  );
};

export default WalksMap;
