import {  UILevel } from '@/types';
import styled from '@emotion/styled';

function getColor(level: UILevel['level']) {
    switch (level) {
        case 'primary': 
            return '#007bff';
        case 'optional':
            return '#6c757d';
        case 'critical':    
            return '#dc3545';
        default:
            return '#007bff';       
    }
}

export const ButtonWrapper = styled.button`
    background-color: ${ (props:UILevel) => getColor( props.level ) };
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
