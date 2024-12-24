import "./App.css";
import ButtonsContainer from "./buttons";

function App() {
  return (
    <>
      <div className="calculator-container">
        {/* TODO: Migrar a nuevo componente el visor de numeros  */}
        <div className="visor-numbers">
          <div className="container-accounts">
            <p className="numbers-accounts">13 x 50</p>
          </div>
          <div className="container-result">
            <p className="numbers-result">650</p>
          </div>
        </div>
        <ButtonsContainer />
      </div>
    </>
  );
}

export default App;
