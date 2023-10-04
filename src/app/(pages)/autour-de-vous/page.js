import React from "react";
import LeafletTown from "../../../components/Leaflet/LeafletTown/LeafletTown";
import LeafletWalks from "../../../components/Leaflet/LeafletWalks/LeafletWalks";
import "./page.scss";

const Festivites = () => {
  const festivitesData = [
    {
      name: "Festival Bugatti",
      lieu: "Molsheim",
      date: "Du Vendredi au Dimanche, le 3ème week-end de Septembre",
      description:
        "Le Festival Bugatti attire chaque années des milliers de touristes et amateurs d'automobiles. Venez découvir l'histoire fabuleuse de ces voitures rares et exceptionnelles !",
      image: "images_festivites/festival_bugatti.jpg",
    },
    {
      name: "Carnaval de Strasbourg",
      date: "Février",
      description:
        "Le carnaval de Strasbourg est un événement coloré avec des défilés, des costumes spectaculaires et une ambiance festive. Joignez-vous à la fête !",
      image: "",
    },
    // Ajoutez d'autres festivités avec leurs informations
  ];

  return (
    <>
      <section className="intro-page">
        <h2>Autour de vous</h2>
        <p>
          Allez visiter ces endroits touristiques, historiques ou de loisirs !
          <br />
          Partez à la découverte des plaines alsaciennes et savourez vos pauses
          en dégustant nos spécialités régionales !
        </p>
      </section>
      <section>
        <LeafletTown />
        <LeafletWalks />
      </section>
      <section className="festivites">
        <h2>Festivités</h2>
        <p>
          Toute l'année est ponctuée de festivités que vous ne trouverez nulle
          part ailleurs !
          <br />
          Venez vous délecter du patrimoine culturel alsacien !
        </p>
        <div className="festivites-list">
          {festivitesData.map((festivite, index) => (
            <div key={index} className="festivite-item">
              <h3>{festivite.name}</h3>
              <p>
                <strong>Date :</strong> {festivite.date} -{" "}
                <strong>Lieu :</strong> {festivite.lieu}
              </p>
              <p>{festivite.description}</p>
              <img src={festivite.image} alt={festivite.name} />{" "}
              {/* Ajout de src et alt pour la balise img */}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Festivites;
