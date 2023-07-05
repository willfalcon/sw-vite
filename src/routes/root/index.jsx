import { Outlet, useLoaderData } from 'react-router-dom';
import Sidebar from '../../components/layout/Sidebar';

import { RootContext } from './context';

export default function Root() {
  const { user } = useLoaderData();
  return (
    <RootContext.Provider value={{ user }}>
      <div id="wrapper" className="flex w-full min-h-full">
        <Sidebar />
        {/* <RequireAuth> */}
        <main className="bg-gray-100 flex-auto">
          <div className="p-6 container mx-auto">
            <Outlet />
          </div>
        </main>
        {/* </RequireAuth> */}
      </div>
    </RootContext.Provider>
  );
}
