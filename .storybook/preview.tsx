import { ThemeProvider } from "styled-components";
import type { Story } from "@storybook/react";

import { theme } from "../src/ui";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const withThemeProvider = (Story: Story) => {
  return (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];
