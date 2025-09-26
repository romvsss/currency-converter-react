import "./main.css";

const Main = ({ children }) => (
    <main>
        <header class="header">
            <h1>
                Kalkulator walut
            </h1>
        </header>
        {children}
    </main>
);

export default Main;
