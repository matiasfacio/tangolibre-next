import {
  Section,
  SubTitle,
  Title,
  Header,
  AddressContainer,
  PicPromoContainer,
} from "../styles/globalstyles";
import Pictures from "../components/mainPageComponents/Pictures";
import VideoSection from "../components/mainPageComponents/VideoSection";
import Promo from "../components/mainPageComponents/Promo";
import Newsletter from "../components/mainPageComponents/Newsletter";

export default function Home() {
  return (
    <>
      <Header>
        <Title>
          Tango <br /> Libre
        </Title>
        <SubTitle>
          Dance
          <br />
          yourself <br /> away
        </SubTitle>
      </Header>
      <Section>
        <PicPromoContainer>
          <Pictures />
          <Promo />
        </PicPromoContainer>
      </Section>
      <Section>
        <Newsletter />
      </Section>
      <Section>
        <VideoSection />
      </Section>
      <Section theme={"contact"} id="contact">
        <AddressContainer>
          <h2>Tango Libre</h2>
          <h3>c/o Bühnenreif!</h3>
          <h3>Immanuelkirchstrasse 6</h3>
          <h3>10405 Berlin</h3>
          <h3>Tel: 0177 3 123 608</h3>
        </AddressContainer>
      </Section>
    </>
  );
}
