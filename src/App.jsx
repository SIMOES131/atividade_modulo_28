import React, { useState } from 'react';
import Formulario from './components/Formulario';

function App() {
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = (altura, peso) => {
    if (altura && peso) {
      const alturaMetros = altura / 100; // Converter altura para metros
      const imcCalculado = (peso / (alturaMetros * alturaMetros)).toFixed(2); // Cálculo do IMC
      
      setImc(imcCalculado);
      definirClassificacao(imcCalculado);
    }
  };

  const definirClassificacao = (imc) => {
    if (imc < 18.5) {
      setClassificacao('Abaixo do peso');
    } else if (imc >= 18.5 && imc <= 24.9) {
      setClassificacao('Peso normal');
    } else if (imc >= 25 && imc <= 29.9) {
      setClassificacao('Sobrepeso');
    } else {
      setClassificacao('Obesidade');
    }
  };

  return (
    <div class="container">
      <div className="App">
      <h1>Calculadora de IMC</h1>
      <Formulario calcularIMC={calcularIMC} />

      {imc && (
        <div class="resultado">
          <h2>Seu IMC: {imc}</h2>
          <p>Classificação: {classificacao}</p>
        </div>
      )}
    </div>
    </div>
  );
}

export default App;
