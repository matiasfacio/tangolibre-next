import { Section, SubTitle, Title, Header } from "../styles/globalstyles";
import Pictures from '../components/mainPageComponents/Pictures'
import VideoSection from '../components/mainPageComponents/VideoSection'

export default function Home() {
  return (
    <>
      <Section>
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
      </Section>
      <Section>
        <Pictures/>
      </Section>
      <Section>
        <VideoSection/>
      </Section>
      <Section theme = {"address"}>
      </Section>
    </>
  );
}
