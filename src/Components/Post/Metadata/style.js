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
    width: calc(100% - 155px);

    display: flex;
    flex-direction: column;

    padding: 24px 19px;

    @media (max-width: 610px) {
        width: calc(100% - 115px);
        padding: 7px 11px;
    }
`

const UrlTitle = styled.div`
    display: -webkit-box;
    box-orient: vertical;
    
    padding-bottom: 5px;
    
    font-size: 16px;
    font-weight: 400;
    line-height: 19.2px;
    color: #CECECE;

    overflow: hidden;
    text-overflow: ellipsis;
    line-clamp: 3;

    &:hover {
        cursor: pointer;
        color: #1877f2;
    }

    @media (max-width: 610px) {
        font-size: 11px;
        line-height: 13.2px;
    }
`

const UrlDescription = styled.div`
    display: -webkit-box;
    box-orient: vertical;

    padding-bottom: 13px;

    font-family: "Lato", sans-serif;
    font-size: 11px;
    font-weight: 400;
    line-height: 13.2px;
    color: #9B9595;

    overflow: hidden;
    text-overflow: ellipsis;
    line-clamp: 2;

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

const UrlLink = styled.div`
    display: -webkit-box;
    box-orient: vertical;

    font-family: "Lato", sans-serif;
    font-size: 11px;
    font-weight: 400;
    line-height: 13.2px;
    color: #CECECE;

    overflow: hidden;
    text-overflow: ellipsis;
    line-clamp: 2;

    &:hover {
        cursor: pointer;
        color: #1877f2;
    }

    @media (max-width: 610px) {
        font-size: 9px;
    }
`

const UrlImage = styled.img`
    max-width: 155px;
    max-height: 155px;

    @media (max-width: 610px) {
        max-width: 115px;
        max-height: 115px;
    }
`

const ImageContainer = styled.div`
    max-width: 155px;
    max-height: 155px;

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