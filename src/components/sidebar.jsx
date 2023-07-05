import { RiDashboardFill, RiUserFill } from 'react-icons/ri';
import { gql } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../lib/user';
import { client } from '../client';

const NavItem = ({ children, href, icon }) => {
  return (
    <Link className="flex items-center gap-5 hover:bg-slate-100 p-2" to={href}>
      {icon({ className: 'w-6 h-6 fill-gray-600' })}
      <span>{children}</span>
    </Link>
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
    <aside className="basis-48 p-4 flex flex-col">
      <h1 className="font-bold text-3xl py-4">
        <Link to="/">GOC</Link>
      </h1>
      <hr />
      <nav className="flex flex-col gap-2 py-4 grow">
        <NavItem href="/" icon={RiDashboardFill}>
          Lobby
        </NavItem>
        <NavItem href="/characters" icon={RiUserFill}>
          Characters
        </NavItem>
      </nav>

      {user && (
        <div className="">
          <p className="">{user.name}</p>
          <button
            onClick={async () => {
              await client.mutate({ mutation: LOGOUT_MUTATION });
              navigate('/login');
            }}
          >
            Log Out
          </button>
        </div>
      )}
    </aside>
  );
}
