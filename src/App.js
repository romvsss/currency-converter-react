import './index.css';
import { useState, useEffect } from 'react';
import Form from './Form';
import Result from './Result';
import Section from './Section';
import Main from './Main';

const exchangeRates = {
  EUR: 4.71,
  USD: 4.33,
  GBP: 5.37
};

function App() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('EUR');
  const [result, setResult] = useState('N/A');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const calculateResult = (amount, currency) => {
    const rate = exchangeRates[currency];
    return amount / rate;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (!amount || amount <= 0) {
      setResult('N/A');
      return;
    }

    const resultValue = calculateResult(Number(amount), currency);
    setResult(`${Number(amount).toFixed(2)} PLN = ${resultValue.toFixed(2)} ${currency}`);
  };

  const formatDateTime = (date) => {
    const days = ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'];
    const dayName = days[date.getDay()];
    
    return `Dziś jest ${dayName}, ${date.toLocaleString('pl-PL', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })}`;
  };


  return (
    <>
      <Main>
        <Section
          body={
            <Form
              amount={amount}
              currency={currency}
              onAmountChange={setAmount}
              onCurrencyChange={setCurrency}
              onFormSubmit={onFormSubmit}
              currentTime={currentTime}
              formatDateTime={formatDateTime}
            />
          }
        />

        <Section
          body={
            <Result result={result} />
          }
        />

      </Main>
      <footer className="footer">
        Kursy walut z dnia 03.10.2025
      </footer>
    </>
  );
}

export default App;