import styled from 'styled-components';

const Font = styled.h1<{ color?: string }>`
  font-family: sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 64px;
  color: ${({ color, theme }) => color ?? theme.colors.detailed.secondary.normal};
  padding: 0;
  margin: 0;
`;

type Props = {
  color: string;
  children: string;
};

export const Default1 = ({ color, children }: Props) => {
  return <Font color={color && color}>{children ? children : ''}</Font>;
};
