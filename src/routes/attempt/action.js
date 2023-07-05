import { gql } from '@apollo/client';
import { client } from '../../client';

const ATTACK_MUTATION = gql`
  mutation AttackMutation($attempt: ID!, $ability: ID!, $target: ID!) {
    attack(attempt: $attempt, ability: $ability, target: $target) {
      playerTurn {
        damage
        crit
        attacker {
          ... on AttemptCharacter {
            id
            character {
              id
              character {
                id
                name
              }
            }
          }
          ... on AttemptOpponent {
            id
            character {
              id
              character {
                id
                name
              }
            }
          }
        }
        target {
          ... on AttemptCharacter {
            id
            character {
              id
              character {
                id
                name
              }
            }
          }
          ... on AttemptOpponent {
            id
            character {
              id
              character {
                id
                name
              }
            }
          }
        }
      }
      opponentTurn {
        damage
        crit
        attacker {
          ... on AttemptCharacter {
            id
            character {
              id
            }
          }
          ... on AttemptOpponent {
            id
            character {
              id
            }
          }
        }
        target {
          ... on AttemptCharacter {
            id
          }
          ... on AttemptOpponent {
            id
          }
        }
      }
    }
  }
`;

const GET_WRECKED_MUTATION = gql`
  mutation GetWreckedMutation($attempt: ID!) {
    getWrecked(attempt: $attempt) {
      id
    }
  }
`;

export async function action({ request }) {
  const formData = await request.formData();

  const attempt = formData.get('attempt');
  const ability = formData.get('ability');
  const target = formData.get('target');

  const result = await client.mutate({
    mutation: ATTACK_MUTATION,
    variables: {
      attempt,
      ability,
      target,
    },
  });

  return result.data.attack;
}
