//import { useState } from "react";
import "../App.css";
import AdminKonyv from '../components/admin/AdminKonyv'

const konyvTomb = [
  {
    id: 1,
    cim: "Malevil",
    szerzo: "Robert Merle",
    ar: 2111,
  },
  {
    id: 2,
    cim: "Védett férfiak",
    szerzo: "Robert Merle",
    ar: 1111,
  },
  {
    id: 3,
    cim: "Állati elmék",
    szerzo: "Robert Merle",
    ar: 3111,
  },
];

function Admin() {
  return (
    <div className="App">
      <article className="adminkonyv">Admin felület
      {konyvTomb.map((konyv, index) => {
        return (
          <AdminKonyv konyvObj={konyv} key={index} />
        );
      })}
      </article>
    </div>
  );
}

export default Admin;
