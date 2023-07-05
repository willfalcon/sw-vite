import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import Root from './routes/root';
import { loader as rootLoader } from './routes/root/loader';

import './index.css';
import ErrorPage from './error-page';
import Lobby from './routes/lobby';
import { client } from './client';
import RequireAuth from './components/RequireAuth';
import Login, { loginLoader, loginAction } from './routes/login';
import Characters from './routes/characters';
import { loader as charactersLoader } from './routes/characters/loader';
import Character from './routes/character';
import { loader as characterLoader } from './routes/character/loader';
import LightSideBattles, { loader as lightSideBattlesRootLoader } from './routes/battles/lightSideBattles';
import Battle from './routes/battle/battle';
import { loader as battleLoader } from './routes/battle/loader';
import DarkSideBattles from './routes/battles/darkSideBattles';
import Header from './components/Header';
import Tier, { loader as tierLoader } from './routes/battles/Tier';
import Attempt from './routes/attempt/attempt';
import { loader as attemptLoader } from './routes/attempt/loader';
import { action as attemptAction } from './routes/attempt/action';
import AuthProvider from './components/auth/AuthProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: (
              <RequireAuth>
                <Lobby />
              </RequireAuth>
            ),
          },
          {
            path: '/login',
            element: <Login />,
            loader: loginLoader,
            action: loginAction,
          },
          {
            path: '/characters',
            element: (
              <RequireAuth>
                <Characters />
              </RequireAuth>
            ),
            loader: charactersLoader,
          },
          {
            path: '/character/:slug',
            element: (
              <RequireAuth>
                <Character />
              </RequireAuth>
            ),
            loader: characterLoader,
          },
          {
            path: '/battles',
            element: (
              <RequireAuth>
                <Outlet />
              </RequireAuth>
            ),
          },

          {
            path: '/battles/light-side',
            element: (
              <RequireAuth>
                <LightSideBattles />
              </RequireAuth>
            ),
            loader: lightSideBattlesRootLoader,
            children: [
              {
                path: '/battles/light-side/:tier',
                element: (
                  <RequireAuth>
                    <Tier />
                  </RequireAuth>
                ),
                loader: tierLoader,
              },
            ],
          },
          {
            path: '/battles/light-side/:tier/:battle',
            element: (
              <RequireAuth>
                <Battle />
              </RequireAuth>
            ),
            loader: battleLoader,
          },
        ],
      },
    ],
  },
  {
    path: '/attempt/:id',
    element: (
      <RequireAuth>
        <Attempt />
      </RequireAuth>
    ),
    loader: attemptLoader,
    action: attemptAction,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ApolloProvider>
  </React.StrictMode>
);
