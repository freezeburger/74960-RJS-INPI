import styled from '@emotion/styled';

export const ButtonWrapper = styled.button`
    background-color: gray;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 16px;
    cursor: pointer;
    transform:scale(1);
    transition: transform 0.3s ease;
    margin: 0.5rem;
    
    &:hover {
        transform:scale(1.05);
    }

    &:active {
        transform:scale(0.95);
    }
    
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;
