import { useState } from "react";
import "./App.css";
import Konyv from "./Konyv";
import Kosar from "./Kosar";
import KosarModell from "./modell/kosarModell";

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

function App() {
  /*state - reprezentálják az oldal állapotát
   * és befrissítik az oldal vonatkozó részét
   */
  const [db, setDb] = useState(0);
  const [osszAr, setOsszar] = useState(0);
  const [kosaram, setKosaram] = useState([]);

  //KosarModell osztály példányosítása
  const kosarModell = new KosarModell(kosaram);
  function kosarKezeles(adat) {
    /*Számoljuk meg, hány könyvet tettünk a kosárba */
    setDb(db + 1);
    /*összár */
    setOsszar(osszAr + adat.ar);
    kosarModell.setKosar(adat);
    setKosaram(kosarModell.getKosar());
    console.log(kosaram);
  }
  function novel(adat) {
    console.log(adat);
    //itt kell példányosítani a modell megfelelő tagfüggvényét
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Könyváruház</h1>
      </header>
      <section>
        <p>A Könyvek darabszáma: {db}</p>
        <p>A Könyvek összára: {osszAr}</p>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Szerző</th>
              <th>Cím</th>
              <th>Ár</th>
              <th>Db</th>
            </tr>
          </thead>
          <tbody>
            {kosaram.map((elem, index) => {
            return (
              <Kosar kosar={elem} key={index} novel={novel} />
            );
            })}
          </tbody>
        </table>
      </section>
      <article>
        {konyvTomb.map((konyv, index) => {
          return (
            <Konyv konyvObj={konyv} key={index} kosarKezeles={kosarKezeles} />
          );
        })}
      </article>
      <footer>
        <p>saját név</p>
      </footer>
    </div>
  );
}

export default App;
