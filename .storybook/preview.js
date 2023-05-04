import { ThemeProvider } from "next-themes";
import { oswald, montserrat } from "@/styles/fonts";
import "../src/styles/normalize.css";
import "../src/styles/globals.css";
import "../src/styles/colours.css";
import "../src/styles/storybook-globals.css";

const withTheme = (Story, context) => {
  const { theme } = context.parameters;
  const className = `${montserrat.variable} + " " + ${oswald.variable}`;

  return (
    <ThemeProvider theme={theme}>
      <div data-theme={theme} className={className}>
        <Story />
      </div>
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
