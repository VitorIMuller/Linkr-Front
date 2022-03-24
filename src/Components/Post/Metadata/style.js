import styled from "styled-components";

const MetadataContainer = styled.div`
    min-width: 100%;    
    height: 100%;

    border: 1px solid #4d4d4d;
    border-radius: 12px;

    display: flex;

    contain: content;

    .text {
        width: 70%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        padding: 7px 11px;

        .title {
            font-size: 11px;
            font-weight: 400;
            line-height: 13.2px;
            color: #CECECE;

            overflow: hidden;
            text-overflow: ellipsis;

            padding-bottom: 4px;
        }

        .description {
            font-size: 9px;
            font-weight: 400;
            line-height: 10.8px;
            color: #9B9595;

            overflow: hidden;
            text-overflow: ellipsis;

            padding-bottom: 4px;
        }

        .link {
            font-size: 9px;
            font-weight: 400;
            line-height: 10.8px;
            color: #CECECE;

            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

    .image {
        width: 30%;

        img {
            width: 100%;
            height: 100%;
        }
    }
`;

export {
    MetadataContainer
}