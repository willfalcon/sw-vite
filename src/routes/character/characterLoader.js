import { gql } from '@apollo/client';

import { client } from '../../client';

const CHARACTER_QUERY = gql`
  query CharacterQuery($slug: String) {
    character(where: { slug: $slug }) {
      id
      image {
        url
      }
      name
      slug
      factions {
        name
        id
      }
      abilities {
        name
        id
        description {
          document
        }
      }
    }
  }
`;

export async function characterLoader({ params }) {
  const data = await client.query({
    query: CHARACTER_QUERY,
    variables: {
      slug: params.slug,
    },
  });
  return data;
}
