import { RiDashboardFill, RiUserFill } from 'react-icons/ri';
import { FaPeopleArrows } from 'react-icons/fa';
import { gql } from '@apollo/client';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useUser } from '../auth/user';
import { client } from '../../client';

const NavItem = ({ children, href, icon }) => {
  return (
    <NavLink
      className={({ isActive, isPending }) =>
        `flex items-center gap-2 rounded-lg hover:bg-gray-100 ${isActive ? 'bg-gray-100' : ''} px-4 py-2 text-gray-700`
      }
      to={href}
    >
      {icon && icon({ className: 'w-5 h-5 opacity-75' })}
      <span className="text-sm font-medium">{children}</span>
    </NavLink>
  );
};

const LOGOUT_MUTATION = gql`
  mutation LOGOUT_MUTATION {
    endSession
  }
`;

export default function Sidebar() {
  const user = useUser();
  const navigate = useNavigate();
  return (
    <aside className="basis-48 flex h-screen flex-col justify-between border-e bg-white">
      <div className="px-4 py-6">
        <Link to="/" className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
          GOC
        </Link>
        <nav aria-label="Main Nav" className="mt-6 flex flex-col space-y-1">
          <NavItem href="/" icon={RiDashboardFill}>
            Lobby
          </NavItem>
          <NavItem href="/characters" icon={RiUserFill}>
            Characters
          </NavItem>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <div className="flex items-center gap-2">
                <FaPeopleArrows className="h-5 w-5 opacity-75" />
                <span className="text-sm font-medium">Battles</span>
              </div>
              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>
            <nav aria-label="Battles Nav" className="mt-2 flex flex-col px-4">
              <NavItem href="/battles/light-side">Light Side Battles</NavItem>
              <NavItem href="/battles/dark-side">Dark Side Battles</NavItem>
            </nav>
          </details>
        </nav>
      </div>

      {user && (
        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
          <div className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
            <span className="h-10 w-10 rounded-full">{user.name[0]}</span>
            <div>
              <p className="text-xs">
                <strong className="block font-medium">{user.name}</strong>
                <button
                  onClick={async () => {
                    await client.mutate({ mutation: LOGOUT_MUTATION });
                    navigate('/login');
                  }}
                >
                  Log Out
                </button>
              </p>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
