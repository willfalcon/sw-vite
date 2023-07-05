import classNames from 'classnames';
import CharacterCard from './CharacterCard';
import { useAttemptContext } from './attemptContext';

export default function Friendly(props) {
  const { turn } = useAttemptContext();
  const isActive = turn === props.id;
  const { health, maxHealth, turnMeter } = props;
  return (
    <div className={classNames('rounded-lg w-64', isActive ? 'outline outline-green-400' : '')}>
      <CharacterCard {...props.character} health={(health / maxHealth) * 100} turnMeter={turnMeter} />
    </div>
  );
}
