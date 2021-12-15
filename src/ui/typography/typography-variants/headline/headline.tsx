import styled from "styled-components";

import PPNeueMachinaWoff from "../../fonts/PPNeueMachina/PPNeueMachina-Regular.woff";
import PPNeueMachinaWoff2 from "../../fonts/PPNeueMachina/PPNeueMachina-Regular.woff2";

const Font = styled.h3<{ color?: string }>`
  @font-face {
    font-family: "Neue Machina";
    src: url(${PPNeueMachinaWoff}) format("woff"),
      url(${PPNeueMachinaWoff2}) format("woff2");
  }
  font-family: Neue Machina;
  color: ${({ color, theme }) =>
    color ?? theme.colors.detailed.secondary.normal};
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 28px;
  padding: 0;
  margin: 0;
`;

type Props = {
  color?: string;
  children?: string;
};

export const Headline = ({ color, children }: Props) => {
  return <Font color={color && color}>{children ? children : ""}</Font>;
};
