import { useLoaderData, useLocation } from 'react-router-dom';

import GridCharacter from '../../components/characterGrid/GridCharacter';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { gql, useMutation } from '@apollo/client';
import StartBattle from './components/startBattle';

const ADD_TO_SQUAD_MUTATION = gql`
  mutation AddToSquadMutation($id: ID!, $charId: ID!) {
    updateUser(where: { id: $id }, data: { battleSquad: { connect: { id: $charId } } }) {
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
`;

const REMOVE_FROM_SQUAD_MUTATION = gql`
  mutation RemoveFromSquadMutation($id: ID!, $charId: ID!) {
    updateUser(where: { id: $id }, data: { battleSquad: { disconnect: { id: $charId } } }) {
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
`;

export default function Battle() {
  const { opponents, tier, battle, characters, battleSquad, user } = useLoaderData();
  const [squad, setSquad] = useState(battleSquad);
  const [addToSquad] = useMutation(ADD_TO_SQUAD_MUTATION);
  const [removeFromSquad] = useMutation(REMOVE_FROM_SQUAD_MUTATION);

  const location = useLocation();
  return (
    <div>
      Battle {tier} - {battle.label}
      <h2 className="text-xl font-bold my-5">Opponents</h2>
      <div className="flex mb-8">
        {opponents.map(opponent => (
          <GridCharacter key={opponent.id} {...opponent} />
        ))}
      </div>
      <h2 className="text-xl font-bold my-5">My Squad</h2>
      <div className="flex mb-8">
        {squad.map(char => (
          <div className="relative group" key={char.id}>
            <button
              onClick={async () => {
                const res = await removeFromSquad({
                  variables: {
                    id: user,
                    charId: char.id,
                  },
                });
                setSquad(res.data.updateUser.battleSquad);
              }}
              className="absolute w-4 h-4 bg-red-600 hidden group-hover:block top-0 right-3 rounded-full"
            >
              <IoClose className="fill-white" />
            </button>
            <GridCharacter {...char} />
          </div>
        ))}
        {Array.apply(null, Array(5 - squad.length)).map((_, i) => (
          <GridCharacter key={i} slot />
        ))}
      </div>
      <h2 className="text-xl font-bold my-5">My Characters</h2>
      <div className="flex mb-8">
        {characters.map(char => (
          <button
            key={char.id}
            onClick={async () => {
              const res = await addToSquad({
                variables: {
                  id: user,
                  charId: char.id,
                },
              });
              setSquad(res.data.updateUser.battleSquad);
            }}
          >
            <GridCharacter {...char} />
          </button>
        ))}
      </div>
      <StartBattle user={user} battle={battle.id} location={location} />
    </div>
  );
}
