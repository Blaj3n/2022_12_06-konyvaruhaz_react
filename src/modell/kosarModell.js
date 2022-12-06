class KosarModell {
  #kosar = [];
  #db;
  #osszAr;
  constructor(kosaram) {
    this.#kosar = kosaram;
    this.#db = 0;
    this.#osszAr = 0;
  }
  getKosar() {
    return this.#kosar;
  }
  setKosar(adat) {
    //keresd meg, hogy van-e adat.id indexű elem (filter)
    let azonosElem = this.#kosar.findIndex((elem) => {
      return elem.id == adat.id;
    });
    //ha nincs, akkor
    //az adott indexű elem darabszámát kell megnövelni
    this.#kosar.push(adat);
  }
  getDb() {
    return this.#kosar.length;
  }
  getOsszar() {
    let ossz = 0;
    this.#kosar.forEach((elem) => {
      ossz += elem.ar;
    });
    this.#osszAr = ossz;
    return this.#kosar.length;
  }
}

export default KosarModell;
