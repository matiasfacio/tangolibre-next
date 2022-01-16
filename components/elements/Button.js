import styled from "styled-components";

export const Button = styled.button`
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(var(--menu-fonts-color)),
    to(var(--rosa))
  );
  background: linear-gradient(to right, var(--menu-fonts-color), var(--rosa));
  padding: 10px 20px;
  color: white;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.5rem;
  outline: none;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  box-shadow: 0 0 10px black;
  transition: all 250ms ease;
  :hover {
    transform: perspective(1000px) rotateX(45deg);
  }
`;
