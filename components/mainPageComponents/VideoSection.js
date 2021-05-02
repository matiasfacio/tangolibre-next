import React, { useState } from "react";
import {
  Section,
  VideoContainer,
  VideoDemo,
  VideoButtonConatiner,
} from "../../styles/globalstyles";
import ReactPlayer from "react-player/lazy";

function VideoSection() {
  const [videoUrl, setVideoUrl] = useState("./workshop-notitle.mp4");

  return (
    <Section theme={"Video"}>
      <VideoContainer>
        <VideoButtonConatiner>
          <button onClick={() => setVideoUrl("./workshop-notitle.mp4")}>
            First Video
          </button>
          <button onClick={() => setVideoUrl("./studio-tango.mp4")}>
            Second Video
          </button>
        </VideoButtonConatiner>
        <VideoDemo>
          <ReactPlayer
            url={videoUrl}
            width="100%"
            height="100%"
            controls
          />
        </VideoDemo>
      </VideoContainer>
    </Section>
  );
}

export default VideoSection;
