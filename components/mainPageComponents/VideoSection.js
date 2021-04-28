import React, { useState } from "react";
import {
  Section,
  VideoContainer,
  VideoDemo,
  VideoButtonConatiner,
} from "../../styles/globalstyles";

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
          {videoUrl && <video src={videoUrl} muted controls />}
        </VideoDemo>
      </VideoContainer>
    </Section>
  );
}

export default VideoSection;
