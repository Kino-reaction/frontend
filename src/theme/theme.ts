export const theme = {
  colors: {
    bg: {
      primary: { normal: '#0A0A0A', hover: '#292929' },
      secondary: { normal: '#EC4926', hover: '' },
    },
    text: {
      primary: { normal: '#FAFAFA', hover: '' },
      secondary: { normal: '#999999', hover: '' },
      success: { normal: '#26EC26', hover: '' },
      alert: { normal: '#EC2626', hover: '' },
      disabled: { normal: '#666666', hover: '' },
    },
  },
};

export type Theme = typeof theme;
