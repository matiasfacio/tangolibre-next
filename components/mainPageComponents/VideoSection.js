import React from "react";
import Image from "next/image";
import { Section, VideoContainer } from "../../styles/globalstyles";

function VideoSection() {
  return (
    <Section theme={"Video"}>
      <VideoContainer>
        <Image src="/tango-rojo2.jpg" width="300" height="450" />
      </VideoContainer>
    </Section>
  );
}

export default VideoSection;
