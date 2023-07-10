import { useRootContext } from '../../routes/root';
import { SlEnergy } from 'react-icons/sl';
import { SiCrystal } from 'react-icons/si';
import { GiTwoCoins } from 'react-icons/gi';
import { abbreviateNumber } from '../../lib/utils';

export default function TopBar() {
  const { user } = useRootContext();
  if (!user) {
    return <div className="h-10 px-4 bg-white border-b flex-[100%] flex items-center space-x-4 lg:space-x-6 fixed w-full top-0" />;
  }
  return (
    <div className="h-10 px-4 bg-white border-b flex-[100%] flex items-center space-x-4 lg:space-x-6 fixed w-full top-0">
      <span className="text-sm font-medium flex-1">Lvl: {user.playerLevel}</span>
      <span className="text-sm font-medium flex items-center">
        <SlEnergy /> {user.energy} / {user.maxEnergy}
      </span>
      <span className="text-sm font-medium flex items-center">
        <SiCrystal /> {abbreviateNumber(user.crystals)}
      </span>
      <span className="text-sm font-medium flex items-center">
        <GiTwoCoins /> {abbreviateNumber(user.credits)}
      </span>
    </div>
  );
}
