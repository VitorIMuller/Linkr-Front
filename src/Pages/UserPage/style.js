import styled from 'styled-components';

const UserContainer = styled.div`
    margin: 0 50%;

    display: flex; 
    flex-direction: column;
    align-items: center;

    padding-bottom: 100px;

    @media (max-width: 610px) {
        width: 100%;
    }
`;

export {
    UserContainer
}