import styled from "styled-components";

export const WrapperHeader = styled.div`
  width: 100%;
  height: 100px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px;

  background: #1c1c1c;
  color: #fff;
`;

export const ContainerPlayerProfile = styled.div`
  display: flex;
  gap: 24px;
`;

export const Containerimg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
`;

export const PlayerInformation = styled.div`
  align-items: center;
  margin-top: 14px;
  color: #bcbcbc;

  h1 {
    font-size: 16px;
    font-weight: 700;
  }
  p {
    font-size: 14px;
  }
`;

export const Level = styled.div`
  display: flex;
  align-items: center;
  margin: 4px 6px;
  gap: 4px;
`;
export const GetOutButton = styled.button`
  width: 140px;
  height: 32px;

  border-radius: 8px;
  border: 1px solid #ffc046;
  color: #ffc046;
  background: transparent;

  &:hover {
    background: #ffc046;
    border: none;
    color: #fff;
  }
`;
