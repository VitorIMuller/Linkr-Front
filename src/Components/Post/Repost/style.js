import styled from "styled-components";

const Repeat = styled.div`
    font-size: 25px;
    padding-top: 8px;
    padding-bottom: 5px;
            
    & > * {
        width: 100%;
        height: 100%;
        transition: all .2s;

        filter: brightness(0.9);
        cursor: pointer;
    }
`

const RepostsQuantity = styled.div`
    font-size: 12px;
    font-weight: 400;
    line-height: 10.8px;
`

export {
    Repeat,
    RepostsQuantity
}