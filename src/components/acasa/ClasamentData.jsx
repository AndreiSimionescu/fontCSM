import icon_steaua from "../../icons/icon_steaua.svg";
import icon_craiova from "../../icons/icon_craiova.svg";
import icon_rapid from "../../icons/icon_rapid.svg";
import icon_stiinta_baia_mare from "../../icons/icon_stiinta_baia_mare.svg";
import icon_dinamo from "../../icons/icon_dinamo.svg";
import icon_arcada from "../../icons/icon_arcada.svg";
import icon_zalau from "../../icons/icon_zalau.svg";
import icon_unirea from "../../icons/icon_unirea.svg";
import icon_constanta from "../../icons/icon_constanta.svg";
import icon_suceava from "../../icons/icon_suceava.svg";
import icon_cluj from "../../icons/icon_cluj.svg";
import icon_stiinta_bucuresti from "../../icons/icon_stiinta_bucuresti.svg";
import axios from "axios";

const clasamentJsonObj = [];
const getDataClasament = () => {
  const ClasamentData2 = axios
    .get("http://localhost:3000/clasament")
    .then((response) => {
      let clasamentData = response.data;

      for (var i = 0; i < clasamentData.length; i++) {
        clasamentJsonObj.push(clasamentData[i]);
      }

      console.log(clasamentJsonObj);
      console.log(ClasamentData);
    })
    .catch((thrown) => {
      console.log("Eroare la obtinerea clasamentului " + thrown.message);
    });
};
getDataClasament();
export const ClasamentData = clasamentJsonObj;
// export const ClasamentData = [
//   {
//     icon: <img src={icon_steaua} alt="" />,
//     echipa: "STEAUA BUCUREȘTI",
//     meciuri: "3",
//     victorii: "3",
//     infrangeri: "0",
//     seturi: "9-2",
//     puncte: "8",
//   },
//   {
//     icon: <img src={icon_craiova} alt="" />,
//     echipa: "SCM CRAIOVA",
//     meciuri: "3",
//     victorii: "2",
//     infrangeri: "1",
//     seturi: "8-3",
//     puncte: "7",
//   },
//   {
//     icon: <img src={icon_rapid} alt="" />,
//     echipa: "RAPID BUCUREȘTI",
//     meciuri: "2",
//     victorii: "2",
//     infrangeri: "0",
//     seturi: "6-1",
//     puncte: "6",
//   },
//   {
//     icon: <img src={icon_dinamo} alt="" />,
//     echipa: "ȘTIINȚA BAIA MARE",
//     meciuri: "3",
//     victorii: "2",
//     infrangeri: "1",
//     seturi: "7-3",
//     puncte: "6",
//   },
//   {
//     icon: <img src={icon_arcada} alt="" />,
//     echipa: "DINAMO BUCUREȘTI",
//     meciuri: "3",
//     victorii: "2",
//     infrangeri: "1",
//     seturi: "8-5",
//     puncte: "6",
//   },
//   {
//     icon: <img src={icon_zalau} alt="" />,
//     echipa: "ARCADA GALAȚI",
//     meciuri: "2",
//     victorii: "2",
//     infrangeri: "0",
//     seturi: "6-3",
//     puncte: "5",
//   },
//   {
//     icon: <img src={icon_unirea} alt="" />,
//     echipa: "SCM ZALĂU",
//     meciuri: "3",
//     victorii: "1",
//     infrangeri: "2",
//     seturi: "6-7",
//     puncte: "4",
//   },
//   {
//     icon: <img src={icon_constanta} alt="" />,
//     echipa: "UNIREA DEJ",
//     meciuri: "3",
//     victorii: "1",
//     infrangeri: "2",
//     seturi: "4-6",
//     puncte: "3",
//   },
//   {
//     icon: <img src={icon_suceava} alt="" />,
//     echipa: "TOMIS CONSTANȚA",
//     meciuri: "3",
//     victorii: "1",
//     infrangeri: "2",
//     seturi: "3-7",
//     puncte: "3",
//   },
//   {
//     icon: <img src={icon_cluj} alt="" />,
//     echipa: "CSM SUCEAVA",
//     meciuri: "3",
//     victorii: "1",
//     infrangeri: "2",
//     seturi: "3-8",
//     puncte: "2",
//   },
//   {
//     icon: <img src={null} alt="" />,
//     echipa: "UNIVERSITATEA CLUJ",
//     meciuri: "3",
//     victorii: "0",
//     infrangeri: "3",
//     seturi: "2-9",
//     puncte: "1",
//   },
//   {
//     icon: <img src={icon_stiinta_bucuresti} alt="" />,
//     echipa: "ȘTIINȚA BUCUREȘTI",
//     meciuri: "3",
//     victorii: "0",
//     infrangeri: "3",
//     seturi: "1-9",
//     puncte: "0",
//   },
// ];
