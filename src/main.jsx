import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import './index.css';

import ErrorPage from './error-page';
import { client } from './client';
import RequireAuth from './components/RequireAuth';

import Root, { rootLoader } from './routes/root';
import Lobby from './routes/lobby';
import Login, { loginLoader, loginAction } from './routes/login';
import Characters, { charactersLoader } from './routes/characters';

import Character, { characterLoader } from './routes/character';
import LightSideBattles, { loader as lightSideBattlesRootLoader } from './routes/battles/lightSideBattles';
import Battle from './routes/battle/battle';
import { loader as battleLoader } from './routes/battle/loader';

import Tier, { loader as tierLoader } from './routes/battles/Tier';
import Attempt, { attemptLoader, attemptAction } from './routes/attempt';
import AuthProvider from './components/auth/AuthProvider';
import Landing from './routes/landing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/login',
    element: <Login />,
    loader: loginLoader,
    // action: loginAction,
  },
  {
    path: '/game',
    element: (
      <RequireAuth>
        <Root />
      </RequireAuth>
    ),
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Lobby />,
          },

          {
            path: '/game/characters',
            element: <Characters />,
            loader: charactersLoader,
          },
          {
            path: '/game/character/:slug',
            element: <Character />,
            loader: characterLoader,
          },
          {
            path: '/game/battles',
            element: <Outlet />,
          },

          {
            path: '/game/battles/light-side',
            element: <LightSideBattles />,
            loader: lightSideBattlesRootLoader,
            children: [
              {
                path: '/game/battles/light-side/:tier',
                element: <Tier />,
                loader: tierLoader,
              },
            ],
          },
          {
            path: '/game/battles/light-side/:tier/:battle',
            element: <Battle />,
            loader: battleLoader,
          },
        ],
      },
    ],
  },
  {
    path: '/game/attempt/:id',
    element: <Attempt />,
    loader: attemptLoader,
    action: attemptAction,
  },
]);

const root = document.getElementById('root');

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </ApolloProvider>
    </React.StrictMode>
  );
}
