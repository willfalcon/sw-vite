import { getUser } from '../../components/auth/user';

export default async function loginLoader() {
  const user = await getUser();
  return user;
}
