import classNames from 'classnames';
import CharacterCard from './CharacterCard';
import { useAttemptContext } from './attemptContext';
import { useEffect, useState } from 'react';

export default function Friendly(props) {
  const { turn, damageToast, swapTurn, attackData } = useAttemptContext();
  const isActive = !swapTurn && turn === props.id;
  const isTarget = swapTurn && damageToast?.target.id === props.id;
  const { health, maxHealth, turnMeter } = props;
  const toast = damageToast && damageToast.target.id === props.id;
  const [currentHealth, setCurrentHealth] = useState(health);
  useEffect(() => {
    if (attackData && attackData.opponentTurn.target.id === props.id) {
      setCurrentHealth(attackData.opponentTurn.target.health);
    }
  }, [attackData, props.id]);

  return (
    <div className={classNames('rounded-lg w-64', isActive ? 'outline outline-green-400' : '', isTarget ? 'outline outline-red-400' : '')}>
      <CharacterCard {...props.character} rawHealth={currentHealth} maxHealth={maxHealth} turnMeter={turnMeter} toast={toast} />
    </div>
  );
}
