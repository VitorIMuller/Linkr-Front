import styled from "styled-components";

const TrendingBox = styled.div`
  width: 300px;
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  border-radius: 16px;
  padding: 12px 16px;
  color: #171717;

  &> span:first-of-type {
    margin-top: 18px;
  }

  &> span:last-of-type {
    margin-bottom: 18px;
  }
`

const Title = styled.p`
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 40px;
 
  color: #fff;
`

const Separator = styled.div`
  width: 100%;
  height: 1.5px;
  color: #484848;
`

export {
  TrendingBox,
  Title,
  Separator
}
