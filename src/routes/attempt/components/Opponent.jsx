import { useState } from 'react';
import CharacterCard from './CharacterCard';
import { useAttemptContext } from './attemptContext';

export default function Opponent(props) {
  const { target, setTarget } = useAttemptContext();
  const isTarget = target === props.id;
  const { maxHealth, health, turnMeter } = props;

  return (
    <button
      className="w-64"
      onClick={() => {
        setTarget(props.id);
      }}
    >
      <CharacterCard
        {...props.character}
        health={(health / maxHealth) * 100}
        turnMeter={turnMeter}
        className={isTarget ? 'outline' : ''}
        reverse
      />
    </button>
  );
}
