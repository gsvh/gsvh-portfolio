import styled from "styled-components";

interface Props {
  size: number;
  speed: number;
  delay: number;
  className: string;
  xPosition: number;
}

export const Triangle = styled.div<Props>`
  --size: ${(Props) => Props.size};
  --speed: ${(Props) => Props.speed}s;
  --delay: ${(Props) => Props.delay}s;
  --xPosition: ${(Props) => Props.xPosition}vw;
  --xPos: calc(var(--xPosition) - var(--v));
  --s: calc(5.5vw * var(--size));
  --v: calc(var(--s) / 2);

  --t: 2px; /* Thickness */
  --c: #c5c2c2; /* Color */

  width: calc(6vw * var(--size));
  display: inline-block;
  border: var(--t) solid transparent;
  border-bottom-color: var(--c);
  background:
      /* Left side */ linear-gradient(
        to bottom left,
        transparent 49.5%,
        var(--c) 50% calc(50% + var(--t)),
        transparent calc(50% + var(--t) + 1px)
      )
      right,
    /* right side */
      linear-gradient(
        to bottom right,
        transparent 49.5%,
        var(--c) 50% calc(50% + var(--t)),
        transparent calc(50% + var(--t) + 1px)
      )
      left;
  background-size: 50% 100%;
  background-origin: border-box;
  background-repeat: no-repeat;
  animation: falling var(--speed) linear infinite;
  animation-delay: var(--delay);
  opacity: 0;

  &:before {
    content: "";
    display: block;
    padding-top: 86.6%;
  }

  @keyframes falling {
    0% {
      transform: translateY(-40vh);
      opacity: 1;
    }
    100% {
      transform: translateY(100vh);
      opacity: 1;
    }
  }
`;
