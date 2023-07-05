import { gql } from '@apollo/client';
import { client } from '../../client';
import { CURRENT_USER_QUERY } from '../../components/auth/user';
import { json, redirect } from 'react-router-dom';

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

export default async function login({ request }) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');
  const from = formData.get('from');
  const { data } = await client.mutate({
    mutation: LOGIN_MUTATION,
    variables: { email, password },
    // refetchQueries: [CURRENT_USER_QUERY]
  });
  console.log(data);
  if (data.authenticateUserWithPassword.item) {
    console.log('redirecting');
    redirect(from);
  } else {
    throw json({ message: 'Incorrect Login' }, { status: 401 });
  }
  return null;
}
