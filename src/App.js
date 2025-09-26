import './index.css';
import { useState } from 'react';
import Form from './Form';
import Result from './Result';
import Section from './Section';
import Main from './Main';
import Footer from './Footer';

function App() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('EUR');
  const [result, setResult] = useState('N/A');

  const calculateResult = (amount, currency) => {
    const currencyEUR = 4.71;
    const currencyUSD = 4.33;
    const currencyGBP = 5.37;

    switch (currency) {
      case "EUR":
        return amount / currencyEUR;
      case "USD":
        return amount / currencyUSD;
      case "GBP":
        return amount / currencyGBP;
      default:
        return 0;
    }
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (!amount || amount <= 0) {
      setResult('N/A');
      return;
    }

    const resultValue = calculateResult(Number(amount), currency);
    setResult(`${Number(amount).toFixed(2)} PLN = ${resultValue.toFixed(2)} ${currency}`);

    setAmount('');
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
            />
          }
        />

        <Section
          body={
            <Result result={result} />
          }
        />

      </Main>
      <Footer />
    </>
  );
}

export default App;