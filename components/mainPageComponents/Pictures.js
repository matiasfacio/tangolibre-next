import Image from "next/image";
import { ImageContainer, ImagesContainer } from "../../styles/globalstyles";

function Pictures() {
  return (
    <ImagesContainer>
      <ImageContainer theme = {{url: "./tango-rojo.jpg", text: "Tango"}}>
          <h2>Tango</h2>
      </ImageContainer>
      <ImageContainer theme = {{url: "./tango-rojo2.jpg", text: "Embrace"}}>
          <h2>Libre</h2>
      </ImageContainer>
      <ImageContainer theme = {{url: "./tango-rojo3.jpg", text: "Body"}}>
          <h2>Free</h2>
      </ImageContainer>
    </ImagesContainer>
  );
}

export default Pictures;
