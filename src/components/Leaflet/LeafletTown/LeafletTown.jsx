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
import "./LeafletTown.scss";

const LeafletTown = () => {
  const [mapCenter, setMapCenter] = useState([48.5613977, 7.5024652]);

  const townMarker = [
    {
      name: "2, rue du Dompeter 67120 Avolsheim",
      coordinates: [48.5613977, 7.5024652],
      type: "Hotel",
      description: "Relais du Dompeter",
    },
    {
      name: "Molsheim",
      coordinates: [48.5419351, 7.4924679],
      type: "Ville",
      description: "https://www.molsheim.fr/",
    },
    {
      name: "Gare de Molsheim",
      coordinates: [48.5371514, 7.500266265771813],
      type: "Gare",
      description:
        "https://www.garesetconnexions.sncf/fr/gares-services/molsheim",
    },
    {
      name: "Saverne",
      coordinates: [48.7419909, 7.3625953],
      type: "Ville",
      description: "https://www.tourisme-saverne.fr/",
    },

    {
      name: "Gare de Saverne'",
      coordinates: [48.74456475, 7.362058356666009],
      type: "Gare",
      description:
        "https://www.garesetconnexions.sncf/fr/gares-services/saverne",
    },

    {
      name: "Obernai",
      coordinates: [48.4623358, 7.4817123],
      type: "Ville",
      description: "https://www.obernai.fr/",
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
      coordinates: [48.584614, 7.7507127],
      type: "Ville",
      description: "",
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
    {
      name: "Gérardmer",
      coordinates: [48.0705772, 6.8776965],
      type: "Ville",
      description: "https://www.mairie-gerardmer.fr/",
    },
    {
      name: "Colmar",
      coordinates: [48.0777517, 7.3579641],
      type: "Ville",
      description: "https://www.colmar.fr/",
    },

    {
      name: "Gare de Colmar",
      coordinates: [48.0728844, 7.3475876],
      type: "Gare",
      description:
        "https://www.garesetconnexions.sncf/fr/gares-services/colmar",
    },

    {
      name: "Mulhouse",
      coordinates: [47.7467233, 7.3389937],
      type: "Ville",
      description: "https://www.mulhouse.fr/",
    },

    {
      name: "Gare de Mulhouse",
      coordinates: [47.7424928, 7.342804],
      type: "Gare",
      description:
        "https://www.garesetconnexions.sncf/fr/gares-services/Mulhouse",
    },

    {
      name: "EuropaPark",
      coordinates: [48.26194085, 7.725143750507879],
      type: "ParcAttraction",
      description: "https://www.europapark.de/fr",
    },
    {
      name: "Cigoland",
      coordinates: [48.2573703, 7.418522951798208],
      type: "ParcAttraction",
      description: "https://www.cigoland.fr/",
    },
    {
      name: "Parc du Petit-Prince",
      coordinates: [47.861348199999995, 7.297447654409268],
      type: "ParcAttraction",
      description: "https://parcdupetitprince.com/",
    },
    {
      name: "Fraispertuis-City",
      coordinates: [48.323988, 6.728738672736887],
      type: "ParcAttraction",
      description: "https://www.fraispertuis-city.fr/dans-le-parc/santiags/",
    },
    {
      name: "Parc de Sainte-Croix",
      coordinates: [48.7733576, 6.899519698840797],
      type: "ParcAnimalier",
      description: "https://parcsaintecroix.com/",
    },
    {
      name: "Volerie des Aigles",
      coordinates: [48.25603085, 7.386826477191423],
      type: "ParcAnimalier",
      description: "https://www.voleriedesaigles.com/fr",
    },
    {
      name: "Montagne des Singes",
      coordinates: [48.2638654, 7.377559530022687],
      type: "ParcAnimalier",
      description: "https://www.montagnedessinges.com",
    },
    {
      name: "Musée National de l'Automobile",
      coordinates: [47.7612848, 7.327971551196445],
      type: "Musée",
      description: "https://www.musee-automobile.fr/",
    },
    {
      name: "Cité du Train",
      coordinates: [47.7500026, 7.2938678],
      type: "Musée",
      description: "https://www.citedutrain.com/",
    },
    {
      name: "Écomusée d'Alsace",
      coordinates: [47.85306625, 7.2871333354354615],
      type: "Musée",
      description: "https://www.ecomusee.alsace/",
    },
    {
      name: "Le Vaisseau",
      coordinates: [48.5729916, 7.772170058426482],
      type: "Musée",
      description: "https://www.levaisseau.com/",
    },
    {
      name: "Fort de Mutzig",
      coordinates: [48.5586972, 7.4571909],
      type: "Musée",
      description:
        "http://www.fort-mutzig.eu/v_2022/accueil_2022.php?langue=fr#",
    },
    {
      name: "Haut-Koenigsbourg",
      coordinates: [48.249489800000006, 7.34429620253195],
      type: "Château",
      description: "https://www.haut-koenigsbourg.fr/fr/",
    },
    {
      name: "Haut-Barr",
      coordinates: [48.7245034, 7.3379666],
      type: "Château",
      description:
        "https://www.tourisme-saverne.fr/a-voir-a-faire/visites/culture-et-patrimoine/",
    },
    {
      name: "Château de Kintzheim",
      coordinates: [48.2561092, 7.3863759041866],
      type: "Château",
      description:
        "https://www.chateauxfortsalsace.com/fr/chateau/chateau-de-kintzheim-volerie/",
    },
    {
      name: "Mont Sainte-Odile",
      coordinates: [48.437458, 7.4044908],
      type: "Château",
      description: "https://www.mont-sainte-odile.com/",
    },
    {
      name: "Camp de concentration du Struthof",
      coordinates: [48.4555839, 7.2484408],
      type: "Mémorial",
      description: "https://www.struthof.fr/",
    },
    {
      name: "Mémorial Alsace-Moselle",
      coordinates: [48.487058700000006, 7.221747622204193],
      type: "Mémorial",
      description: "https://www.memorial-alsace-moselle.com/",
    },
    {
      name: "Zum Loejelgucker",
      coordinates: [48.5945119, 7.4666984],
      type: "Resto",
      description: "https://aubergedetraenheim.com/",
    },
    {
      name: "Auberge de la Bruche",
      coordinates: [48.5616128, 7.5305405],
      type: "Resto",
      description:
        "https://www.auberge-bruche.com/fr/restaurant-auberge-bruche-cuisine-gastronomique",
    },
    {
      name: "Stade de la Meinau (Racing Club de Strasbourg Alsace)",
      coordinates: [48.5600477, 7.755125193344087],
      type: "Sport",
      description: "https://www.rcstrasbourgalsace.fr/",
    },
    {
      name: "Sentier des Casemates",
      coordinates: [48.571529, 7.484089],
      type: "Rando",
      description:
        "https://www.soultz-les-bains.fr/decouvrir/sentier-casemates.htm",
    },
  ];

  const iconMappings = {
    Hotel: {
      iconUrl: "https://cdn-icons-png.flaticon.com/512/675/675942.png",
      iconSize: [38, 38],
    },
    Ville: {
      iconUrl: "https://cdn-icons-png.flaticon.com/512/6503/6503066.png",
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
    ParcAttraction: {
      iconUrl: "https://cdn-icons-png.flaticon.com/512/7619/7619474.png",
      iconSize: [38, 38],
    },

    ParcAnimalier: {
      iconUrl: "https://cdn-icons-png.flaticon.com/512/3905/3905364.png",
      iconSize: [38, 38],
    },
    Musée: {
      iconUrl: "https://cdn-icons-png.flaticon.com/512/3936/3936783.png",
      iconSize: [38, 38],
    },
    Château: {
      iconUrl: "https://cdn-icons-png.flaticon.com/512/7551/7551289.png",
      iconSize: [38, 38],
    },
    Mémorial: {
      iconUrl: "https://cdn-icons-png.flaticon.com/512/3928/3928370.png",
      iconSize: [38, 38],
    },
    Resto: {
      iconUrl: "https://cdn-icons-png.flaticon.com/512/5766/5766813.png",
      iconSize: [38, 38],
    },
    Sport: {
      iconUrl: "https://cdn-icons-png.flaticon.com/512/147/147215.png",
      iconSize: [38, 38],
    },
    Rando: {
      iconUrl: "https://cdn-icons-png.flaticon.com/512/566/566499.png",
      iconSize: [38, 38],
    },
  };

  const getCustomIcon = (type) => {
    return new Icon(iconMappings[type] || iconMappings.Hotel);
  };

  return (
    <>
      <section className="info-carte">
        <h2>À visiter</h2>
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
                  <a
                    href={city.description}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visiter le site
                  </a>
                </Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>
        </MapContainer>
      </section>
    </>
  );
};

export default LeafletTown;
