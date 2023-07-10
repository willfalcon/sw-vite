import { getUser } from '../../components/auth/user';

export async function rootLoader() {
  const user = await getUser();
  return { user };
}
