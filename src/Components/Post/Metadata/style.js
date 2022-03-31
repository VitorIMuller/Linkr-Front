import styled from "styled-components";

const MetadataContainer = styled.div`
    width: 100%;    
    height: 100%;

    border: 1px solid #4d4d4d;
    border-radius: 12px;

    display: flex;
    
    overflow-y: hidden;
    text-overflow: ellipsis;
`;

const TextContainer = styled.div`
    width: 60%;

    display: flex;
    flex-direction: column;
    align-items: space-evenly; 

    padding: 24px 19px;

    @media (max-width: 610px) {
        width: calc(100% - 115px);
        padding: 7px 11px;
    }
`

const UrlTitle = styled.h1`    
    padding-bottom: 5px;
    
    font-size: 1em;
    font-weight: 400;
    line-height: 19.2px;
    color: #CECECE;

    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:hover {
        cursor: pointer;
        color: #1877f2;
    }

    @media (max-width: 610px) {
        font-size: 11px;
        line-height: 13.2px;
    }
`

const UrlDescription = styled.span`
    padding-bottom: 13px;

    font-family: "Lato", sans-serif;
    font-size: 11px;
    font-weight: 400;
    line-height: 13.2px;
    color: #9B9595;
    
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover {
        cursor: pointer;
        color: #1877f2;
    }

    @media (max-width: 610px) {
        font-size: 9px;
        line-height: 10.8px;

        padding-bottom: 4px;
    }
`

const UrlLink = styled.span`
    font-family: "Lato", sans-serif;
    font-size: 11px;
    font-weight: 400;
    line-height: 13.2px;
    color: #CECECE;

    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:hover {
        cursor: pointer;
        color: #1877f2;
    }

    @media (max-width: 610px) {
        font-size: 9px;
    }
`

const UrlImage = styled.img`
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center;

    @media (max-width: 610px) {
        max-width: 115px;
        max-height: 115px;
    }

    @media (max-width: 767px) {
        max-height: 155px;
    }
`

const ImageContainer = styled.div`
    width: 40%;
    height: 100%;

    object-fit: cover;
    object-position: center;

    cursor: pointer;

    @media (max-width: 610px) {
        max-width: 115px;
        max-height: 115px;
    }
`

export {
    MetadataContainer,
    TextContainer,
    UrlTitle,
    UrlDescription,
    UrlLink,
    ImageContainer,
    UrlImage
}