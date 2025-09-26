import "./style.css";

const Result = ({ result }) => {
    return (
        <div className="form__result">
            <p>
                <span>Wartość po przeliczeniu: <span className="form__result--value">{result}</span></span>
            </p>
        </div>
    )
};

export default Result;