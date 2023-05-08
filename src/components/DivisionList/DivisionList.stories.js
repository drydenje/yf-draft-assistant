import DivisionList from "@/components/DivisionList";

export default {
  title: "Components/DivisionList",
  component: DivisionList,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: "fullscreen",
  },
};

const teams = [
  {
    franchID: "ANA",
    franchName: "Los Angeles Angels of Anaheim",
    league: "American",
    division: "West",
  },
  {
    franchID: "SEA",
    franchName: "Seattle Mariners",
    league: "American",
    division: "West",
  },
  {
    franchID: "OAK",
    franchName: "Oakland Athletics",
    league: "American",
    division: "West",
  },
  {
    franchID: "TEX",
    franchName: "Texas Rangers",
    league: "American",
    division: "West",
  },
  {
    franchID: "HOU",
    franchName: "Houston Astros",
    league: "American",
    division: "West",
  },
];

export const LightTheme = {
  args: {
    name: "West",
    teams: teams,
  },
  parameters: {
    theme: "light",
  },
};

export const DarkTheme = {
  args: {
    ...LightTheme.args,
  },
  parameters: {
    theme: "dark",
  },
};
