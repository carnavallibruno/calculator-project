import { useState } from 'react';
import './App.css';

function App() {
  // Definir os tipos para os estados
  const [input, setInput] = useState<string>(''); // input como string
  const [resultado, setResultado] = useState<string | null>(null); // resultado pode ser string ou null

  // Função para adicionar valores ao input
  const handleClick = (valor: string) => {
    setInput(input + valor);
  };

  // Função para limpar o input e resultado
  const handleClear = () => {
    setInput('');
    setResultado(null);
  };

  // Função para calcular o resultado
  const handleCalculate = () => {
    try {
      // Avalia a expressão matemática do input
      setResultado(eval(input).toString()); // Garantir que o resultado seja tratado como string
    } catch (error) {
      console.log(error);
      setResultado('Erro');
    }
  };

  return (
    <div className="calculator">
      <h1>Calculadora</h1>
      <div className="display">
        <input type="text" value={input} readOnly />
        <div className="result">{resultado !== null && `= ${resultado}`}</div>
      </div>
      <div className="buttons">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={handleClear}>C</button>
        <button onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
}

export default App;
