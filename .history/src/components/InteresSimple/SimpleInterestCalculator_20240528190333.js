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
      
      // caso 1 Intereses Totales
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

      //caso 2 Capital Inicial
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

            // caso 2 Capital Inicial
      case 'principal':
        // Muestra los formularios correspondientes al cálculo del Capital Inicial (C)
        return (
          <div>
            <div>
              <label>
                Intereses Totales (I):
                <input
                  type="number"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label>
                Tasa de Interés (i) %:
                <input
                  type="number"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label>
                Tiempo (t):
                <input
                  type="number"
                  value={years}
                  onChange={(e) => setYears(e.target.value)}
                />
              </label>
              <select
                value={timeUnit}
                onChange={(e) => setTimeUnit(e.target.value)}
              >
                <option value="días">Días</option>
                <option value="meses">Meses</option>
                <option value="trimestres">Trimestres</option>
                <option value="semestres">Semestres</option>
                <option value="años">Años</option>
              </select>
            </div>
          </div>
        );

        }

        setResult(I / (R * timeInYears2));
      break;
      //fin caso 2

      //caso 3 Tasa de Interés
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

        setResult((I / (P * timeInYears3)) * 100);
      break;
      // fin caso 3  
        
      // caso 4 Tiempo 
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
        setResult(I / (P * R * timeInYears4));
      break;
      // fin caso 4

      // caso 5 Capital Final
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



  //formulario
  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Calculadora de Interés Simple</h2>
      <div>
        <label>
          Calcular:
          <select
            value={variableToCalculate}
            onChange={(e) => setVariableToCalculate(e.target.value)}
          >
            <option value="interest">Intereses Totales (I)</option>
            <option value="principal">Capital Inicial (C)</option>
            <option value="rate">Tasa de Interés (i)</option>
            <option value="years">Tiempo (t)</option>
            <option value="finalAmount">Capital Final (F)</option>
          </select>
        </label>
      </div>

      {/* Renderizar el formulario correspondiente según la variableToCalculate */}
      {calculate()}

      <div>
        <label>
          Moneda:
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            {/* Opciones de moneda */}
          </select>
        </label>
      </div>
      {/* Botón de cálculo */}
      <button onClick={calculate}>Calcular</button>
      {/* Resultado */}
      {result !== null && (
        <div>
          <h3>Resultado</h3>
          <p>
            {/* Mostrar el resultado */}
          </p>
        </div>
      )}
    </div>
  );
};

export default SimpleInterestCalculator;