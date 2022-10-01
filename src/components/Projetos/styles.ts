import styled from 'styled-components';

interface ProjetoProps {
  imgUrl: string;
}

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
   
  > section {
  width: 100%;
  display: flex;
  flex-direction: column;    
  gap: 4rem;

  @media(max-width: 1000px){
    gap: 2rem;
  }
  }
`;

export const ProjetoContainer = styled.div<ProjetoProps>`
  width: 100%;
  display: flex;
  height: 25rem;
  align-items: flex-end;
  position: relative;
  
  &:hover{
    > section {
      > div.text {
        right: -12rem;
      }
      > div.overlay {
        opacity: .4;
      }
    }
    > button a {
      color: ${({ theme }) => theme.primary};
    }
  }
  > button {
    height: 4rem;
    margin: 0 0 3rem 3rem;
    background: none;
    border: none;
  }
  a{
    color:#fff;
    font-size: 2rem;
    font-weight: 300;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: 0.5s;
  }

  > section {
    width: 50rem;
    height: 100%;
    background: url(${props => props.imgUrl}) no-repeat center;
    background-size: cover;
    position: relative;
    border-radius: 25px;
    

    > div.overlay {
      position: absolute;
      border-radius: 25px;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.gradient};
      opacity: 0.75;
      transition: 0.5s;

    }
    
    > div.text {
      position: absolute;
      top: 3rem;
      right: -10rem;
      transition: 0.5s;
      width: fit-content;
    }
    h1{
      color: ${({ theme }) => theme.primary};
      font-size: 2.5rem;
      text-shadow: -4px 5px 22px #11172b;
    }
    h2{
      color: ${({ theme }) => theme.primary};
      font-size: 2rem;
      font-weight: 300;
      text-shadow: -4px 5px 22px #11172b;
    }
  }

  &:nth-child(even){
    flex-direction: row-reverse;

    > button {
      margin: 3rem 5rem 0 0;
    }
    > section > div.text {
      text-align: right;
      right: 0;
      left: -10rem;
    }
    &:hover{
      > section > div.text {
        left: -12rem;
      }
    }
  }

  @media(max-width: 1450px){
    > section{
      width: 40rem;
    }
  }
  @media(max-width: 1000px){
    > section{
      width: 100%;

      > div.text{
        left: 1rem;
        top: 1rem;
      }
    }
    > button {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      margin: 0;
    }
    &:nth-child(even) {
      flex-direction: row;
      
      > section{
      width: 100%;

      > div.text{
        left: 1rem;
        top: 1rem;
        text-align: left;
      }
    }
  }

    }  `;
