import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  padding: 30px 0;
  position: relative;
  &::before {
    position: absolute;
    content: "${(props) => props.theme}";
    width: 200px;
    height: 200px;
    font-size: 15rem;
    font-weight: 800;
    transform: translate(50%, 60%);
    color: white;
    opacity: 0.2;
    pointer-events: none;
    text-transform: uppercase;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  overflow: hidden;
  border-bottom: 1px #f25872 solid;
  &:after {
    background: linear-gradient(
      to right,
      transparent 0%,
      #f25872 50%,
      #232323 50%,
      #232323 100%
    );
    opacity: 0.2;
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-image: url("./tango-header.jpg");
    background-size: cover;
    background-position: 10% 10%;
    background-repeat: no-repeat;
    background-color: black;
    background-blend-mode: luminosity;
    transition: all 0.5s ease-in-out;
  }
  &:hover:before {
    transform: scale(1.02);
  }
`;

export const Footer = styled.footer`
  min-height: 70vh;
  background-color: #232323;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.div`
  background-color: HSL(0, 0%, 18%);
  color: white;
`;

export const Title = styled.h1`
  position: relative;
  display: inline-block;
  padding: 0px 0px;
  border-radius: 5px;
  line-height: 1;
  z-index: 99;
  transform: translateX(-50%) rotateZ(-10deg);
`;

export const SubTitle = styled.h2`
  position: absolute;
  display: inline-block;
  padding: 50px 40px;
  border-radius: 50%;
  line-height: 1;
  z-index: 1;
  text-align: center;
  transform: translate(40%, 20%);
  -webkit-transform: translate(40%, 20%);
  color: #f25872;
  background: linear-gradient(
    to right bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.7) 60%,
    #ff8638 95%,
    #f25872 100%
  );
  border: 3px transparent solid;
  border-bottom: 3px #f25872 solid;
  border-right: 3px #ff8638 solid;
`;

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: linear-gradient(
    to right,
    #232323 0%,
    #232323 80%,
    #ff8638 98%,
    #f25872 100%
  );
  /* background-color: #232323; */
  color: #ff8638;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  border-bottom: 1px #f25872 solid;
  ul {
    display: flex;
    justify-content: center;
    padding-left: 30px;
  }
  a {
    position: relative;
    text-transform: uppercase;
    margin-right: 30px;
    &::before {
      position: absolute;
      width: 0%;
      content: "";
      height: 2px;
      background-color: transparent;
      transform: translateY(28px);
      transition: all 180ms linear;
      transform-origin: center cente4;
    }
    &:hover::before {
      background: linear-gradient(to right, #ff8638 0%, #f25872 50%);
      width: 100%;
    }
    &:after {
      content: "";
      height: 100%;
      width: 2px;
      border-right: 2px gray dotted;
      position: absolute;
      padding-left: 10px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  label {
    font-size: 2rem;
    color: #ff8638;
    margin-bottom: 5px;
  }
  input {
    padding: 5px 10px;
    margin-bottom: 20px;
    font-size: 1.3rem;
  }
`;

export const FormContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.theme.url});
  background-size: cover;
  width: 200px;
  height: 400px;
  position: relative;
  margin-bottom: 30px;
  border: 2px #ff8638 solid;
  transition: all 500ms ease-in-out;
  overflow: hidden;
  box-shadow: 5px 5px 10px rgba(0,0,0,0.9);

  &:nth-of-type(1) {
    transform: translate(0%, 0%);
  };
  &:nth-of-type(2) {
    transform: translate(-20%,-10px);
  };
  &:nth-of-type(3) {
    transform: translate(-40%, -20px);
  };
  &:hover:nth-of-type(3) {
    transform: translate(-40%,-30px) rotateZ(-5deg);
    z-index: 100;
  }
  &:hover:nth-of-type(2) {
    transform: translate(-20%,-30px) rotateZ(-5deg);
    z-index: 100;
  }
  &:hover:nth-of-type(1) {
    transform: translate(0%,-30px) rotateZ(-5deg);
    z-index: 100;
  }
  &::after {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.9);
    content:'';
    transition: all 250ms ease-in-out;
  }
  &:hover::after {
    background-color: rgba(0,0,0,0);
  }
`;

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50%;
`
export const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10vw;
  border-top: 0px #f25872 dotted;
  position: relative;
  &::after{
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, transparent 0%, transparent 60%, #232323 80%, transparent 100%);
  }
`