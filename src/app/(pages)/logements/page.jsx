"use client";

import React, { useState } from "react";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import "./page.scss";

const Logements = () => {
  // Tableau de données pour les logements
  const logementsData = [
    {
      id: 1,
      titre: "Logement 3",
      description: "Duplex 70m², pour 4 personnes",
      caracteristiquesGenerales: [
        "Coin repos 5 places",
        "Coin salon",
        "TV BBox, 180 chaînes + WIFI",
        "Salle d'eau",
        "Sanitaires indépendantes",
        "Climatisation: Oui",
      ],
      chambres: {
        nombreChambre: "2",
        chambre_1: [
          "2 lits jumeaux, 90cm/200cm",
          "1 lit individuel 90cm/200cm",
        ],
        chambre_2: ["1 lit double 160cm/200cm"],
      },
      accesHandicape: true,
      appareilsElectromenagers: [
        "Lave-linge",
        "Réfrigérateur",
        "Plaque Vitro, 4 feux",
        "Four",
        "Lave-vaisselle",
        "Micro-ondes",
        "Cafetière",
      ],
      autresInformations: [
        "Animaux autorisés: Non",
        "Fumeurs autorisés: Non",
        "Wifi: Gratuit",
        "Parking: Gratuit",
      ],
      photos: [
        "images_festivites/coxshow.jpg",
        "images_effort/denivele_1.png",
        "images_effort/denivele_2.png",
      ],
    },

    {
      id: 2,
      titre: "Logement 4",
      description: "Duplex 75m², pour 5 personnes",
      caracteristiquesGenerales: [
        "Coin repos 6 palces",
        "Coin salon",
        "Salle de bain",
        "Climatisation: Oui",
      ],
      chambres: {
        nombreChambre: "3",
        chambre_1: ["1 lit individuel 90cm/200cm"],
        chambre_2: ["2 lits jumeaux 90cm/200cm"],
        chambre_3: ["1 lit double 140cm/190cm"],
      },
      accesHandicape: true,
      appareilsElectromenagers: [
        "Lave-linge en commun",
        "Réfrigérateur",
        "Four",
        "Lave-vaisselle",
        "Micro-ondes",
        "Cafetière",
      ],
      autresInformations: [
        "Animaux autorisés: Non",
        "Fumeurs autorisés: Non",
        "Wifi: Gratuit",
        "Parking: Gratuit",
      ],
      photos: [
        "images_festivites/coxshow.jpg",
        "images_effort/denivele_1.png",
        "images_effort/denivele_2.png",
        // Ajoutez d'autres liens vers les photos ici...
      ],
    },
    {
      id: 3,
      titre: "Logement 5",
      description: "Duplex 75m², pour 5 personnes",
      caracteristiquesGenerales: [
        "Coin repos 8 palces",
        "Coin salon",
        "Salle de bain",
        "Climatisation: Oui",
      ],
      chambres: {
        nombreChambre: "1",
        chambre_1: ["1 lit individuel 90cm/190cm"],
        chambre_2: ["2 lits jumeaux 90cm/200cm"],
        chambre_3: ["1 lit double 140cm/190cm"],
      },
      accesHandicape: true,
      appareilsElectromenagers: [
        "Lave-linge",
        "Réfrigérateur",
        "Four",
        "Lave-vaisselle",
        "Micro-ondes",
        "Cafetière",
      ],
      autresInformations: [
        "Animaux autorisés: Non",
        "Fumeurs autorisés: Non",
        "Wifi: Gratuit",
        "Parking: Gratuit",
      ],
      photos: [
        "images_festivites/coxshow.jpg",
        "images_effort/denivele_1.png",
        "images_effort/denivele_2.png",
        // Ajoutez d'autres liens vers les photos ici...
      ],
    },
    {
      id: 4,
      titre: "Logement 6",
      description: "Suite 50m² avec terasse ouverte, pour 2/3 personnes",
      caracteristiquesGenerales: [
        "Coin repos 4 palces",
        "Coin salon",
        "Canapé-lit",
        "TV BBox, 180 chaînes + WIFI",
        "Salle de bain",
        "Climatisation: Oui",
      ],
      chambres: {
        nombreChambre: "1",
        chambre_1: ["1 lit double 160cm/190cm"],
      },
      accesHandicape: true,
      appareilsElectromenagers: [
        "Lave-linge en commun",
        "Réfrigérateur",
        "Plaque Vitro, 4 feux",
        "Four",
        "Micro-ondes",
        "Cafetière",
      ],
      autresInformations: [
        "Animaux autorisés: Non",
        "Fumeurs autorisés: Non",
        "Wifi: Gratuit",
        "Parking: Gratuit",
      ],
      photos: [
        "images_festivites/coxshow.jpg",
        "images_effort/denivele_1.png",
        "images_effort/denivele_2.png",
        // Ajoutez d'autres liens vers les photos ici...
      ],
    },
    {
      id: 5,
      titre: "Logement 7",
      description: "Suite 75m², pour 5 personnes",
      caracteristiquesGenerales: [
        "Coin repos 5 palces",
        "Coin salon",
        "Canapé-lit",
        "TV BBox, 180 chaînes + WIFI",
        "Salle de bain",
        "Climatisation: Oui",
      ],
      chambres: {
        nombreChambre: "3",
        chambre_1: ["1 lit double 160cm/200cm, 1 lit simple 90/190"],
        chambre_2: ["1 lit gigogne"],
        chambre_3: ["2 lits simples 90cm/190cm"],
      },
      accesHandicape: true,
      appareilsElectromenagers: [
        "Lave-linge en commun",
        "Réfrigérateur",
        "Plaque Vitro, 4 feux",
        "Four",
        "Micro-ondes",
        "Cafetière",
      ],
      autresInformations: [
        "Animaux autorisés: Non",
        "Fumeurs autorisés: Non",
        "Wifi: Gratuit",
        "Parking: Gratuit",
      ],
      photos: [
        "images_festivites/coxshow.jpg",
        "images_effort/denivele_1.png",
        "images_effort/denivele_2.png",
        // Ajoutez d'autres liens vers les photos ici...
      ],
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(logementsData.map(() => 0));

  const nextSlide = (logementIndex) => {
    setCurrentIndex((prevIndex) =>
      prevIndex.map((value, index) =>
        index === logementIndex
          ? (value + 1) % logementsData[index].photos.length
          : value
      )
    );
  };

  const prevSlide = (logementIndex) => {
    setCurrentIndex((prevIndex) =>
      prevIndex.map((value, index) =>
        index === logementIndex
          ? (value - 1 + logementsData[index].photos.length) %
            logementsData[index].photos.length
          : value
      )
    );
  };

  return (
    <>
      <section className="intro-page">
        <h2>Logements</h2>
        <p>
          Découvrez les logements proposés et réservez celui qui vous convient.
        </p>
      </section>

      <section className="logements-list">
        {logementsData.map((logement, logementIndex) => (
          <section key={logement.id} className={`logement-${logement.id}`}>
            <h2>{logement.titre}</h2>
            <p className="description-logement">{logement.description}</p>

            <div className="carousel">
              {logement.photos.map((photo, photoIndex) => (
                <img
                  key={photoIndex}
                  src={photo}
                  alt={`Photo ${photoIndex + 1}`}
                  style={{
                    display:
                      photoIndex === currentIndex[logementIndex]
                        ? "block"
                        : "none",
                  }}
                />
              ))}
              <div className="buttons-carousel">
                <BsFillArrowLeftSquareFill
                  size={30}
                  type="button"
                  onClick={() => prevSlide(logementIndex)}
                />
                <BsFillArrowRightSquareFill
                  size={30}
                  type="button"
                  onClick={() => nextSlide(logementIndex)}
                />
              </div>
            </div>

            <div className="description">
              <ul>
                {logement.caracteristiquesGenerales.map(
                  (caracteristique, index) => (
                    <li key={index}>{caracteristique}</li>
                  )
                )}
              </ul>

              <p>
                {logement.accesHandicape
                  ? "Accès handicapé disponible."
                  : "Pas d'accès handicapé."}
              </p>

              <p className="electro">
                <span>Électroménagers:</span> <br />
                {logement.appareilsElectromenagers.join(", ")}
              </p>

              <div className="chambres">
                <p>Chambres:</p>
                <ul>
                  <li>
                    <span>Nombre de chambres:</span>{" "}
                    {logement.chambres.nombreChambre}
                  </li>
                  {Object.keys(logement.chambres).map((chambreKey) => {
                    if (chambreKey !== "nombreChambre") {
                      const chambreName = chambreKey.replace("_", " "); // Remplace _ par un espace
                      const chambreDisplayName =
                        chambreName.charAt(0).toUpperCase() +
                        chambreName.slice(1); // Met en majuscule la première lettre

                      // Divise la chaîne en éléments distincts en utilisant la virgule comme séparateur
                      const chambreItems =
                        logement.chambres[chambreKey][0].split(", ");

                      return (
                        <li key={chambreKey}>
                          <span>{chambreDisplayName}:</span> <br />
                          {chambreItems.map((item, index) => (
                            <React.Fragment key={index}>
                              {item}
                              {index < chambreItems.length - 1 && <br />}{" "}
                              {/* Ajoute un saut de ligne après chaque élément, sauf le dernier */}
                            </React.Fragment>
                          ))}
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </section>
    </>
  );
};

export default Logements;
