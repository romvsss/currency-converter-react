import styled from "styled-components";

export const Container = styled.div`
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    padding: 2rem;
    text-align: center;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    max-width: 500px;
    margin: 2rem auto;
`;

export const Text = styled.p`
    font-size: 1.1rem;
    color: #4a5568;
    margin-bottom: 0.5rem;
`;

export const Value = styled.span`
    font-size: 1.4rem;
    font-weight: 600;
    color: #667eea;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`;