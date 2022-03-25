import styled from "styled-components";

const PostBody = styled.div`
    width: 100vw;
    min-height: 232px;

    display: flex;

    margin-top: 16px;
    padding: 15px;

    background-color: #171717;

    font-family: "Lato", sans-serif;

    .left-side-post {

        display: flex;
        flex-direction: column;
        align-items: center;

        color: #FFF;

        img {
            width: 40px;
            height: 40px;

            border-radius: 50%;
        }

        .heart {
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
        }

        .likes-quantity {
            font-size: 12px;
            font-weight: 400;
            line-height: 10.8px;
        }
    }

    .right-side-post {
        display: flex;
        flex-direction: column;

        overflow-wrap: break-word;
        word-wrap: break-word;

        padding-left: 15px;

        a {
            all: unset;
        }

        .username-post {
            font-size: 17px;
            font-weight: 400;
            line-height: 20.4px;
            color: #FFF;

            padding-bottom: 7px;
        }

        .user-message-post {
            overflow-wrap: break-word;
            word-wrap: break-word;

            font-size: 15px;
            font-weight: 400;
            line-height: 18px;
            color: #B7B7B7;

            padding-bottom: 13px;

            span {
                padding-left: 5px;

                 font-size: 17px;
                 font-weight: 700;
                 line-height: 20.4px;
                 color: #FFF;
            }
        }

        .metadata-container {
            min-width: 100%;

            border: 1px solid #4d4d4d;
        }
    }
`

export {
    PostBody
}