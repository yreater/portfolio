import styled from 'styled-components';

interface ContainerProps {
  imgUrl: string;
}

export const Container = styled.div<ContainerProps>`
  > a {
    position: relative;
    width: 100%;
    background: url(${props => props.imgUrl}) no-repeat center;
    background-size: cover;
    height: 15rem;
    padding: 1.5rem;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    border-radius: .5rem;
    border: 1px solid ${({ theme }) => theme.border};
    cursor: pointer;
    overflow: hidden;

    &:hover{
      border-color: ${({ theme }) => theme.primary};
      > div.overlay {
        opacity: 0.5;
      }
    }



    > section {
      z-index: 2;
      h1{
        color: ${({ theme }) => theme.primary};
        font-size: 1.5rem;
      }
      h2{
        color: ${({ theme }) => theme.secondary};
        font-size: 1rem;
      }
    }

    > div.overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.gradient};
      opacity: .7;
      transition: 0.5s;
      left: 0;
      bottom: 0;
    }
}
`;
