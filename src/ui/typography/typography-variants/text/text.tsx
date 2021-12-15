import styled from 'styled-components';

import GolosRegularWoff from '../../fonts/GolosTextWeb/Golos-Text_Regular.woff';
import GolosRegularWoff2 from '../../fonts/GolosTextWeb/Golos-Text_Regular.woff2';

const Font = styled.p<{ color?: string }>`
  @font-face {
    font-family: 'Golos';
    src: url(${GolosRegularWoff}) format('woff'), url(${GolosRegularWoff2}) format('woff2');
  }
  font-family: Golos;
  color: ${({ color, theme }) => color ?? theme.colors.detailed.secondary.normal};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  padding: 0;
  margin: 0;
`;

type Props = {
  color?: string;
  children?: string;
};

export const Text = ({ color, children }: Props) => {
  return <Font color={color && color}>{children ? children : ''}</Font>;
};
