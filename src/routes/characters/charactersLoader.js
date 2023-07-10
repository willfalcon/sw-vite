import { gql } from '@apollo/client';
import { client } from '../../client';
export const CHARACTERS_QUERY = gql`
  query CharactersQuery {
    userCharacters {
      id
      character {
        id
        image {
          url
        }
        slug
        name
      }
      stars
      level
    }
  }
`;



export default async function charactersLoader() {
  const data = await client.query({
    query: CHARACTERS_QUERY,
  });

  return data;
}
