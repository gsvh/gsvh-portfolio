import styled from "styled-components";

interface Props {
  className: string;
  size: number;
  speed: number;
  delay: number;
  xPosition: number;
}

export const Square = styled.div<Props>`
  --size: ${(Props) => Props.size};
  --speed: ${(Props) => Props.speed}s;
  --delay: ${(Props) => Props.delay}s;
  --xPosition: ${(Props) => Props.xPosition}vw;
  --xPos: calc(var(--xPosition) - var(--t));
  --s: calc(5.5vw * var(--size));
  --t: calc(var(--s) / 2);
  height: var(--s);
  width: var(--s);
  border: 3px solid #c5c2c2;
  animation: falling var(--speed) linear infinite;
  opacity: 0;
  animation-delay: var(--delay);

  @keyframes falling {
    0% {
      transform: translate(var(--xPos), -40vh);
      opacity: 1;
    }
    100% {
      transform: translate(var(--xPos), 100vh);
      opacity: 1;
    }
  }
`;
