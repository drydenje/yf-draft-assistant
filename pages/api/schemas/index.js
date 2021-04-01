import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Player {
    id: ID
    full_name: String
    position: String
  }

  type Query {
    getPlayers: [Player]
    getPlayer: Player!
  }
`;
