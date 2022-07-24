import styled from 'styled-components';


const StyledButton = styled.button`
    background: ${props => props.theme.background};
    color: ${props => props.theme.colors.white};
    font-size: 1.2rem;
    font-weight: bold;
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background: ${props => props.theme.colors.secondary};
    }
`;

