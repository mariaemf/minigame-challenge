import {
  ContainerPlayerProfile,
  Containerimg,
  GetOutButton,
  Level,
  PlayerInformation,
  WrapperHeader,
} from "./styled";
import profile from "../../assets/profile.webp";
import { FaMedal } from "react-icons/fa";

function Header() {
  return (
    <WrapperHeader>
      <ContainerPlayerProfile>
        <Containerimg src={profile} alt="foto de perfil" />

        <PlayerInformation>
          <h1>Mateus Souza</h1>
          <Level>
            <p>nivel ouro</p>
            <i>
              <FaMedal size={14} color="#ffc046" />
            </i>
          </Level>
        </PlayerInformation>
      </ContainerPlayerProfile>
      <GetOutButton>Sair</GetOutButton>
    </WrapperHeader>
  );
}

export default Header;
