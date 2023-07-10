import { gql } from '@apollo/client';
import { client } from '../../client';
import { CURRENT_USER_QUERY } from '../../components/auth/user';
import { CHARACTERS_QUERY } from '../characters/charactersLoader';

const BATTLES_QUERY = gql`
  query BattlesQuery($category: String!, $tier: Int!, $label: String!) {
    battles(where: { AND: { category: { title: { equals: $category } }, tier: { tier: { equals: $tier } }, label: { equals: $label } } }) {
      id
      label
      opponents {
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
`;

export async function loader(props) {
  const { data } = await client.query({
    query: BATTLES_QUERY,
    variables: { category: 'Light Side Battles', tier: parseInt(props.params.tier), label: props.params.battle },
  });
  const { data: characters } = await client.query({
    query: CHARACTERS_QUERY,
  });
  const { data: user } = await client.query({ query: CURRENT_USER_QUERY });

  return {
    battle: data.battles[0],
    tier: props.params.tier,
    opponents: data.battles[0].opponents,
    characters: characters.userCharacters,
    battleSquad: user.authenticatedItem.battleSquad,
    user: user.authenticatedItem.id,
  };
}
