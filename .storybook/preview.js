import { ThemeProvider } from "next-themes";
import { useInsertionEffect } from "react";
import "../src/styles/normalize.css";
import "../src/styles/globals.css";
import "../src/styles/colours.css";
import "../src/styles/storybook-globals.css";

// let isInserted = new Set();
// function useCSS(rule) {
//   useInsertionEffect(() => {
//     if (!isInserted.has(rule)) {
//       isInserted.add(rule);
//       document.head.appendChild(getStyleForRule(rule));
//     }
//   });
//   return rule;
// }

const withTheme = (Story, context) => {
  const { theme } = context.parameters;
  const className = `body-mock-${theme}`;
  const sty = `color-scheme: light;`;
  // console.log("THEME:", theme);
  // const storyTheme = theme === "dark" ?
  return (
    <ThemeProvider theme={theme}>
      {/* <div className={className}> */}
      {/* <div data-theme="light" style={sty}> */}
      <div data-theme={theme}>
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
