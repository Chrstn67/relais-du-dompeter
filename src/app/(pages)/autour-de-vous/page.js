import React from "react";
import LeafletTown from "../../../components/Leaflet/LeafletTown/LeafletTown";
import LeafletWalks from "../../../components/Leaflet/LeafletWalks/LeafletWalks";
import "./page.scss";

const Festivites = () => {
  const festivitesData = [
    {
      name: "Cox Show",
      lieu: "Molsheim",
      date: "Mai",
      description:
        "Molsheim devient la capitale de la Cox ! Des centaines de celèbres 'Coccinelles' envahissent la ville le temps d'un week-end ! Venez les voir ! ",
      image: "images_festivites/coxshow.jpg",
      site: "https://www.facebook.com/CoxShow",
    },
    {
      name: "Grand Marché Annuel d'Obernai",
      lieu: "Centre-ville d'Obernai",
      date: "Le jeudi suivant l'Assomption",
      description:
        "Le Grand Marché Annuel d'Obernai est l'occasion de trouver de nombreuses promotions sur divers objets du quotidien et surtout faire le plein de souvenirs avec des produits locaux !",
      image: "images_festivites/marche_obernai.jpg",
      site: "https://www.obernai.fr/Fr/Economie/Commerce-artisanat/Marche-annuel.html",
    },
    {
      name: "Foire Européenne de Strasbourg",
      lieu: "Parc des Expositions de Strasbourg",
      date: "Deux semaines, début Septembre",
      description:
        "La Foire Européenne de Strasbourg accueille des centaines d'exposants venant présenter le fruit de leur talent ! Vibrez au rythme des animations proposées, et découvrez une grande variété de produits de consommation !",
      image: "images_festivites/foire_europeenne.jpg",
      site: "https://www.foireurop.com/",
    },
    {
      name: "Festival Bugatti",
      lieu: "Molsheim",
      date: "Du Vendredi au Dimanche, le 3ème week-end de Septembre",
      description:
        "Le Festival Bugatti attire chaque années des milliers de touristes et amateurs d'automobiles. Venez découvir l'histoire fabuleuse de ces voitures rares et exceptionnelles !",
      image: "images_festivites/festival_bugatti.jpg",
      site: "https://www.enthousiastes-bugatti-alsace.com/",
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
          Toute l&#39;année est ponctuée de festivités que vous ne trouverez
          nulle part ailleurs !
          <br />
          Venez vous délecter du patrimoine culturel alsacien !
        </p>
        <div className="festivites-list">
          {festivitesData.map((festivite, index) => (
            <div key={index} className="festivite-item">
              <h3>{festivite.name}</h3>
              <a
                href={festivite.site}
                target="_blank"
                rel="noopener noreferrer"
              >
                Plus d&#39;infos
              </a>
              <p>
                <strong>Date :</strong> {festivite.date}{" "}
              </p>
              <p>
                <strong>Lieu :</strong> {festivite.lieu}
              </p>
              <p>{festivite.description}</p>
              <img src={festivite.image} alt={festivite.name} />
              {/* Ajout de src et alt pour la balise img */}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Festivites;
