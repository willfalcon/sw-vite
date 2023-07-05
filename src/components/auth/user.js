import { gql, useQuery } from '@apollo/client';

import { client } from '../../client';

export const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY {
    authenticatedItem {
      ... on User {
        id
        email
        name
        playerLevel
        credits
        crystals
        energy
        maxEnergy
        battleSquad {
          id
          level
          stars
          gearLevel
          character {
            name
            slug
            image {
              url
            }
          }
        }
      }
    }
  }
`;

export function getUser() {
  return new Promise((resolve, reject) => {
    client.query({ query: CURRENT_USER_QUERY }).then(({ data }) => {
      if (data) {
        resolve(data?.authenticatedItem);
      } else {
        reject(data);
      }
    });
  });
}

// export async function getUser() {
//   const { data } = await client.query({ query: CURRENT_USER_QUERY });
//   console.log({ data });
//   if (data) {
//     return data?.authenticatedItem;
//   }
//   return data;
// }

export function useUser() {
  const { data } = useQuery(CURRENT_USER_QUERY);
  return data?.authenticatedItem;
}
