import { useState } from 'react';
import { Link } from 'react-router-dom';
import TierTab from './TierTab';
import Header from '../../components/Header';

export default function DarkSideBattles() {
  const [active, setActive] = useState(1);
  return (
    <div>
      <Header title="Dark Side Battles">
        <nav className="flex border-b border-gray-100 text-sm font-medium">
          <TierTab tier={1} active={active === 1} setActive={setActive} />
          <TierTab tier={2} active={active === 2} setActive={setActive} />
          <TierTab tier={3} active={active === 3} setActive={setActive} />
          <TierTab tier={4} active={active === 4} setActive={setActive} />
          <TierTab tier={5} active={active === 5} setActive={setActive} />
          <TierTab tier={6} active={active === 6} setActive={setActive} />
        </nav>
      </Header>

      <div>
        <div className="relative mt-4 after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-400">
          <ol className="relative z-10 flex justify-between text-sm font-medium text-gray-500">
            <li className="flex items-center justify-center gap-2 p-2">
              <Link
                to="/light-side-battle/1/A"
                className="h-8 w-8 rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white text-center font-bold flex justify-center items-center"
              >
                A
              </Link>
            </li>

            <li className="flex items-center justify-center gap-2 p-2">
              <span className="h-8 w-8 rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white text-center font-bold flex justify-center items-center">
                B
              </span>
            </li>
            <li className="flex items-center justify-center gap-2 p-2">
              <span className="h-8 w-8 rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white text-center font-bold flex justify-center items-center">
                C
              </span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
