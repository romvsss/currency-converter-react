import {
    StyledForm,
    Fieldset,
    FormHeader,
    Legend,
    Label,
    Field,
    Select,
    Button,
    LoadingMessage,
    ErrorMessage
} from "./styled";
import Clock from "../Clock";

const Form = ({ amount, currency, onAmountChange, onCurrencyChange, onFormSubmit, loading, error }) => {
    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Fieldset>
                <FormHeader>
                    <Legend>Wprowadź dane</Legend>
                        <Clock />
                </FormHeader>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                {loading && <LoadingMessage>Ładowanie kursów...</LoadingMessage>}
                <Label>
                    Wybierz walutę:
                    <Select
                        name="currency"
                        value={currency}
                        onChange={({ target }) => onCurrencyChange(target.value)}
                        disabled={loading}
                    >
                        <option value="EUR">EURO (EUR)</option>
                        <option value="USD">DOLAR AMERYKAŃSKI (USD)</option>
                        <option value="GBP">FUNT BRYTYJSKI (GBP)</option>
                    </Select>
                </Label>

                <Label>
                    Wprowadź kwotę (PLN):
                    <Field
                        as="input"
                        type="number"
                        name="quantity"
                        required
                        min="0"
                        step="any"
                        value={amount}
                        onChange={({ target }) => onAmountChange(target.value)}
                        placeholder="0.00"
                        disabled={loading}
                    />
                </Label>

                <Button type="submit">
                    {loading ? 'Ładowanie...' : 'Przelicz walutę'}
                </Button>
            </Fieldset>
        </StyledForm>
    )
};

export default Form;