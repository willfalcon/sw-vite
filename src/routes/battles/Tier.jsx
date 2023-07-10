import { Link, useLoaderData } from 'react-router-dom';
import { client } from '../../client';
import { gql } from '@apollo/client';

const BATTLES_QUERY = gql`
  query BattlesQuery($category: String!, $tier: Int!) {
    battles(where: { AND: { category: { title: { equals: $category } }, tier: { tier: { equals: $tier } } } }) {
      id
      label
      tier {
        tier
      }
    }
  }
`;

export async function loader({ params }) {
  const data = await client.query({ query: BATTLES_QUERY, variables: { category: 'Light Side Battles', tier: parseInt(params.tier) } });

  return { battles: data.data.battles, tier: parseInt(params.tier) };
}

export default function Tier() {
  const { battles, tier } = useLoaderData();

  return (
    <div>
      <div className="relative mt-4 after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-400">
        <ol className="relative z-10 flex justify-between text-sm font-medium text-gray-500">
          {battles.map(battle => (
            <li className="flex items-center justify-center gap-2 p-2" key={battle.id}>
              <Link
                to={`/game/battles/light-side/${tier}/${battle.label}`}
                className="h-8 w-8 rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white text-center font-bold flex justify-center items-center"
              >
                {battle.label}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
