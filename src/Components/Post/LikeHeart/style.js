import styled from "styled-components";

const Heart = styled.div`
    font-size: 25px;
    padding-top: 17px;
    padding-bottom: 10px;
            
    & > * {
        width: 100%;
        height: 100%;
        transition: all .2s;

        filter: brightness(0.9);
        cursor: pointer;
    }

    .liked {
        color: red;
    }

    .liked:hover  {
        filter: brightness(1.8);
    }

    .not-liked:hover  {
        filter: brightness(1.8);
    }
`

const LikesQuantity = styled.div`
    font-size: 12px;
    font-weight: 400;
    line-height: 10.8px;
`

export {
    Heart,
    LikesQuantity
}