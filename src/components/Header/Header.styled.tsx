import styled from '@emotion/styled';
 
type Props ={
    online:boolean
};
export const HeaderWrapper = styled.header<Props>`
    color: white;
    background-color: ${(props:Props) => props.online ? 'blue' : 'red'};
    height: ${(props:Props) => props.online ? '100px' : '150px'};
    padding: 5px;
    transition: height 0.5s ease;
`;
 