import {
  LogoContainer,
  FollowDescription,
  ConnectButton,
  SocialMediaButtons,
  PlayerDetailsWrapper,
} from "./styled";
import logo from "../../assets/logo.svg";
import { FaTwitter, FaDiscord, FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { TiSocialYoutube } from "react-icons/ti";

function PlayerProfile() {
  return (
    <PlayerDetailsWrapper>
      <div>
        <LogoContainer>
          <img src={logo} alt="" />
        </LogoContainer>

        <ConnectButton>C O N E C T A R </ConnectButton>
      </div>

      <div>
        <SocialMediaButtons>
          <FaTwitter color="#fff" size={20} />
          <RiInstagramFill color="#fff" size={20} />
          <TiSocialYoutube color="#fff" size={20} />
          <FaDiscord color="#fff" size={20} />
          <FaFacebook color="#fff" size={20} />
        </SocialMediaButtons>

        <FollowDescription>
          <p>SIGA NAS REDES SOCIAIS </p>
        </FollowDescription>
      </div>
    </PlayerDetailsWrapper>
  );
}

export default PlayerProfile;
