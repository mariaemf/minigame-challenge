import {
  ContainerLogo,
  DescriptionToFollow,
  PlayOnlineButton,
  SocialNetworksButton,
  WrapperAboutThePlayer,
} from "./styled";
import logo from "../../assets/logo.svg";
import { FaTwitter, FaDiscord, FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { TiSocialYoutube } from "react-icons/ti";

function PlayerProfile() {
  return (
    <WrapperAboutThePlayer>
      <div>
        <ContainerLogo>
          <img src={logo} alt="" />
        </ContainerLogo>

        <PlayOnlineButton>C O N E C T A R </PlayOnlineButton>
      </div>

      <div>
        <SocialNetworksButton>
          <FaTwitter color="#fff" size={20} />
          <RiInstagramFill color="#fff" size={20} />
          <TiSocialYoutube color="#fff" size={20} />
          <FaDiscord color="#fff" size={20} />
          <FaFacebook color="#fff" size={20} />
        </SocialNetworksButton>

        <DescriptionToFollow>
          <p>SIGA NAS REDES SOCIAIS </p>
        </DescriptionToFollow>
      </div>
    </WrapperAboutThePlayer>
  );
}

export default PlayerProfile;
