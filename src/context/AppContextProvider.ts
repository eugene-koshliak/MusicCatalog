import {combineProviders} from 'react-combine-providers';

import {AuthProvider} from './AuthContext';

const storeContextsProviders = combineProviders();
storeContextsProviders.push(AuthProvider);

export const AppContextProviders = storeContextsProviders.master();
