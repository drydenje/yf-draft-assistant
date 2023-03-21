import Table from "@/components/Table";

export default {
  title: "Components/Table",
  component: Table,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: "fullscreen",
  },
};

export const Primary = {
  args: {
    primary: true,
  },
};
