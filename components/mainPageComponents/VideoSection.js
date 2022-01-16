import React, { useState } from "react";
import {
  Section,
  VideoContainer,
  VideoDemo,
  VideoButtonContainer,
} from "../../styles/globalstyles";
import { Button } from "../elements/Button";
import ReactPlayer from "react-player/lazy";

function VideoSection() {
  const [videoUrl, setVideoUrl] = useState("./workshop-notitle.mp4");

  return (
    <Section theme={"Video"}>
      <VideoContainer>
        <VideoDemo>
          <ReactPlayer url={videoUrl} width="100%" height="100%" controls />
        </VideoDemo>
        <VideoButtonContainer>
          <Button onClick={() => setVideoUrl("./workshop-notitle.mp4")}>
            First demo video
          </Button>
          <Button onClick={() => setVideoUrl("./studio-tango.mp4")}>
            Second demo Video
          </Button>
        </VideoButtonContainer>
      </VideoContainer>
    </Section>
  );
}

export default VideoSection;
