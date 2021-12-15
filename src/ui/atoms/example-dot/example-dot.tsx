import styled from 'styled-components';

const Dot = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  background-color: ${({ color }) => color ?? 'blue'};
  border-radius: 50%;
`;

const colors: Record<string, string> = {
  open: 'green',
  wait: 'yellow',
  locked: 'red',
  disable: 'grey',
};

type Props = {
  status: 'open' | 'wait' | 'locked' | 'disable';
};

export const ExampleDot = ({ status }: Props) => {
  return <Dot color={colors[status]}></Dot>;
};
