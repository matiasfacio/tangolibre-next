import styled from "styled-components";

export const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  &::before {
    position: absolute;
    content: "${(props) => props.theme}";
    width: 200px;
    top: 0;
    right: 0;
    height: 200px;
    font-size: 8rem;
    font-weight: 800;
    transform: translate(0%, 60%);
    color: white;
    opacity: 0.2;
    pointer-events: none;
    text-transform: uppercase;
    writing-mode: vertical-lr;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  position: relative;
  overflow: hidden;
  border-bottom: 1px #f25872 solid;
  margin: 60px 0;

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
  min-height: 30vh;
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
      width: 100%;
      content: "";
      left: 0;
      bottom: 0;
      height: 2px;
      background: linear-gradient(to right, #ff8638 0%, #f25872 50%);
      background-color: transparent;
      transform-origin: right;
      transform: scaleX(0);
      transition: transform 200ms ease-in;
    }
    &:hover::before {
      transform: scaleX(1);
      transform-origin: left;
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
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    margin-bottom: 20px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.theme.url});
  background-size: cover;
  min-width: 200px;
  height: 400px;
  position: relative;
  border: 2px #f25872 solid;
  transition: all 500ms ease-in-out;
  overflow: hidden;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.9);

  &:nth-of-type(1) {
    transform: translate(0%, -10px);
  }
  &:nth-of-type(2) {
    transform: translate(-20%, -20px);
  }
  &:nth-of-type(3) {
    transform: translate(-40%, -30px);
    transform: translate(-40%, -40px) rotateZ(-5deg);

    &::after {
      background-color: rgba(0, 0, 0, 0);
    }
  }
  &:hover:nth-of-type(3) {
    transform: translate(-40%, -40px) rotateZ(-5deg);
    z-index: 100;
  }
  &:hover:nth-of-type(2) {
    transform: translate(-20%, -30px) rotateZ(-5deg);
    z-index: 100;
  }
  &:hover:nth-of-type(1) {
    transform: translate(0%, -30px) rotateZ(-5deg);
    z-index: 100;
  }
  &::after {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    content: "";
    transition: all 250ms ease-in-out;
  }
  &:hover::after {
    background-color: rgba(0, 0, 0, 0);
  }
`;

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: calc(100% - 60px);
  padding: 0 2em;
  transform: translateY(-60px);
`;

export const PromoStyle = styled.div`
  height: 250px;
  width: 250px;
  /* background: linear-gradient(
    to bottom right,
    transparent 0%,
    transparent 50%,
    #f25872 60%,
    #ff8638 100%
  ); */
  border-radius: 40% 150% 60% 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(20%);
  h2 {
    font-size: 5rem;
    color: white;
  }
`;

export const PicPromoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const VideoContainer = styled.div`
  width: 70%;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const VideoDemo = styled.div`
  position: relative;
  transform: translate(0%, 0%);
  &::after {
    position: absolute;
    content: "we love tango";
    padding-left: 20px;
    bottom: 0;
    left: 0;
    font-size: 4rem;
    width: 40%;
    height: 25%;
    background: linear-gradient(to right, #f25872 0%, transparent 40%);
    pointer-events: none;
  }
  video {
    border: 2px #f25872 solid;
    width: 100%;
    height: auto;
    border-radius: 50% 0%;
  }
`;

export const VideoButtonConatiner = styled.div`
  display: flex;
  flex-direction: column;
`


export const AddressContainer = styled.div`
  padding: 0 2em;
  margin: 0 auto;
  display: flex;
  width: 50%;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
`;

export const NewsletterContainer = styled.div`
  min-height: 300px;
  margin: 50px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #232324;
`;

export const AboutContainer = styled.div`
  padding-top: 100px;
  display: flex;
  min-height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    font-size: 2rem;
    padding: 5px;
  }
`;

export const UserAreaContainer = styled.div`
  padding: 100px 2em;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  /* overflow-x: hidden; */
  h2 {
    font-size: 3rem;
  }
`

export const UserInfo = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 1.5rem;
    color: white;
  }
`

export const AdminAreaContainer = styled(UserAreaContainer)`
  
`;

export const SubscriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    padding-bottom: 10px;
  }
  p {
    font-size: 1.5rem;
    color: #ff8638;
  }
`

export const ProgramContainer = styled.div`
  padding-top: 100px;
  padding-bottom: 300px;
  display: flex;
  flex-wrap: wrap;
  background-color: #232324;
`

export const AuthContainer = styled.div`
  padding-top: 100px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`