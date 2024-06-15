import styled from "styled-components";

export const WrapperAboutThePlayer = styled.div`
  width: 400px;
  height: 600px;
  padding: 20px;
  background-color: #333;
  color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  /* margin-left: 18rem; */
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 24px;
`;

export const PlayOnlineButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 300px;
  height: 32px;
  border: none;
  border-radius: 4px;

  background: #ffc046;
  color: #000;
  font-size: 16px;
  font-weight: 400;

  transition: 0.3s ease, border 0.3s ease;
  cursor: pointer;

  &:hover {
    background: transparent;
    color: #fff;
    border: 1px solid #ffc046;
  }
`;
export const SocialNetworksButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 14px;
  width: 300px;
  height: 32px;
  margin-top: 4rem;
  border-radius: 4px;

  border: 1px solid #ffc046;
  background: transparent;
`;

export const DescriptionToFollow = styled.div`
  font-size: 8px;
  letter-spacing: 6px;
  display: flex;
  justify-content: center;
  margin-top: 12px;
`;
