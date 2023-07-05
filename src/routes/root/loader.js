import { getUser } from '../../components/auth/user';

export async function loader() {
  const user = await getUser();
  return { user };
}
