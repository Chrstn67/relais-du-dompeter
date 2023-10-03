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
import { FaHiking } from "react-icons/fa";

import "./LeafletWalks.scss";

const WalksMap = () => {
  const [mapCenter, setMapCenter] = useState([48.5613977, 7.5024652]);

  const townMarker = [
    {
      name: "Avolsheim",
      coordinates: [48.5613977, 7.5024652],
      type: "Hotel",
      description: "Votre pied-à-terre",
    },
    // Ajoutez d'autres marqueurs de ville si nécessaire
  ];

  const walks = [
    {
      name: "Sentier des Casemates",
      type: "Rando",
      coordinates: [
        [48.57155275318671, 7.483991862648036],
        [48.57176652005406, 7.483060984197014],
        [48.57170757787915, 7.482757802201945],
        [48.57156580274495, 7.482497468270313],
        [48.57143929951462, 7.482315956302696],
        [48.57124760072982, 7.481478049678612],
        [48.5708545888125, 7.479903491311042],
        [48.57075604487563, 7.479444306011978],
        [48.57051029967371, 7.478810129744717],
        [48.57019330030835, 7.4779804450111],
        [48.56978564378812, 7.477364075515958],
        [48.5694143498391, 7.477002836512288],
        [48.56922898962761, 7.476676408099568],
        [48.56909421250776, 7.476346102115883],
        [48.56875857813595, 7.475963966180168],
        [48.56852742073573, 7.475635250344917],
        [48.56831293599919, 7.475292469089436],
        [48.568168580668, 7.474984425325859],
        [48.56798386109094, 7.474833476170664],
        [48.56773251576335, 7.474687517634166],
        [48.56748459191669, 7.47454596990357],
        [48.56726512442199, 7.474484092827387],
        [48.56710446924176, 7.474277872249973],
        [48.56683744300971, 7.473629631075573],
        [48.56671394350033, 7.473040383717906],
        [48.56664384274981, 7.472606061903773],
        [48.56641478720442, 7.472072666593432],
        [48.56616577390774, 7.471540244814947],
        [48.5659101147691, 7.470904132421527],
        [48.56561502282374, 7.470254184572626],
        [48.56543142681492, 7.469668286112638],
        [48.56500509952723, 7.469352550448964],
        [48.56462522071134, 7.468840994578181],
        [48.56426650636475, 7.468201619074939],
        [48.56392871821222, 7.467559590991062],
        [48.56351845700026, 7.466759821006084],
        [48.56327736005116, 7.466057712441496],
        [48.56279622330286, 7.465392497878282],
        [48.56263973848787, 7.46513890889579],
        [48.56271300835456, 7.464965009028623],
        [48.56249377786051, 7.464380458226481],
        [48.56219048536324, 7.463906744509707],
        [48.56180168468691, 7.463210818702805],
        [48.56160343432443, 7.462531322896064],
        [48.56135238326183, 7.461851626189726],
        [48.56139502164891, 7.461394245870667],
        [48.56140449386372, 7.461108374033325],
        [48.56103599493831, 7.460836530221244],
        [48.56068052437436, 7.460584155922225],
        [48.56042055870351, 7.46009613331448],
        [48.56014405731673, 7.459677372691981],
        [48.55994792005793, 7.459367386960858],
        [48.55953833838717, 7.459023188124685],
        [48.55502230644851, 7.459808934740916],
        [48.55448993478678, 7.46049433873144],
        [48.55388337576274, 7.461298304454616],
        [48.55333721909565, 7.462045079670581],
        [48.55293855735919, 7.462751532036447],
        [48.55244817453613, 7.463283709833917],
        [48.55209939007483, 7.463420005566038],
        [48.55197466827122, 7.463498021897552],
        [48.55200074512064, 7.463992449493418],
        [48.55207227056182, 7.464881527196816],
        [48.55218235513397, 7.465642336944079],
        [48.55293725748922, 7.466439146872997],
        [48.55399234440106, 7.467849714916806],
        [48.55465049703017, 7.468890926205834],
        [48.55587261915498, 7.470040890176501],
        [48.55659592820074, 7.470472439401656],
        [48.55799215441185, 7.471298307026544],
        [48.55933470611703, 7.472196000582134],
        [48.5604904005583, 7.47342516086473],
        [48.56089147320108, 7.474179503080983],
        [48.56136442325067, 7.474824616351865],
        [48.5617589073846, 7.475247510809158],
        [48.56231606817204, 7.475702063528202],
        [48.5627287289032, 7.476117908152517],
        [48.563059524789, 7.476480839325692],
        [48.56355643531388, 7.476898607786378],
        [48.56406753129372, 7.477210029288404],
        [48.56506332234899, 7.478096670528711],
        [48.56607057772083, 7.478911357127334],
        [48.5668430649311, 7.479629097333483],
        [48.5677662406147, 7.480391928963126],
        [48.568232224807, 7.48098042479695],
        [48.56856988669278, 7.481523636302947],
        [48.56879038263767, 7.482166060935898],
        [48.56887330734465, 7.483040216375132],
        [48.56912692983618, 7.483307848281289],
        [48.56995578366959, 7.484156931412713],
        [48.57061102529445, 7.484972056896124],
        [48.57116083961024, 7.484410550902583],
        [48.57155275318671, 7.483991862648036],
      ],
      description:
        "Suivez le sentier des Casemates, vestiges de la Première Guerre Mondiale",
      startIcon: "Start",
      endIcon: "End",
      attractions: [
        {
          name: "Point de vue sur le Kochersberg",
          coordinates: [48.570811, 7.479501],
          description:
            "Admirez la vue sur les villages et champs de la région du Kochersberg",
          icon: "Vue",
        },
        {
          name: "Fontaine du Kaltenbrunnen",
          coordinates: [48.552106, 7.463414],
          description:
            "Aire de pique-nique dans un endroit calme, entre champs et forêt",
          icon: "Pause",
        },
        // Ajoutez d'autres attractions le long du chemin
      ],
    },
  ];

  const [selectedWalk, setSelectedWalk] = useState(null);

  const handleWalkSelect = (walk) => {
    // Effacez la sélection précédente
    setSelectedWalk(null);

    // Mettez à jour la nouvelle sélection
    if (walk !== "null") {
      setSelectedWalk(walk);
    }
  };

  const iconWalkings = {
    Hotel: {
      iconUrl: "https://cdn-icons-png.flaticon.com/512/675/675942.png",
      iconSize: [38, 38],
    },
    Rando: {
      iconUrl: "https://cdn-icons-png.flaticon.com/512/805/805484.png",
      iconSize: [38, 38],
    },
    Start: {
      iconUrl: "https://cdn-icons-png.flaticon.com/512/495/495530.png",
      iconSize: [38, 38],
    },
    End: {
      iconUrl: "https://cdn-icons-png.flaticon.com/512/2553/2553280.png",
      iconSize: [38, 38],
    },
    Vue: {
      iconUrl: "https://cdn-icons-png.flaticon.com/512/9727/9727409.png",
      iconSize: [38, 38],
    },
    Pause: {
      iconUrl: "https://cdn-icons-png.flaticon.com/512/10807/10807091.png",
      iconSize: [38, 38],
    },
  };

  const getCustomIcon = (type) => {
    return new Icon({
      iconUrl: iconWalkings[type].iconUrl,
      iconSize: iconWalkings[type].iconSize,
    });
  };

  return (
    <section className="walks-map">
      <div className="walk-selector">
        <label>Sélectionnez un sentier : </label>
        <select onChange={(e) => handleWalkSelect(e.target.value)}>
          <option value="null">Sélectionnez un sentier</option>
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
        {townMarker.map((marker, index) => (
          <Marker
            key={index}
            position={marker.coordinates}
            icon={getCustomIcon(marker.type)}
          >
            <Popup>{marker.name}</Popup>
          </Marker>
        ))}
        {walks.map((walk, index) => (
          <Polyline
            key={index}
            positions={walk.coordinates}
            color={selectedWalk === walk ? "red" : "blue"}
            onClick={() => handleWalkClick(walk)}
          />
        ))}
        {walks.map((walk) => (
          <>
            <Marker
              position={walk.coordinates[0]} // Utilisez le premier point comme position du marqueur de départ
              icon={getCustomIcon(walk.startIcon)}
            >
              <Popup>Départ</Popup>
            </Marker>
            <Marker
              position={walk.coordinates[walk.coordinates.length - 1]} // Utilisez le dernier point comme position du marqueur d'arrivée
              icon={getCustomIcon(walk.endIcon)}
            >
              <Popup>Arrivée</Popup>
            </Marker>
            {walk.attractions.map((attraction, index) => (
              <Marker
                key={index}
                position={attraction.coordinates}
                icon={getCustomIcon(attraction.icon)}
              >
                <Popup>{attraction.name}</Popup>
              </Marker>
            ))}
          </>
        ))}
      </MapContainer>
      {selectedWalk && (
        <div className="walk-details">
          <h2>{selectedWalk.name}</h2>
          <p>{selectedWalk.description}</p>
        </div>
      )}
    </section>
  );
};

export default WalksMap;
