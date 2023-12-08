import CalculatorContainer from './componentes/CalculatorContainer';
import Header from './componentes/Header';
import InfoBar from './componentes/InfoBar';
import Footer from './componentes/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <InfoBar
        title="Para você que é MEI ou quer se tornar MEI, calcule o valor da sua hora de trabalho:"
      />

      <CalculatorContainer />

      <InfoBar
        title="Calcule o valor a ser cobrado para um projeto:"
      />
      <Footer />
    </>
  );
}

export default App;
