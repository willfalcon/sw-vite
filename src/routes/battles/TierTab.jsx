import { NavLink } from 'react-router-dom';

const TierTab = ({ tier }) => (
  <NavLink
    className={({ isActive }) =>
      `-mb-px border-b ${
        isActive ? 'border-current text-cyan-500' : 'border-transparent'
      } p-4 hover:text-cyan-500 relative after:h-3 after:absolute after:border-r after:border-blue-600 after:border-opacity-50 after:top-1/2 after:-translate-y-1/2 after:right-0`
    }
    to={`/battles/light-side/${tier}`}
  >
    {tier}
  </NavLink>
);

export default TierTab;
