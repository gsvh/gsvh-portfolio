import styled from "styled-components";

interface Props {
  className: string;
  size: number;
  speed: number;
  delay: number;
  xPosition: number;
}

export const Circle = styled.div<Props>`
  --size: ${(Props) => Props.size};
  --speed: ${(Props) => Props.speed}s;
  --delay: ${(Props) => Props.delay}s;
  --xPosition: ${(Props) => Props.xPosition}vw;
  --xPos: calc(var(--xPosition) - var(--t));
  --s: calc(5.5vw * var(--size));
  --t: calc(var(--s) / 2);
  height: var(--s);
  width: var(--s);
  border-radius: 50%;
  border: 3px solid #c5c2c2;
  animation: falling var(--speed) linear infinite;
  animation-delay: var(--delay);
  opacity: 0;

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
