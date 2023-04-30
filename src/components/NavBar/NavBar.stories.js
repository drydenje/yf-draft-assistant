import NavBar from "@/components/NavBar";

export default {
  title: "Components/NavBar",
  component: NavBar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: "fullscreen",
  },
};

export const Default = {
  args: {},
  parameters: {
    theme: "system",
  },
};

export const LightTheme = {
  args: {
    ...Default.args,
  },
  parameters: {
    theme: "light",
  },
};

export const DarkTheme = {
  args: {
    ...Default.args,
  },
  parameters: {
    theme: "dark",
  },
};
