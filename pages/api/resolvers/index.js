export const resolvers = {
  Query: {
    getPlayer: async () => {
      try {
        return {
          id: "999",
          full_name: "Jeremy",
          position: "CF",
        };
      } catch (error) {
        throw error;
      }
    },
  },
};
