import React from "react";
import "./page.scss";

const ConditionsGeneralesUtilisation = () => {
  return (
    <section className="cgu">
      <h1>Conditions Générales d&#39;Utilisation</h1>

      <h2>1. Acceptation des conditions</h2>
      <p>
        En utilisant ce site web, vous acceptez les présentes conditions
        générales d&#39;utilisation. Si vous n&#39;êtes pas d&#39;accord avec
        l&#39;une quelconque de ces conditions, veuillez ne pas utiliser ce
        site.
      </p>

      <h2>2. Utilisation du site</h2>
      <p>
        Vous devez avoir au moins 18 ans pour utiliser ce site de location de
        logement. Vous ne pouvez pas utiliser ce site à des fins illégales ou
        interdites par la loi.
      </p>

      {/* <h2>3. Inscription</h2>
      <p>
        Vous pouvez être tenu de vous inscrire sur le site pour accéder à
        certaines fonctionnalités ou services. Vous êtes responsable de la
        confidentialité de votre compte et de votre mot de passe.
      </p> */}

      <h2>3. Annonces et réservations</h2>
      <p>
        Les annonces sur ce site sont fournies par les utilisateurs. Nous ne
        pouvons pas garantir l&#39;exactitude des informations fournies. Lorsque
        vous effectuez une réservation, vous acceptez les conditions spécifiques
        de l&#39;annonce.
      </p>

      <h2>4. Politique de confidentialité</h2>
      <p>
        Votre utilisation de ce site est également régie par notre politique de
        confidentialité, que vous devez consulter pour comprendre comment nous
        collectons, utilisons et protégeons vos informations personnelles.
      </p>

      <h2>5. Modifications des conditions</h2>
      <p>
        Nous nous réservons le droit de modifier ces conditions générales
        d&#39;utilisation à tout moment. Les modifications seront publiées sur
        le site, et il vous incombe de les consulter régulièrement. En
        continuant à utiliser le site après de telles modifications, vous
        acceptez les conditions révisées.
      </p>

      <h2>6. Contact</h2>
      <p>
        Si vous avez des questions concernant ces conditions générales
        d&#39;utilisation, veuillez nous contacter à l&#39;adresse suivante :
        [adresse e-mail de contact].
      </p>
    </section>
  );
};

export default ConditionsGeneralesUtilisation;
