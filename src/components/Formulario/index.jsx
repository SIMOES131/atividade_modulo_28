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
        <form className={styles.form} onSubmit={handleSubmit}>
            <div>
              <label className={styles.label} htmlFor="altura">Altura (cm): </label>
              <input
                className={styles.input}
                type="number"
                id="altura"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                required
              />
            </div>

      <div>
        <label className={styles.label} htmlFor="peso">Peso (kg): </label>
        <input
          className={styles.input}
          type="number"
          id="peso"
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
