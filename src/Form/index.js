import "./style.css";
import Clock from "../Clock";

const Form = ({ amount, currency, onAmountChange, onCurrencyChange, onFormSubmit }) => {
    return (
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <div className="form__header">
                    <legend className="form__legend">Wprowadź dane</legend>
                    <Clock />
                </div>
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
                        placeholder="0.00"
                    />
                </label>

                <button className="form__button" type="submit">
                    Przelicz walutę
                </button>
            </fieldset>
        </form>
    )
};

export default Form;