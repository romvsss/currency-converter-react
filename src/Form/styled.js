import styled from "styled-components";

export const StyledForm = styled.form`
    max-width: 500px;
    margin: 0 auto;
`;

export const Fieldset = styled.fieldset`
    border: none;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    padding: 2rem;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const FormHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
    gap: 1rem;
`;

export const Legend = styled.legend`
    font-size: 1.3rem;
    font-weight: 600;
    color: #4a5568;
    margin-bottom: 0;
`;


export const Label = styled.label`
    display: block;
    margin-bottom: 1rem;
    font-weight: 500;
    color: #4a5568;
    font-size: 1rem;
`;

export const Field = styled.input`
    width: 100%;
    padding: 12px 16px;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;
    background: white;
    margin-top: 0.5rem;

    &:focus {
        outline: none;
        border-color: #667eea;
        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }

    &:hover {
        border-color: #cbd5e0;
    }
`;

export const Select = styled.select`
    width: 100%;
    padding: 12px 16px;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;
    background: white;
    margin-top: 0.5rem;

    &:focus {
        outline: none;
        border-color: #667eea;
        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }

    &:hover {
        border-color: #cbd5e0;
    }
`;

export const Button = styled.button`
    width: 100%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    padding: 15px;
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 1rem;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
    }

    &:active {
        transform: translateY(0);
    }
`;