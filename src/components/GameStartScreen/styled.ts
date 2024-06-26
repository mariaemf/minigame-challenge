import styled from "styled-components";
import backgroundImage from "../../assets/profile.webp";

export const GameStartScreenWrapper = styled.div`
  width: 800px;
  height: 600px;
  padding: 20px;
  background-color: #333;
  color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  margin-left: 12px;
  margin-top: 64px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
export const StartMinigameButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 300px;
  height: 32px;
  border: none;
  border-radius: 4px;

  font-size: 16px;
  font-weight: 400;
  letter-spacing: 2px;

  color: #000;
  background: #ffc046;
  transition: 0.3s ease, border 0.3s ease;
  cursor: pointer;

  &:hover {
    background: transparent;
    color: #fff;
    border: 1px solid #ffc046;
  }
`;

export const CharactersTitle = styled.span`
  display: flex;
  width: 350px;
  margin-top: 32px;
  font-size: 16px;
  letter-spacing: 4px;
  font-weight: 400;
  border-bottom: 1px solid #ffc046;
`;

export const CharacterInfoCard = styled.div`
  position: relative;
  margin-top: 24px;
  border-radius: 8px;
  width: 350px;
  height: 400px;
  padding: 16px;
  overflow: hidden;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;

export const CharacterDetails = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 140px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;

  padding: 8px;
  box-sizing: border-box;
  padding: 12px;

  z-index: 3;

  div {
    display: flex;
    justify-content: space-between;
    margin: 12px;
  }
  p {
    margin: 0;
    opacity: 1;
    font-size: 16px;
  }
  span {
    color: #ffc046;
    letter-spacing: 2px;
  }
`;

export const GameHistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-top: 32px;
`;

export const MiniGameHistoryTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 32px;
  color: #ffc046;
  letter-spacing: 2px;

  i {
    margin-top: 12px;
  }
`;
export const GameHistoryList = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;
export const GameHistoryItem = styled.div`
  border-bottom: 1px solid #ffc046;
  padding: 10px;
`;

export const ModalLogoHeader = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 12px;
`;

export const WrapperSubTitle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
