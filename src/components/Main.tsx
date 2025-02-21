import {NavigationContainer} from '@react-navigation/native';
import React, {Dispatch, SetStateAction, createContext, useState} from 'react';

import StackNavigator from '../navigation/StackNavigator';
import {User} from '@react-native-google-signin/google-signin';

interface LoginContextType {
  userInfo: User;
  setUserInfo: Dispatch<SetStateAction<User>>;
  loggedIn: boolean;
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
}

export const LoginContext = createContext<LoginContextType>(
  {} as LoginContextType,
);

const Main = () => {
  const [userInfo, setUserInfo] = useState<User>({} as User);
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <LoginContext.Provider
      value={{userInfo, setUserInfo, loggedIn, setLoggedIn}}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </LoginContext.Provider>
  );
};

export default Main;
