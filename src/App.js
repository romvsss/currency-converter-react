import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Form from './Form';
import Result from './Result';
import Main from './Main';
import { StyledSection } from './Section/styled';
import { GlobalStyles, Footer } from './globalStyles';
import { theme } from './theme';
import { useRates } from './useRates';

function App() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('EUR');
  const [result, setResult] = useState('N/A');

  const { rates, loading, error, lastUpdate } = useRates();

  const calculateResult = (amount, currency) => {
    if (!rates || !rates[currency]) {
      return null;
    }
    return amount * rates[currency];
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (!amount || amount <= 0) {
      setResult('N/A');
      return;
    }

    if (!rates) {
      setResult('Brak kursów walut');
      return;
    }

    const resultValue = calculateResult(Number(amount), currency);
    setResult(`${Number(amount).toFixed(2)} PLN = ${resultValue.toFixed(2)} ${currency}`);
  };

  const formatDate = (date) => {
    if (!date) return '';
    return date.toLocaleDateString('pl-PL', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
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
            loading={loading}
            error={error}
            lastUpdate={lastUpdate}
          />
        </StyledSection>

        <StyledSection>
          <Result result={result} />
        </StyledSection>
      </Main>
      <Footer>
        {lastUpdate 
          ? `Kursy walut z dnia ${formatDate(lastUpdate)}` 
          : 'Ładowanie kursów...'
        }
      </Footer>
    </ThemeProvider>
  );
}

export default App;