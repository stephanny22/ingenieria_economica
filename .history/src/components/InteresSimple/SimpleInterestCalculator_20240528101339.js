import React, { useState } from 'react';

const SimpleInterestCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [interest, setInterest] = useState('');
  const [finalAmount, setFinalAmount] = useState('');
  const [variableToCalculate, setVariableToCalculate] = useState('interest');
  const [currency, setCurrency] = useState('EUR');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const P = parseFloat(principal);
    const R = parseFloat(rate) / 100;
    const N = parseFloat(years);
    const I = parseFloat(interest);
    const F = parseFloat(finalAmount);

    switch (variableToCalculate) {
      case 'interest':
        if (isNaN(P) || isNaN(R) || isNaN(N)) {
          alert('Por favor, ingresa valores válidos.');
          return;
        }
        setResult(P * R * N);
        break;
      case 'principal':
        if (isNaN(I) || isNaN(R) || isNaN(N)) {
          alert('Por favor, ingresa valores válidos.');
          return;
        }
        setResult(I / (R * N));
        break;
      case 'rate':
        if (isNaN(I) || isNaN(P) || isNaN(N)) {
          alert('Por favor, ingresa valores válidos.');
          return;
        }
        setResult((I / (P * N)) * 100);
        break;
      case 'years':
        if (isNaN(I) || isNaN(P) || isNaN(R)) {
          alert('Por favor, ingresa valores válidos.');
          return;
        }
        setResult(I / (P * R));
        break;
      case 'finalAmount':
        if (isNaN(P) || isNaN(I)) {
          alert('Por favor, ingresa valores válidos.');
          return;
        }
        setResult(P + I);
        break;
      default:
        alert('Por favor, selecciona una variable para calcular.');
        return;
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Calculadora de Interés Simple</h2>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Calcular:
          <select
            value={variableToCalculate}
            onChange={(e) => setVariableToCalculate(e.target.value)}
            style={{ marginLeft: '10px' }}
          >
            <option value="interest">Interés (I)</option>
            <option value="principal">Capital Inicial (C)</option>
            <option value="rate">Tasa de Interés (i)</option>
            <option value="years">Tiempo (t)</option>
            <option value="finalAmount">Capital Final (F)</option>
          </select>
        </label>
      </div>
      {variableToCalculate !== 'principal' && (
        <div style={{ marginBottom: '10px' }}>
          <label>
            Principal (C):
            <input
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              style={{ marginLeft: '10px' }}
              disabled={variableToCalculate === 'principal'}
            />
          </label>
        </div>
      )}
      {variableToCalculate !== 'rate' && (
        <div style={{ marginBottom: '10px' }}>
          <label>
            Tasa de Interés (i) %:
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              style={{ marginLeft: '10px' }}
              disabled={variableToCalculate === 'rate'}
            />
          </label>
        </div>
      )}
      {variableToCalculate !== 'years' && (
        <div style={{ marginBottom: '10px' }}>
          <label>
            Tiempo (t):
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              style={{ marginLeft: '10px' }}
              disabled={variableToCalculate === 'years'}
            />
          </label>
        </div>
      )}
      {variableToCalculate === 'interest' && (
        <div style={{ marginBottom: '10px' }}>
          <label>
            Interés (I):
            <input
              type="number"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              style={{ marginLeft: '10px' }}
              disabled
            />
          </label>
        </div>
      )}
      {variableToCalculate === 'finalAmount' && (
        <div style={{ marginBottom: '10px' }}>
          <label>
            Capital Final (F):
            <input
              type="number"
              value={finalAmount}
              onChange={(e) => setFinalAmount(e.target.value)}
              style={{ marginLeft: '10px' }}
              disabled
            />
          </label>
        </div>
      )}
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
      <button onClick={calculate}>Calcular</button>
      {result !== null && (
        <div style={{ marginTop: '20px' }}>
          <h3>Resultado</h3>
          <p>
            {variableToCalculate.charAt(0).toUpperCase() + variableToCalculate.slice(1)}: {result.toFixed(2)} {currency}
          </p>
        </div>
      )}
    </div>
  );
};

export default SimpleInterestCalculator;