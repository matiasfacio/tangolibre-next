import { Section, ProgramContainer } from "../styles/globalstyles";
import styled from "styled-components";

function kursprogramm() {
  return (
    <Section theme={"Kursprogramm"}>
      <ProgramContainer>
      <Day>
        <NameDay>
          <h2>Montag</h2>
        </NameDay>
        <ClassesOfTheDay>
          <Time>19:00 - 20:30</Time>
          <Title>Salon Figures</Title>
          <Level>Intermediate Level</Level>
          <Time>20:30 - 22:00</Time>
          <Title>Special Seminars</Title>
          <Level>-we offer a special seminar once a month-</Level>
        </ClassesOfTheDay>
      </Day>
      <Day>
        <NameDay>
          <h2>Dienstag</h2>
        </NameDay>
        <ClassesOfTheDay>
          <Time>19:00 - 20:30</Time>
          <Title>Salon Figures</Title>
          <Level>Intermediate Level</Level>
          <Time>20:30 - 22:00</Time>
          <Title>Super Tango</Title>
          <Level>Intermediate/Advanced Level</Level>
        </ClassesOfTheDay>
      </Day>
      <Day>
        <NameDay>
          <h2>Mittwoch</h2>
        </NameDay>
        <ClassesOfTheDay>
          <Time>19:30 - 22:00</Time>
          <Title>Intensive Training / Technique</Title>
          <Level>Intermediate/Advanced Level</Level>
        </ClassesOfTheDay>
      </Day>
      <Day>
        <NameDay>
          <h2>Donnerstag</h2>
        </NameDay>
        <ClassesOfTheDay>
          <Time>19:00 - 20:30</Time>
          <Title>Salon Figures</Title>
          <Level>Intermediate/Advanced Level</Level>
          <Time>20:30 - 22:00</Time>
          <Title>New to Tango?</Title>
          <Level>Beginners</Level>
        </ClassesOfTheDay>
      </Day>
      <Day>
      <NameDay>
          <h2>Freitag</h2>
        </NameDay>
        <ClassesOfTheDay>
          <Time>19:30 - 22:00</Time>
          <Title>Salon Figures</Title>
          <Level>Intermediate Level</Level>
        </ClassesOfTheDay>
      </Day>
      </ProgramContainer>
    </Section>
  );
}

export default kursprogramm;

export const Day = styled.div`
  background-color: #232323;
  padding: 50px;
`;

export const NameDay = styled.div`
  color: white;
  h2 {
    color: #ff8638;
  }
`;

export const ClassesOfTheDay = styled.div``;
export const Title = styled.div`
  color: #f25872;
  font-size: 2.2rem;
`;
export const Level = styled.div`
  color: white;
  font-size: 1.5rem;
`;
export const Time = styled.div`
  color: white;
  font-size: 1.8rem;
`;
