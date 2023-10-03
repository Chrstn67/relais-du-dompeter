"use client";

import { Link, Image } from "next/link";

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./page.scss";

const Accueil = () => {
  return (
    <>
      <section className="home">
        <div>
          <h3>Bienvenue !</h3>
          <p>
            Je vous invite à découvrir l&#39;Alsace dans toute sa splendeur. Au
            fil des quatre saisons, l&#39;une des plus belles régions de France
            vous réservera d&#39;innombrables souvenirs.
          </p>
          <p>
            Sans appréhention, même en hiver, laissez-vous surprendre par le
            charme de nos villages colorés, par la diversité de nos paysages et
            de notre culture.
          </p>
          <p>
            Accompagnées de vos amis, de votre famille et de vos enfants, venez
            découvrire et déguster nos trésors culinaires traditionnels,
            assortis de grands crus d&#39;Alsace.
          </p>
          <p>
            Venez faire un &#39;relais&#39; dans notre relais où je me ferais un
            plaisir de vous accueillir et de vous assurer des jours agréables.
          </p>
          <p>Mon souhait ? Que votre rêve Alsacien devienne une réalité !</p>
          <p className="signature">Marie-Jo Brucker</p>
        </div>
        <div className="picture-home">
          <picture>
            <img
              src="./images/cours-accueil.jpg"
              alt="Cour intérieure du Relais du Dompeter"
            ></img>
          </picture>
        </div>
      </section>
      <section className="services">
        <h2>Services</h2>
        <p>Joignez l&#39;utile à l&#39;agréable !</p>
        <ul>
          <li>Mariages</li>
          <li>Receptions</li>
          <li>Séminaires</li>
        </ul>
      </section>
    </>
  );
};

export default Accueil;
