import { StyledMain, Header } from "./styled";
const Main = ({ children }) => (
    <StyledMain>
        <Header>
            <h1>
                Kalkulator walut
            </h1>
        </Header>
        {children}
    </StyledMain>
);

export default Main;
