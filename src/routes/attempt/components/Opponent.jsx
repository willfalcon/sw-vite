import classNames from 'classnames';
import CharacterCard from './CharacterCard';
import { useAttemptContext } from './attemptContext';
import { useEffect, useState } from 'react';

export default function Opponent(props) {
  const { target, setTarget, damageToast, swapTurn, attackData } = useAttemptContext();
  const isTarget = !swapTurn && target === props.id;
  const isActive = swapTurn && damageToast?.attacker.id === props.id;
  const { maxHealth, health, turnMeter } = props;
  const toast = damageToast && damageToast.target.id === props.id;
  const [currentHealth, setCurrentHealth] = useState(health);

  useEffect(() => {
    if (attackData && attackData.playerTurn.target.id === props.id) {
      setCurrentHealth(attackData.playerTurn.target.health);
    }
  }, [attackData, props.id]);

  return (
    <>
      <button
        className="w-64"
        onClick={() => {
          setTarget(props.id);
        }}
      >
        <CharacterCard
          {...props.character}
          turnMeter={turnMeter}
          className={classNames(isTarget ? 'outline' : '', isActive ? 'outline outline-green-400' : '')}
          reverse
          toast={toast}
          rawHealth={currentHealth}
          maxHealth={maxHealth}
        />
      </button>
    </>
  );
}
