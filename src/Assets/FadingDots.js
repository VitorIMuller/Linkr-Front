import styled from "styled-components";
import "../Styles/FadingDots.css";

export default function FadingDots() {
    return (
        <DotsContainer>
            <svg className="circular" viewBox="25 25 50 50">
                <circle cx="50" cy="50" r="20"></circle>
            </svg>
        </DotsContainer>
    );
}

const DotsContainer = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    padding-top: 200px;
    padding-bottom: 500px;

    color: #FFF;

    @media (max-width: 610px) {
        padding-top: 150px;
    }
`;