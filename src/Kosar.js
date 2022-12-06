function Kosar(props) {
  /*HF:   + gomb ami értéket növel
            - gomb ami értéket csökkent
            töröl gomb, ami törli az elemet a kosárból
            ha már van az adott elem a kosárban akkor növeld meg meg az adott könyv darabszámát
    */
   function novel(){
    props.novel(props.kosar)
   }
  return (
    <tr>
      <td>{props.kosar.szerzo}</td>
      <td>{props.kosar.cim}</td>
      <td>{props.kosar.ar}</td>
      <td>{props.kosar.db}</td>
      <td><button>+</button></td>
      <td><button>-</button></td>
      <td><button>Töröl</button></td>
    </tr>
  );
}

export default Kosar;
