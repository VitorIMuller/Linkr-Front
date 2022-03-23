import styled from "styled-components";

const MainContainer = styled.main`
    min-width: 100%;
    min-height: 100vh;

    background-color: #333333;

    font-family: 'Oswald', sans-serif;
`

const TitleContainer = styled.div`
    margin-top: 72px;

    min-height: 87px;
    min-width: 100vw;

    display: flex;
    justify-content: left;
    align-items: center;

    padding-left: 17px;

    span {
        font-size: 33px;
        font-weight: 700;
        color: #FFF;
        font-family: 'Oswald', sans-serif;
    }
`

const NewPostContainer = styled.div`
    width: 100%;
    min-height: 164px;

    background-color: #FFF;
`

const Post = styled.div`
    width: 100vw;
    min-height: 232px;

    display: flex;

    margin-top: 16px;
    padding: 15px;

    background-color: #171717;

    .left-side-post {

        display: flex;
        flex-direction: column;
        align-items: center;

        font-family: 'Lato', sans-serif;

        img {
            width: 40px;
            height: 40px;

            border-radius: 50%;
        }

        .heart {
            padding-top: 17px;
            padding-bottom: 10px;
            color: #FFF;
        }

        .likes-quantity {
            font-size: 9px;
            font-weight: 400;
            line-height: 10.8px;

            color: #FFF;
        }
    }

    .right-side-post {
        display: flex;
        flex-direction: column;

          overflow-wrap: break-word;
            word-wrap: break-word;

        padding-left: 15px;

        font-family: 'Lato', sans-serif;

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
    }
`

export {
    TitleContainer,
    MainContainer,
    NewPostContainer,
    Post
}