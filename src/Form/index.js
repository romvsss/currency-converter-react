import "./style.css";

const Form = ({ amount, currency, onAmountChange, onCurrencyChange, onFormSubmit }) => {
    return (
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">Wprowadź dane</legend>
                <label className="form__labelText">
                    Wybierz walutę:
                    <select 
                        name="currency" 
                        className="form__field"
                        value={currency}
                        onChange={({ target }) => onCurrencyChange(target.value)}
                    >
                        <option value="EUR">EURO (EUR)</option>
                        <option value="USD">DOLAR AMERYKAŃSKI (USD)</option>
                        <option value="GBP">FUNT BRYTYJSKI (GBP)</option>
                    </select>
                </label>
                <p>
                    <label className="form__labelText">
                        Wprowadź kwotę (PLN): 
                        <input 
                            className="form__field" 
                            type="number" 
                            name="quantity" 
                            required 
                            min="0" 
                            step="any"
                            value={amount}
                            onChange={({ target }) => onAmountChange(target.value)}
                        />
                    </label>
                </p>
            </fieldset>
            <p>
                <button className="form__button" type="submit">Oblicz!</button>
            </p>
        </form>
    )
};

export default Form;