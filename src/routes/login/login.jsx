import { Navigate, useFetcher, useLoaderData, useLocation, useNavigate, Form } from 'react-router-dom';
import { gql } from '@apollo/client';
import { client } from '../../client';
import { CURRENT_USER_QUERY } from '../../components/auth/user';
import { useState } from 'react';

const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        sessionToken
        item {
          id
          name
          email
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        message
      }
    }
  }
`;

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const user = useLoaderData();
  const [error, setError] = useState(false);
  const fetcher = useFetcher();

  if (user) {
    return <Navigate to={from} replace />;
  }

  // async function handleSubmit(event) {
  //   event.preventDefault();
  //   const formData = new FormData(event.currentTarget);
  //   const variables = Object.fromEntries(formData);
  //   const { data } = await client.mutate({ mutation: LOGIN_MUTATION, variables, refetchQueries: [CURRENT_USER_QUERY] });
  //   console.log(data);
  //   if (data.authenticateUserWithPassword.item) {
  //     navigate(from);
  //   } else {
  //     setError(data.authenticateUserWithPassword.message);
  //   }
  // }

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96 mx-auto">
        <h1 className="text-3xl text-center">Log In</h1>
        <Form className="" method="post">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              id="email"
              label="Email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Email"
              autoFocus
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              required
              id="password"
              label="Password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Password"
            />
          </div>
          <input type="hidden" readOnly name="from" value={from} />
          {error && <p className="text-red-500 text-xs italic my-4">{error}</p>}
          <div className="flex items-center justify-between">
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"'
              type="submit"
            >
              Sign In
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
