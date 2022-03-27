import styled from "styled-components";

const TrendingBox = styled.div`
  width: 300px;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 16px;
  
  background-color: #171717;
  color: #fff;

  &> span {
    width: 100%;
    text-align: left;
    padding: 8px 16px;
  }

  &> span:first-of-type {
    margin-top: 18px;
  }

  &> span:last-of-type {
    margin-bottom: 18px;
  }
`

const Title = styled.p`
  width: 100%;

  font-family: 'Oswald';
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 40px;
  text-align: left;

  padding: 12px 16px;
 
  color: #fff;
`

const Separator = styled.div`
  width: 100%;
  height: 1.5px;
  background-color: #484848;
`

export {
  TrendingBox,
  Title,
  Separator
}
