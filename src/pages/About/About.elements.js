import styled from 'styled-components';

export const MainSection = styled.div`
  padding: 60px 60px;
  background-color: whitesmoke;
  color: black;
  @media screen and (max-width: 1000px) {
    padding: 30px;
  }
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 200px;
  @media screen and (max-width: 1024px) {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 1000px) {
    margin-bottom: 30px;
  }

  h1 {
    font-size: 80px;
    color: #020202;
    font-weight: 200;
    margin-bottom: 32px;
    font-family: 'Poppins', sans-serif;
    padding: 0rem 4rem;
    @media screen and (max-width: 1000px) {
      font-size: 70px;

      text-align: center;
    }
  }
`
export const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 700px;
  margin-bottom: 40px;
  padding: 0rem 4rem;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`

export const MainText = styled.div`
  padding-right: 20px;

  h2 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
    @media screen and (max-width: 768px) {
      margin-bottom: 40px;
      text-align: center;
    }
  }
  p {
    margin-bottom: 2rem;
    font-weight: 500;
  }
`
export const MainImage = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 600px;
    height: 820px;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
    @media screen and (max-width: 320px) {
      width: 90%;
      height: 90%;
    }
  }
  @media screen and (max-width: 1000px) {
    margin-top: 20px;
  }
  @media screen and (max-width: 1024px) {
    margin-top: 20px;
  }
`
