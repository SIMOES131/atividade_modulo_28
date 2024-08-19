// src/components/Formulario/index.jsx

import React, { useState } from 'react';
import styles from './Formulario.module.css';

function Formulario({ calcularIMC }) {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    calcularIMC(altura, peso);
  };

  return (
    <div class="container">
      <h1>Calculadora de IMC</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          
            <div>
              <h2>Altura em (cm):</h2>
              <input
                className={styles.input}
                type="number"
                id="altura"
                placeholder='Digite sua altura'
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                required
              />
            </div>

      <div>
        <h2>Peso em (kg):</h2>
        <input
          className={styles.input}
          type="number"
          id="peso" 
          placeholder='Digite seu peso'
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          required
        />
      </div>

      <button className={styles.button} type="submit">Calcular IMC</button>
      
    </form>
    </div>  
  );
}

export default Formulario;
