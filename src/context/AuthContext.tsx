import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useState,
} from 'react';

type AuthContextType = {
  isAuthorized: boolean;
  setIsAuthorized: Dispatch<SetStateAction<boolean>>;
  userLogin: string;
  setUserLogin: Dispatch<SetStateAction<string>>;
  userPassword: string;
  setUserPassword: Dispatch<SetStateAction<string>>;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

type Props = {
  children?: React.ReactNode;
};

const AuthProvider: FC<Props> = ({children}) => {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [userLogin, setUserLogin] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');

  return (
    <AuthContext.Provider
      value={{
        isAuthorized,
        setIsAuthorized,
        userLogin,
        setUserLogin,
        userPassword,
        setUserPassword,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
export {AuthContext, AuthProvider};
