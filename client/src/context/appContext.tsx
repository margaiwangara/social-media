import React, { createContext } from 'react';

const AppContext = createContext({
	user: {},
	error: {}
});

export default AppContext;