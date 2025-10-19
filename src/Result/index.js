import { Container, Text, Value } from "./styled";

const Result = ({ result }) => {
    return (
        <Container>
            <Text>
                <span>Wartość po przeliczeniu: <Value>{result}</Value></span>
            </Text>
        </Container>
    )
};

export default Result;