import React from "react";
import { Section, VideoContainer, VideoDemo } from "../../styles/globalstyles";

function VideoSection() {
  return (
    <Section theme={"Video"}>
      <VideoContainer>
        <VideoDemo>
          <video src="./workshop-notitle.mp4" autoPlay muted controls/>
        </VideoDemo>
      </VideoContainer>
    </Section>
  );
}

export default VideoSection;
