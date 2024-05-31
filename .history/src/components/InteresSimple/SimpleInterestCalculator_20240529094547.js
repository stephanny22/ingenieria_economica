import React, { useState } from 'react';
import backgroundImage from '../../assets/fondo2.avif'; // Importa la imagen

const SimpleInterestCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [interest, setInterest] = useState('');
  const [finalAmount, setFinalAmount] = useState('');
  const [variableToCalculate, setVariableToCalculate] = useState('interest');
  const [timeUnit, setTimeUnit] = useState('años');
  const [currency, setCurrency] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    let P, R, N, I, F;

    switch (variableToCalculate) {
      case 'interest':
        P = parseFloat(principal);
        R = parseFloat(rate) / 100;
        N = parseFloat(years);
        if (isNaN(P) || isNaN(R) || isNaN(N)) {
          alert('Por favor, ingresa valores válidos.');
          return;
        }

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

      case 'principal':
        F = parseFloat(finalAmount);
        R = parseFloat(rate) / 100;
        N = parseFloat(years);
        if (isNaN(F) || isNaN(R) || isNaN(N)) {
          alert('Por favor, ingresa valores válidos.');
          return;
        }

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

        setResult(F / (1 + R * timeInYears2));
        break;

      case 'rate':
        F = parseFloat(finalAmount);
        P = parseFloat(principal);
        N = parseFloat(years);
        if (isNaN(F) || isNaN(P) || isNaN(N)) {
          alert('Por favor, ingresa valores válidos.');
          return;
        }

        let timeInYears3;
        switch (timeUnit) {
          case 'días':
            timeInYears3 = N / 365;
            break;
          case 'meses':
            timeInYears3 = N / 12;
            break;
          case 'trimestres':
            timeInYears3 = N / 4;
            break;
          case 'semestres':
            timeInYears3 = N / 2;
            break;
          case 'años':
            timeInYears3 = N;
            break;
          default:
            alert('Por favor, selecciona una unidad de tiempo válida.');
            return;
        }

        setResult((((F / P) - 1) / timeInYears3) * 100);
        break;

      case 'years':
        F = parseFloat(finalAmount);
        P = parseFloat(principal);
        R = parseFloat(rate) / 100;
        if (isNaN(F) || isNaN(P) || isNaN(R)) {
          alert('Por favor, ingresa valores válidos.');
          return;
        }

        setResult((F - P) / (P * R) / 365);
        break;

      case 'finalAmount':
        P = parseFloat(principal);
        R = parseFloat(rate) / 100;
        N = parseFloat(years);
        if (isNaN(P) || isNaN(R) || isNaN(N)) {
          alert('Por favor, ingresa valores válidos.');
          return;
        }

        let timeInYears4;
        switch (timeUnit) {
          case 'días':
            timeInYears4 = N / 365;
            break;
          case 'meses':
            timeInYears4 = N / 12;
            break;
          case 'trimestres':
            timeInYears4 = N / 4;
            break;
          case 'semestres':
            timeInYears4 = N / 2;
            break;
          case 'años':
            timeInYears4 = N;
            break;
          default:
            alert('Por favor, selecciona una unidad de tiempo válida.');
            return;
        }

        setResult(P * (1 + R * timeInYears4));
        break;

      default:
        alert('Por favor, selecciona una variable para calcular.');
        return;
    }
  };

  return (
    <div
      className="flex flex-wrap"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >

<div className="bg-primary shadow-lg rounded-lg overflow-hidden">
    <div className="flex justify-center items-center p-6">
    <div style={{ padding: '50px', maxWidth: '400px', margin: '0 auto' }}>
        <h2 style={{ textShadow: "2px 2px 2px #05d005, -2px -2px 2px #05d005, 2px -2px 2px #05d005, -2px 2px 2px #05d005", color: 'white', textAlign: 'center'}}>Calculadora de Interés Simple</h2>
        <div style={{ marginBottom: '20px', padding: '20px' }}>
          <label style={{ color: 'white' }}>
            Calcular:
            <select
              value={variableToCalculate}
              onChange={(e) => setVariableToCalculate(e.target.value)}
              style={{ marginLeft: '10px', color: 'black' }}
            >
              <option value="interest">Intereses Totales (I)</option>
              <option value="principal">Capital Inicial (C)</option>
              <option value="rate">Tasa de Interés (i)</option>
              <option value="finalAmount">Capital Final "Monto" (F)</option>
            </select>
          </label>
        </div>

        {(variableToCalculate !== 'principal' || variableToCalculate === 'rate' || variableToCalculate === 'years') && (
          <div style={{ marginBottom: '10px' }}>
            <label style={{ color: 'white' }}>
              Principal (C):
              <input
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                style={{ marginLeft: '10px', color: 'black'  }}
                disabled={variableToCalculate === 'principal'}
              />
            </label>
          </div>
        )}

{(variableToCalculate === 'principal' || variableToCalculate === 'rate' || variableToCalculate === 'years') && (
          <div style={{ marginBottom: '10px' }}>
            <label style={{ color: 'white' }}>
              Capital Final "Monto" (F):
              <input
                type="number"
                value={finalAmount}
                onChange={(e) => setFinalAmount(e.target.value)}
                style={{ marginLeft: '10px', color: 'black'  }}
                disabled={variableToCalculate === 'finalAmount'}
              />
            </label>
          </div>
        )}

        {variableToCalculate !== 'rate' && (
          <div style={{ marginBottom: '10px' }}>
            <label style={{ color: 'white' }}>
              Tasa de Interés (i) %:
              <input
                type="number"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                style={{ marginLeft: '10px', color: 'black'  }}
                disabled={variableToCalculate === 'rate'}
              />
            </label>
          </div>
        )}

        {variableToCalculate !== 'years' && (
          <div style={{ marginBottom: '10px' }}>
            <label style={{ color: 'white' }}>
              Tiempo (t):
              <input
                type="number"
                value={years}
                onChange={(e) => setYears(e.target.value)}
                style={{ marginLeft: '10px', color: 'black'  }}
                disabled={variableToCalculate === 'years'}
              />
            </label>
            <select
              value={timeUnit}
              onChange={(e) => setTimeUnit(e.target.value)}
              style={{ marginLeft: '10px', color: 'black' }}
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
            <label style={{ color: 'white' }}>
              Interés (I):
              <input
                type="number"
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                style={{ marginLeft: '10px', color: 'black'  }}
                disabled={variableToCalculate === 'interest'}
              />
            </label>
          </div>
        )}

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <button style={{ backgroundColor: '#FFA500', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={calculate}>
        Calcular
      </button>
      {result !== null && (
        <div style={{ marginTop: '20px', color: 'white' }}>
          <h3>Resultado</h3>
          <p>
            {variableToCalculate.charAt(0).toUpperCase() + variableToCalculate.slice(1)}: {result.toFixed(2)} {currency}
          </p>
        </div>
      )}
    </div>
    </div>
  </div>
      </div>
    </div>
  );
};

export default SimpleInterestCalculator;