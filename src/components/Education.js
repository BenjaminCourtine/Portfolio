import React from "react";

const Education = () => (
  <div className="row education">
    <div className="three columns header-col">
      <h1>
        <span>Etudes</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Lycée</h3>
          <p className="info">
            Economique et social
            <span>&bull;</span>
            <em className="date">2014-2017</em>
          </p>

          <p>
            J'ai réalisé mes années de Lycée au Lycée Saint Léon à Corbeil Essonnes de 2014 à 2017. 
            C'est à partir de la Première que j'ai découvert Sup'Internet (mon école actuelle) et le développement web.
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>Sup'Internet</h3>
          <p className="info">
            Bachelor - Manager de projet web, expertise web développement.
            <span>&bull;</span>
            <em className="date">2017-2020</em>
          </p>

          <p>
            Sup'Internet m'a très vite permis de mieux comprendre le web, mais surtout de pratiquer une grande variété de langage avec du HTML5/CSS3, Javascript, Php et d'autres  moins 
            en détails comme Python, Golang, AngularJs et NodeJs. <br/>
            De plus ayant étudier en autodidacte ReactJs j'ai quelques notions avec ce frameworks que j'affectionne beaucoup. <br/>
            La pédagogie de l'école basée sur la mise en situation autour de projets concrets seul, en binôme ou avec des équipes plus large (notamment avec la promotion des designers et des marketers de première année). Les intervenants sont tous chefs d'entreprise, dirigeants de startup, les cours sont très vivants et concrets. J'ai ainsi développé une réelle passion pour le développement.
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>Expérience professionnelle</h3>
          <p className="info">
            Stage - Front-end.
            <span>&bull;</span>
            <em className="date">Juillet 2018 - Octobre 2018</em>
          </p>

          <p>
            J'ai réalisé un stage front-end au sein de la startup Muzeek. <br />
            Durant ce stage j'ai travaillé sur une application SaaS ainsi qu'un plugin Première Pro, mes<br/>
            missions se portaient sur du HTML/CSS et principalement du Javascript. <br />
            Ce stage m'a permis de m'améliorer considérablement en Javascript et de confirmer mes intérêts pour ce langage.
          </p>
        </div>
      </div>

    </div>
  </div>
);

export default Education;
