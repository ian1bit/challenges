import styled from "styled-components";
import bgHeader from "../../assets/bg-header-desktop.svg"

export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 9.69rem;
  margin-bottom: 4rem;
  background-image: url(${bgHeader});
  background-color: hsl(180, 29%, 50%);
`

export const FilterList = styled.div`
  position: absolute;
  top: 80%;
  width: 80%;
  max-width: 1300px;
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  background: #fff;
  border-radius: 8px;
  box-shadow: 1px 1px 100px 1px rgba(1, 1, 1, .1);
  border-radius: 8px;

  .containerToTags {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`

export const tagFilter = styled.span`
  display: flex;
  align-items: center;
  background-color: hsl(180, 52%, 96%);
  margin: 5px;
  border-radius: 5px;

  p {
    font-family: 'League Spartan', sans-serif;
    font-weight: 700;
    color: hsl(180, 29%, 50%);
    padding: 7px;
    font-size: .9rem;
  }

  .delete {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 29px;
    width: 29px;
    border: none;
    border-radius: 0 5px 5px 0;
    background-color: hsl(180, 29%, 50%);
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .delete:hover {
    background-color: hsl(180, 14%, 20%);
  }
`

export const ButtonClear = styled.button`
  border: 0;
  background-color: #fff;
  font-family: 'League Spartan', sans-serif;
  font-weight: 700;
  color: hsl(180, 29%, 50%);
  padding: 7px;
  font-size: .9rem;
  transition: all 0.3s ease;
  margin-left: 10px;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`
