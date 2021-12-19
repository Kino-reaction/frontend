import styled from "styled-components";

const Dot = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  background-color: ${({ color, theme }) => color ?? theme.colors.main.primary.normal };
`;

const colors: Record<string, string> = {
  open: "green",
  wait: "yellow",
  locked: "red",
  disable: "grey",
};

type Props = {
  status: "open" | "wait" | "locked" | "disable";
};

export const ExampleDot = ({ status }: Props) => {
  return (
    <Dot color={colors[status]}></Dot>
  )    
};
