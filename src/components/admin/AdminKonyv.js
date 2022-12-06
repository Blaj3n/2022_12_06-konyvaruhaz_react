import "./AdminKonyv.css";

function AdminKonyv(props) {

  function szerkesztesKezeles() {
    console.log(props.konyvObj);
    //App js kosárkezelésének hívása
    //props.kosarKezeles(props.konyvObj);
  }

  function torlesKezeles() {
    console.log(props.konyvObj);
    //App js kosárkezelésének hívása
    //props.kosarKezeles(props.konyvObj);
  }

  return (
    <div className="konyvadmin">
      <h3>{props.konyvObj.szerzo}</h3>
      <p>{props.konyvObj.cim}</p>
      <p>{props.konyvObj.ar}</p>
      <p>{props.konyvObj.db}</p>
      {/*Könyv komponens kosárkezelésének hívása */}
      <button onClick={szerkesztesKezeles}>Szerkesztés</button>
      <button onClick={torlesKezeles}>Törlés</button>
    </div>
  );
}

export default AdminKonyv;
