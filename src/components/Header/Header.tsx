import {
  PlayerProfileContainer,
  ProfileImage,
  LogoutButton,
  PlayerLevel,
  PlayerInfo,
  HeaderWrapper,
} from "./styled";
import profile from "../../assets/profile.webp";
import { FaMedal } from "react-icons/fa";

function Header() {
  return (
    <HeaderWrapper>
      <PlayerProfileContainer>
        <ProfileImage src={profile} alt="foto de perfil do usuário" />

        <PlayerInfo>
          <h1>Mateus Souza</h1>
          <PlayerLevel>
            <p>Nível Gold</p>
            <i>
              <FaMedal size={14} color="#ffc046" />
            </i>
          </PlayerLevel>
        </PlayerInfo>
      </PlayerProfileContainer>
      <LogoutButton>Sair</LogoutButton>
    </HeaderWrapper>
  );
}

export default Header;
