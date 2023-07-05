import { useUser } from './user';
import { AuthContext } from './AuthContext';

export default function AuthProvider({ children }) {
  const user = useUser();

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
}
