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
import MarkerClusterGroup from "react-leaflet-cluster";
// import "react-leaflet-markercluster/dist/styles.min.css";
import "./LeafletWalks.scss";

const WalksMap = () => {
  const [mapCenter, setMapCenter] = useState([48.5613977, 7.5024652]);
  const [selectedWalk, setSelectedWalk] = useState(null);

  const townMarker = [
    {
      name: "Avolsheim",
      coordinates: [48.5613977, 7.5024652],
      type: "Hotel",
      description: "Votre pied-à-terre",
    },
  ];

  const walks = [
    {
      name: "Sentier des Casemates",

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
        [48.56576719983694, 7.470603153982555],
        [48.56553897213812, 7.470431633595043],
        [48.56535559552089, 7.470208626194916],
        [48.5651665508316, 7.470053086567258],
        [48.56492846410934, 7.469898538273796],
        [48.56465647795851, 7.469741933574287],
        [48.56426679878207, 7.469486026292342],
        [48.56392980881548, 7.469225696576498],
        [48.56363163598667, 7.468915127082036],
        [48.56321603053252, 7.468312646841079],
        [48.56288948187579, 7.467735001680975],
        [48.5624195747238, 7.46697618029385],
        [48.56196193725157, 7.466240521580103],
        [48.56177420802611, 7.465699558178609],
        [48.56164255764525, 7.465108487568672],
        [48.56124856297363, 7.464723619573759],
        [48.56096995951214, 7.463890984204406],
        [48.56059877169866, 7.462824876463099],
        [48.56039085683434, 7.462287378937851],
        [48.56013301903712, 7.461739305905093],
        [48.55957068785364, 7.462590005551339],
        [48.55910485172032, 7.463036505339402],
        [48.55842808566346, 7.463820096996123],
        [48.55760624536948, 7.464334459710384],
        [48.5569185185218, 7.464404331809491],
        [48.55645890862279, 7.463753048730084],
        [48.5559360463546, 7.463211864520818],
        [48.5553287552416, 7.462649451048264],
        [48.55499108849325, 7.462547632510324],
        [48.55468615680977, 7.462078305937139],
        [48.55440164128589, 7.461372744596606],
        [48.55414029067452, 7.460863317488988],
        [48.55397420440688, 7.461029672657209],
        [48.553773365883, 7.461400930011008],
        [48.5534986334504, 7.461868606052942],
        [48.55311569336627, 7.462507491531223],
        [48.55244817453613, 7.463283709833917],
        [48.55209939007483, 7.463420005566038],
        [48.55197466827122, 7.463498021897552],
        [48.55200074512064, 7.463992449493418],
        [48.55207227056182, 7.464881527196816],
        [48.55218235513397, 7.465642336944079],
        [48.55293725748922, 7.466439146872997],
        [48.55399234440106, 7.467849714916806],
        [48.55465049703016, 7.468890926205834],
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
        "Parcourez 6 kilomètres sur le sentier des Casemates, où vous trouverez des vestiges de la Première Guerre Mondiale.",
      startIcon: "Start",
      endIcon: "End",
      denivele: "180 mètres",
      infoSentier: {
        effort: "images_effort/denivele_2.png",
        technique: "images_technique/technique_2.png",
        risque: "images_risque/risque_2.png",
      },

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
      ],
    },
  ];

  const handleWalkSelect = (walkName) => {
    setSelectedWalk(null);

    const selectedWalk = walks.find((walk) => walk.name === walkName);

    if (selectedWalk) {
      setSelectedWalk(selectedWalk);

      const startPoint = selectedWalk.coordinates[0];

      setMapCenter(startPoint);
    }
  };

  const iconWalkings = {
    Hotel: {
      iconUrl: "https://cdn-icons-png.flaticon.com/512/675/675942.png",
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
