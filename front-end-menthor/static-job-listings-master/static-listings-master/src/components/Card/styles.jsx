import styled from "styled-components";

export const Container = styled.article`
  width: 100%;
  padding: 30px 50px;
  display: flex;
  justify-content: space-between;

  background: #fff;
  border-radius: 8px;
  box-shadow: 1px 1px 100px 1px rgba(1, 1, 1, .1);

  @media (max-width: 768px) {
    padding: 18px 35px;
    margin: 20px;
  }
  
    .ownerInfos {
      display: flex;
    }

    a {
      text-decoration: none;
    }

    img {
      margin: auto 1rem auto 0;
      width: 5rem;
      height: 5rem;
    }

    .owner {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }

    .owner h2 {
      font-size: 1rem;
      color: hsl(180, 29%, 50%);
      margin-right: 10px;
    }

    .owner .new {
      font-size: .8rem;
      font-weight: 700;
      color: #fff;
      background-color: hsl(180, 29%, 50%);
      border-radius: 30px;
      padding: 4px 7px 2px 7px;
      margin: 3px;
    }

    .owner .featured {
      font-size: .8rem;
      font-weight: 700;
      color: #fff;
      background-color: hsl(180, 14%, 20%);
      border-radius: 30px;
      padding: 4px 7px 2px 7px;
      margin: 3px;
    }

     a .title {
      color: #000;
      font-size: 1.1rem;
      font-weight: 700;
      margin: 10px 0;
      transition: all .2s ease;
    }

    a .title:hover {
      color: hsl(180, 29%, 50%);
    }

    .infosPost p {
      font-size: .9rem;
      font-weight: 500;
      font-family: 'League Spartan', sans-serif;
      color: hsl(180, 8%, 52%);
    }

    .tags {
      margin: auto 0;
    }

    @media (max-width: 768px) {
    flex-direction: column;

    .ownerInfos {
      width: 100%;
      position: relative;
      flex-direction: column;
      border-bottom: 1px solid gray;
      margin-bottom: 1.5rem;
      padding-bottom: 1.5rem;
    }

    .ownerInfos img {
      width: 3.3rem;
      height: 3.3rem;
      position: absolute;
      top: -50px;
    }

    .owner {
      margin-top: 10px;
    }

    .owner h2 {
      font-size: .9rem;
    }

    .owner .featured,
    .owner .new {
      font-size: .8rem;
    }

    a .title {
      font-size: 1rem;
    }
  }
`

export const Tags = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;


  @media (max-width: 768px) {
    justify-content: left;
  }
`

export const ButtonTag = styled.button`
  font-family: 'League Spartan', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: hsl(180, 29%, 50%);

  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: all .2s ease-in;

  :hover {
    color: #fff;
    background: hsl(180, 29%, 50%);
  }
`