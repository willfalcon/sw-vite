import { gql } from '@apollo/client';
import { client } from '../../client';

const BATTLE_ATTEMPT_QUERY = gql`
  query BattleAttemptQuery($id: ID!) {
    battleAttempt(where: { id: $id }) {
      id
      firstUp
      squad {
        id
        health
        turnMeter
        maxHealth
        defeated
        character {
          id
          character {
            id
            name
            slug
            abilities {
              id
              name
            }
            image {
              url
            }
            avatar {
              url
            }
          }
        }
        __typename
      }
      opponents {
        id
        health
        turnMeter
        maxHealth
        defeated
        character {
          id
          health
          character {
            id
            name
            slug
            abilities {
              id
              name
            }
            image {
              url
            }
            avatar {
              url
            }
          }
        }
        __typename
      }
    }
  }
`;

export async function loader(props) {
  const { params } = props;

  const { data } = await client.query({
    query: BATTLE_ATTEMPT_QUERY,
    variables: {
      id: params.id,
    },
  });

  return data.battleAttempt;
}
