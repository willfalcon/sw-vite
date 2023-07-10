import { useFetcher, useLoaderData } from 'react-router-dom';

import { useEffect, useState } from 'react';

import { AttemptContext } from './components/attemptContext';
import Opponent from './components/Opponent';
import Friendly from './components/Friendly';
import { Button } from '@/components/ui/Button';
import AttemptMenuBar from './components/AttemptMenuBar';

export default function Attempt() {
  const loaderData = useLoaderData();
  const { firstUp, id } = loaderData;
  const attackFetcher = useFetcher();

  const [squad, setSquad] = useState(loaderData.squad);
  const [opponents, setOpponents] = useState(loaderData.opponents);

  const [target, setTarget] = useState(opponents[0].id);
  const [damageToast, setDamageToast] = useState(null);

  const [swapTurn, setSwapTurn] = useState(false);

  useEffect(() => {
    const playerTurn = attackFetcher.data?.playerTurn;
    const opponentTurn = attackFetcher.data?.opponentTurn;
    if (playerTurn) {
      console.log(
        `Attack made! ${playerTurn.attacker.character.character.name} dealt ${playerTurn.damage} damage to ${playerTurn.target.character.character.name}`
      );
      setDamageToast(playerTurn);
      setOpponents(loaderData.opponents);
      setTimeout(() => {
        setDamageToast(null);

        if (opponentTurn) {
          setSwapTurn(true);
          setTimeout(() => {
            setDamageToast(opponentTurn);
            setSquad(loaderData.squad);
            setTimeout(() => {
              setSwapTurn(false);
              setDamageToast(false);
            }, 1000);
          }, 200);
        }
      }, 1000);
    }
  }, [attackFetcher.data]);

  useEffect(() => {
    const targetedOpponent = opponents.find(opp => opp.id === target);
    if (targetedOpponent.defeated) {
      const nextTarget = opponents.find(opp => !opp.defeated).id;
      setTarget(nextTarget);
    }
  }, [opponents, target]);

  const activeAbilities = squad.find(char => {
    return char.id === firstUp;
  }).character.character.abilities;

  const [selectedAbility, setSelectedAbility] = useState(activeAbilities[0].id);

  return (
    <AttemptContext.Provider value={{ target, setTarget, turn: firstUp, damageToast, swapTurn, attackData: attackFetcher.data }}>
      <AttemptMenuBar battleId={id} />
      <div className="container mx-auto grid grid-cols-2 pt-14">
        <div>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">Your Squad</h2>
            </div>
          </div>
          <div className="flex flex-col pb-4 space-y-4">
            {squad
              .filter(char => !char.defeated)
              .map(char => {
                return <Friendly key={char.id} {...char} />;
              })}
          </div>
        </div>

        <div className="">
          <div className="flex items-center justify-end">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight text-right">Enemies</h2>
            </div>
          </div>
          <div className="flex flex-col pb-4 items-end space-y-4">
            {opponents
              .filter(char => !char.defeated)
              .map(char => (
                <Opponent key={char.id} {...char} />
              ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          {activeAbilities.map(ability => (
            <Button
              key={ability.id}
              variant={ability.id === selectedAbility ? '' : 'secondary'}
              onClick={() => setSelectedAbility(ability.id)}
            >
              {ability.name}
            </Button>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <attackFetcher.Form method="post">
            <input name="attempt" value={id} type="hidden" readOnly />
            <input name="ability" value={selectedAbility} type="hidden" readOnly />
            <input name="target" value={target} type="hidden" readOnly />
            <Button type="submit">Attack</Button>
          </attackFetcher.Form>
        </div>
      </div>
    </AttemptContext.Provider>
  );
}
