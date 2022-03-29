import styled from 'styled-components';

const Follow = styled.button`
  width: 112px;
  height: 32px;
  
  display: ${({showIt}) => showIt ? 'none' : 'false'};
  justify-content: center;
  align-items: center;
  background-color : ${({follows, disabled})=> disabled ? 'grey' : follows ? '#FFF' : '#1877F2' };
  color : ${({follows})=> follows ? '#1877F2' : '#FFF' };
  border: none;
  border-radius: 5px;

  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  text-align: center;

  cursor: ${({disabled})=> disabled ? 'not-allowed' : 'pointer' };

  position: absolute;
  top: 76px;
  right: calc(40vw - 72%);

  @media (max-width: 767px) {
    right: calc(40vw - 90%);
  }
`

export {
  Follow
}