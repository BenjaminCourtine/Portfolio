import React from "react";

const Work = () => (
  <div className="row work">
    <div className="three columns header-col">
      <h1>
        <span>Projets</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Responsive website</h3>
          <p className="info">
            <em className="date"></em>
          </p>

          <p>
            Ce projet consistait à reproduire un site à partir d'une maquette Photoshop,
            avec comme principal objectif un responsive parfait. 
            Pour ce projet j'ai eu besoin d'utiliser HTML5/CSS3 et aussi un peu de Javascript 
            afin de réaliser certaines intérations dans la page.
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>Pokédex</h3>
          <p className="info">
          </p>

          <p>
            L'objectif de ce projet était de reproduire un Pokédex fonctionnel. Pour réaliser ce projet 
            j'ai eu besoin d'utiliser HTML5/CSS3, Javascript pour récupérer les informations des pokémons (avec un fichier json) 
            en Ajax. J'ai également utilisé une API pokémon pour afficher les gif des pokémons.
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>Twitter</h3>
          <p className="info">
          </p>

          <p>
            Ce projet comme son nom l'indique était de reproduire twitter avec ses fonctionnalités principales, se créer un compte/se connecter, tweeter, retweeter, fav et follow.
            Pour ce projet j'ai eu besoin d'utiliser Php afin de gérer les données avec la base de données, Javascript pour gérer la création de tweet en Ajax mais aussi HTML5/CSS3 
            même si l'objectif de ce projet n'était pas d'avoir un design remaquable.
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>Testhé</h3>
          <p className="info">
          </p>

          <p>
            Ce projet était un projet de groupe avec les 3 spécialisation de Sup'Internet réunient (marketing, design et développement). Notre objectif était 
            de créer un site média rentable sur le thème que l'on souhaitait. Nous avons choisit de faire un site spécialisé sur le thé (d'où le nom testhé) avec comme contenue
            principal des revues de thé, articles et recettes. 
            Ce projet au sein duquel j'ai été chef de groupe m'a permis d'apprendre à travailler en groupe, et plus particulièrement en développement à gérer un github à plusieurs.
            C'est actuellement le projet le plus complet que j'ai réalisé même si ce dernier c'est pas encore totalement abouti.
          </p>
        </div>
      </div>
      <div className="row item">
        <div className="twelve columns">
          <h3>Super table</h3>
          <p className="info">
          </p>

          <p>
          L'objectif de ce projet était de réaliser un tableau aux fonctionnalités avancées. Le tableau est générer en javascript ainsi que ses fonctionnalités.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Work;
