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
import MarkerClusterGroup from "react-leaflet-cluster";
import "./LeafletInfos.scss";

const LeafletInfo = () => {
  const [mapCenter, setMapCenter] = useState([48.5613977, 7.5024652]);

  const townMarker = [
    {
      name: "Avolsheim",
      coordinates: [48.5613977, 7.5024652],
      type: "Hotel",
      description: "Relais du Dompeter",
    },
    {
      name: "Marché de Molsheim",
      coordinates: [48.541851199999996, 7.492327559738713],
      type: "Marché",
      description: "Lundi matin",
    },
    {
      name: "Gare de Molsheim",
      coordinates: [48.5371514, 7.500266265771813],
      type: "Gare",
      description:
        "https://www.garesetconnexions.sncf/fr/gares-services/molsheim",
    },
    {
      name: "Cora Dorlisheim",
      coordinates: [48.527280149999996, 7.495603630372565],
      type: "Surface",
      description: "https://www.cora.fr/magasins/dorlisheim-m-91",
    },
    {
      name: "Super U Molsheim",
      coordinates: [48.541809, 7.502510039779681],
      type: "Surface",
      description: "https://www.coursesu.com/f-superu-molsheim-informations",
    },
    {
      name: "Recharge électrique",
      coordinates: [48.52739975, 7.4973111434186475],
      type: "Electric",
      description: "",
    },

    {
      name: "Station-sercice, Cora Dorlisheim",
      coordinates: [48.525841, 7.493919],
      type: "Fuel",
      description: "",
    },
    {
      name: "Station-sercice, Super U Molsheim",
      coordinates: [48.54145, 7.504277],
      type: "Fuel",
      description: "",
    },
    {
      name: "Marché de Saverne",
      coordinates: [48.74199265, 7.362353577235925],
      type: "Marché",
      description: "Jeudi matin",
    },

    {
      name: "Gare de Saverne'",
      coordinates: [48.74456475, 7.362058356666009],
      type: "Gare",
      description:
        "https://www.garesetconnexions.sncf/fr/gares-services/saverne",
    },

    {
      name: "Marché d'Obernai",
      coordinates: [48.462212199999996, 7.482380674397319],
      type: "Marché",
      description: "Jeudi matin",
    },
    {
      name: "E.Leclerc, Obernai",
      coordinates: [48.4689326, 7.496016528032877],
      type: "Surface",
      description: "https://www.e.leclerc/mag/e-leclerc-obernai",
    },
    {
      name: "Sation-service E.Leclerc, Obernai",
      coordinates: [48.46745745, 7.495896296925903],
      type: "Fuel",
      description: "",
    },
    {
      name: "Gare d'Obernai",
      coordinates: [48.4621977, 7.4888608],
      type: "Gare",
      description:
        "https://www.garesetconnexions.sncf/fr/gares-services/obernai",
    },
    {
      name: "Strasbourg",
      coordinates: [48.585184350000006, 7.7427717555242035],
      type: "Marché",
      description: "Lundi de 7.00 à 19.00",
    },
    {
      name: "Gare de Strasbourg",
      coordinates: [48.5852933, 7.7339249],
      type: "Gare",
      description:
        "https://www.garesetconnexions.sncf/fr/gares-services/strasbourg",
    },
    {
      name: "Aéroport de Strasbourg",
      coordinates: [48.538870900000006, 7.625446281168612],
      type: "Aéroport",
      description: "https://www.strasbourg.aeroport.fr/",
    },
  ];

  const iconMappings = {
    Hotel: {
      iconUrl: "https://cdn-icons-png.flaticon.com/512/675/675942.png",
      iconSize: [38, 38],
    },
    Gare: {
      iconUrl: "https://cdn-icons-png.flaticon.com/512/4011/4011240.png",
      iconSize: [38, 38],
    },
    Aéroport: {
      iconUrl: "https://cdn-icons-png.flaticon.com/512/2169/2169353.png",
      iconSize: [38, 38],
    },
    Marché: {
      iconUrl: "https://cdn-icons-png.flaticon.com/512/862/862819.png",
      iconSize: [38, 38],
    },
    Surface: {
      iconUrl: "https://cdn-icons-png.flaticon.com/512/8422/8422894.png",
      iconSize: [38, 38],
    },
    Fuel: {
      iconUrl: "https://cdn-icons-png.flaticon.com/512/465/465039.png",
      iconSize: [38, 38],
    },
    Electric: {
      iconUrl: "https://cdn-icons-png.flaticon.com/512/9877/9877537.png",
      iconSize: [38, 38],
    },
  };

  const getCustomIcon = (type) => {
    return new Icon(iconMappings[type] || iconMappings.Hotel);
  };

  return (
    <>
      <section className="intro-page">
        <h2>Informations pratiques</h2>
        <p>Quelques adresses utiles autour du Relais du Dompeter</p>
      </section>
      <section className="info-carte">
        <MapContainer
          center={mapCenter}
          zoom={13}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={mapCenter} icon={getCustomIcon("Hotel")}>
            <Popup>Hôtel</Popup>
          </Marker>
          <MarkerClusterGroup>
            {townMarker.map((city, index) => (
              <Marker
                key={index}
                position={city.coordinates}
                icon={getCustomIcon(city.type)}
              >
                <Popup>
                  {city.name} <br />
                  {city.description.startsWith("http") ? (
                    <a
                      href={city.description}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visiter le site
                    </a>
                  ) : (
                    city.description
                  )}
                </Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>
        </MapContainer>
      </section>
    </>
  );
};

export default LeafletInfo;
