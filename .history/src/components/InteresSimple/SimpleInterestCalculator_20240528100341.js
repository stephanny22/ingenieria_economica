import React, { useState } from 'react';

const SimpleInterestCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [currency, setCurrency] = useState('EUR');
  const [interest, setInterest] = useState(null);

  const calculateInterest = () => {
    const P = parseFloat(principal);
    const R = parseFloat(rate) / 100;
    const N = parseInt(years, 10);

    if (isNaN(P) || isNaN(R) || isNaN(N)) {
      alert('Por favor, ingresa valores válidos.');
      return;
    }

    const simpleInterest = P * R * N;
    setInterest(simpleInterest);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Calculadora de Interés Simple</h2>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Principal (P):
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Tasa de Interés (R) %:
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Número de Años (N):
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Moneda:
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            style={{ marginLeft: '10px' }}
          >
            <option value="EUR">Euros (EUR)</option>
            <option value="USD">Dólares (USD)</option>
            <option value="GBP">Libras (GBP)</option>
            <option value="JPY">Yen (JPY)</option>
            <option value="MXN">Pesos Mexicanos (MXN)</option>
            <option value="ARS">Pesos Argentinos (ARS)</option>
            <option value="BRL">Reales Brasileños (BRL)</option>
            <option value="CLP">Pesos Chilenos (CLP)</option>
            <option value="COP">Pesos Colombianos (COP)</option>
            <option value="PEN">Soles Peruanos (PEN)</option>
          </select>
        </label>
      </div>
      <button onClick={calculateInterest}>Calcular Interés</button>
      {interest !== null && (
        <div style={{ marginTop: '20px' }}>
          <h3>Resultado</h3>
          <p>Interés Simple: {interest.toFixed(2)} {currency}</p>
        </div>
      )}
    </div>
  );
};

export default SimpleInterestCalculator;