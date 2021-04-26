import { Section, SubTitle, Title, Header, AddressContainer } from "../styles/globalstyles";
import Pictures from "../components/mainPageComponents/Pictures";
import VideoSection from "../components/mainPageComponents/VideoSection";

export default function Home() {
  return (
    <>
      {/* <Section> */}
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
      {/* </Section> */}
      <Section>
        <Pictures />
      </Section>
      <Section>
        <VideoSection />
      </Section>
      <Section theme={"address"}>
        <AddressContainer>
          <h2>Tango Libre</h2>
          <h3>c/o Bühnenreif!</h3>
          <h3>Immanuelkirchstrasse 6</h3>
          <h3>10405 Berlin</h3>
        </AddressContainer>
      </Section>
    </>
  );
}
