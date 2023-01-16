import React from "react";
import "./Istorie.css";
import {Navbar} from "../navbar/Navbar";
import emblema from "../../icons/emblema.svg";
import banner from "../../images/banner-istorie.png";

export const Istorie = () => {
  return (
    <div className="pagina-istorie">
      <Navbar />
      <div className="istorie-head">
        <img src={banner} className="imagine-banner-istorie" alt="" />
      </div>
      <div className="istorie-titlu">
        <label htmlFor="" className="istorie-titlu-text">
          Istorie
        </label>
      </div>
      <div className="istorie-text">
        <p className="istorie-text-identare">
          În anul 1972 se înființează Clubul Sportiv Municipal SUCEAVA, inițial cu secțiile
          atletism, fotbal, rugby, volei. Ulterior in 1976, s-au adaugat secțiile de lupte
          greco-romane, hochei pe gheață, în 1978 patinaj viteză, în 1979 handbal, în 1981 înot, în
          1990 baseball și canotaj. Rezultatele bune nu au întârziat să apară. Chiar din primul an
          de la înființare, prin promovarea echipei de rugby în divizia A, dar și prin alți sportivi
          ai altor secții cum ar fi : atletism, lupte, greco-romane, fotbal, înot, canotaj și tir cu
          arcul.
        </p>
        <p className="istorie-text-identare">
          Beneficiind de o bază largă de selecție, de antrenori valoroși precum și de un management
          eficient, CSM Suceava ajunge unul din cele mai importante cluburi sportive din Romania
          cucerind prin sportivii săi peste 100 de medalii internaționale si nenumărate medalii
          naționale.
        </p>
      </div>
    </div>
  );
};
