import React, { useState } from 'react';

const SimpleInterestCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [interest, setInterest] = useState('');
  const [finalAmount, setFinalAmount] = useState('');
  const [variableToCalculate, setVariableToCalculate] = useState('interest');
  const [timeUnit, setTimeUnit] = useState('años');
  const [currency, setCurrency] = useState('EUR');
  const [result, setResult] = useState(null);


  const calculate = () => {
    let P, R, N, I, F;

    switch (variableToCalculate) {
      
      // caso 1
      case 'interest':
        P = parseFloat(principal);
        R = parseFloat(rate) / 100;
        N = parseFloat(years);
        if (isNaN(P) || isNaN(R) || isNaN(N)) {
          alert('Por favor, ingresa valores válidos.');
          return;
        }

        // Convertir el tiempo a años según la unidad seleccionada
        let timeInYears1;
        switch (timeUnit) {
          case 'días':
            timeInYears1 = N / 365;
            break;
          case 'meses':
            timeInYears1 = N / 12;
            break;
          case 'trimestres':
            timeInYears1 = N / 4;
            break;
          case 'semestres':
            timeInYears1 = N / 2;
            break;
          case 'años':
            timeInYears1 = N;
            break;
          default:
            alert('Por favor, selecciona una unidad de tiempo válida.');
            return;
        }

        setResult(P * R * timeInYears1);
      break;
      //fin caso 1

      //caso 2
      case 'principal':
        I = parseFloat(interest);
        R = parseFloat(rate) / 100;
        N = parseFloat(years);
        if (isNaN(I) || isNaN(R) || isNaN(N)) {
          alert('Por favor, ingresa valores válidos.');
          return;
        }

        // Convertir el tiempo a años según la unidad seleccionada
        let timeInYears2;
        switch (timeUnit) {
          case 'días':
            timeInYears2 = N / 365;
            break;
          case 'meses':
            timeInYears2 = N / 12;
            break;
          case 'trimestres':
            timeInYears2 = N / 4;
            break;
          case 'semestres':
            timeInYears2 = N / 2;
            break;
          case 'años':
            timeInYears2 = N;
            break;
          default:
            alert('Por favor, selecciona una unidad de tiempo válida.');
            return;
        }

        setResult(I / (R * timeInYears2));
      break;
      //fin caso 2

      //caso 3
      case 'rate':
        I = parseFloat(interest);
        P = parseFloat(principal);
        N = parseFloat(years);
        if (isNaN(I) || isNaN(P) || isNaN(N)) {
          alert('Por favor, ingresa valores válidos.');
          return;
        }

        // Convertir el tiempo a años según la unidad seleccionada
        let timeInYears3;
        switch (timeUnit) {
          case 'días':
            timeInYears = N / 365;
            break;
          case 'meses':
            timeInYears = N / 12;
            break;
          case 'trimestres':
            timeInYears = N / 4;
            break;
          case 'semestres':
            timeInYears = N / 2;
            break;
          case 'años':
            timeInYears = N;
            break;
          default:
            alert('Por favor, selecciona una unidad de tiempo válida.');
            return;
        }

        setResult((I / (P * timeInYears3)) * 100);
      break;
      // fin caso 3  
        
      // caso 4
      case 'years':
        I = parseFloat(interest);
        P = parseFloat(principal);
        R = parseFloat(rate) / 100;
        N = parseFloat(years); // Aquí asignamos el valor de years a N
        if (isNaN(I) || isNaN(P) || isNaN(R)) {
          alert('Por favor, ingresa valores válidos.');
          return;
        }
        
          // Convertir el tiempo a años según la unidad seleccionada
          let timeInYears4;
          switch (timeUnit) {
            case 'días':
              timeInYears = N / 365;
              break;
            case 'meses':
              timeInYears = N / 12;
              break;
            case 'trimestres':
              timeInYears = N / 4;
              break;
            case 'semestres':
              timeInYears = N / 2;
              break;
            case 'años':
              timeInYears = N;
              break;
            default:
              alert('Por favor, selecciona una unidad de tiempo válida.');
              return;
        }
        setResult(I / (P * R * timeInYears4));
      break;
      // fin caso 4

      // caso 5
      case 'finalAmount':
        P = parseFloat(principal);
        I = parseFloat(interest);
        if (isNaN(P) || isNaN(I)) {
          alert('Por favor, ingresa valores válidos.');
          return;
        }
        setResult(P + I);
      break;
      // fin caso 5

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
            <option value="interest">Intereses Totales (I)</option>
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
          <select
            value={timeUnit}
            onChange={(e) => setTimeUnit(e.target.value)}
            style={{ marginLeft: '10px' }}
          >
            <option value="días">Días</option>
            <option value="meses">Meses</option>
            <option value="trimestres">Trimestres</option>
            <option value="semestres">Semestres</option>
            <option value="años">Años</option>
          </select>
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
              disabled={variableToCalculate === 'interest'}
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
              disabled={variableToCalculate === 'finalAmount'}
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