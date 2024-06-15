import {
  ContainerPlayerProfile,
  Containerimg,
  GetOutButton,
  Level,
  PlayerInformation,
  HeaderWrapper,
} from "./styled";
import profile from "../../assets/profile.webp";
import { FaMedal } from "react-icons/fa";

function Header() {
  return (
    <HeaderWrapper>
      <ContainerPlayerProfile>
        <Containerimg src={profile} alt="foto de perfil do usuário" />

        <PlayerInformation>
          <h1>Mateus Souza</h1>
          <Level>
            <p>Nível Gold</p>
            <i>
              <FaMedal size={14} color="#ffc046" />
            </i>
          </Level>
        </PlayerInformation>
      </ContainerPlayerProfile>
      <GetOutButton>Sair</GetOutButton>
    </HeaderWrapper>
  );
}

export default Header;
