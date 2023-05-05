import LeagueList from "@/components/LeagueList";

export default {
  title: "Components/LeagueList",
  component: LeagueList,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export const LightTheme = {
  args: {},
  parameters: {
    theme: "light",
  },
};

export const DarkTheme = {
  args: {},
  parameters: {
    theme: "dark",
  },
};
