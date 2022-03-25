import styled from 'styled-components';

const Post = styled.div`
  display: flex;
  width: 100%;
  height: 210px;
  margin: 0 0 30px 0;
  background-color: #FFFFFF;
  border-radius: 16px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

const PostUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 50px;
  height: 150px;
  margin: 16px auto auto 16px;
  & img {
    border-radius: 50%;
  }
`;

const PostForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 503px;
  margin: 21px 28px 16px 0;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 300;
  & h2 {
    font-size: 20px;
    line-height: 24px;
    color: #707070;
  }
  & input {
    width: 100%;
    padding-left: 13px;
    background-color: #EFEFEF;
    border-radius: 5px;
    font-size: 15px;
    line-height: 18px;
    color: #949494;
  }
`;

const ButtonPublish = styled.button`
  width: 112px;
  height: 32px;
  margin: 5px 0 auto auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1877F2;
  border-radius: 5px;
  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  :disabled {
    background-color: #9F9F9F;
  }
`;

const PostUrl = styled.input`
  height: 30px;
  margin: 10px 0 8px 0;
`;

const PostDescription = styled.input`
  height: 66px;
`;

export {
    
  Post ,
  PostUserInfo,
  PostForm,
  PostUrl,
  PostDescription,
  ButtonPublish,

};