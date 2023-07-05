import { useState } from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import TierTab from './TierTab';
import Header from '../../components/Header';
import { gql } from '@apollo/client';
import { client } from '../../client';

const TIERS_QUERY = gql`
  query TiersQuery {
    battleTiers(where: { category: { title: { equals: "Light Side Battles" } } }) {
      tier
      id
    }
  }
`;

export async function loader({ params }) {
  const tiers = await client.query({ query: TIERS_QUERY });

  return tiers.data.battleTiers;
}

export default function LightSideBattles() {
  const tiers = useLoaderData();
  return (
    <div>
      <Header title="Light Side Battles">
        <nav className="flex border-b border-gray-100 text-sm font-medium">
          {tiers.map(({ tier, id }) => (
            <TierTab tier={tier} key={id} />
          ))}
        </nav>
      </Header>

      <Outlet />
    </div>
  );
}
