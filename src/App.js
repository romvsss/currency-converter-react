import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Form from './Form';
import Result from './Result';
import Main from './Main';
import { StyledSection } from './Section/styled';
import { GlobalStyles } from './globalStyles';
import { theme } from './theme';

const exchangeRates = {
  EUR: 4.71,
  USD: 4.33,
  GBP: 5.37
};

function App() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('EUR');
  const [result, setResult] = useState('N/A');

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

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Main>
        <StyledSection>
          <Form
            amount={amount}
            currency={currency}
            onAmountChange={setAmount}
            onCurrencyChange={setCurrency}
            onFormSubmit={onFormSubmit}
          />
        </StyledSection>

        <StyledSection>
          <Result result={result} />
        </StyledSection>
      </Main>
      <footer>
        Kursy walut z dnia 03.10.2025
      </footer>
    </ThemeProvider>
  );
}

export default App;