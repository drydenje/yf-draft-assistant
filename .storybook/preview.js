import { ThemeProvider } from "next-themes";
import "../src/styles/normalize.css";
import "../src/styles/globals.css";
import "../src/styles/colours.css";

const theme = "default";

const withTheme = (Story, context) => {
  // const { theme } = context.parameters;
  // const storyTheme = theme === "dark" ?
  return (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  );
};

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: {
      default: "light",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [withTheme],
};

export default preview;
