import { gql } from '@apollo/client';
import { client } from '../../client';
import { BATTLE_ATTEMPT_QUERY } from './attemptLoader';

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
            health
            defeated
            turnMeter
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
            health
            defeated
            turnMeter
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
              character {
                name
              }
            }
          }
          ... on AttemptOpponent {
            id
            character {
              id
              character {
                name
              }
            }
          }
        }
        target {
          ... on AttemptCharacter {
            id
            health
            defeated
            turnMeter
          }
          ... on AttemptOpponent {
            id
            health
            defeated
            turnMeter
          }
        }
      }
    }
  }
`;

export async function attemptAction({ request }) {
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
    refetchQueries: [BATTLE_ATTEMPT_QUERY],
  });

  return result.data.attack;
}
