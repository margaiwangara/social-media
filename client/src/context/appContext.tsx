import React, { createContext } from 'react';

const AppContext = createContext({
	currentUser: {
		isAuthenticated: false,
		user: {}
	},
	error: {}
});

export default AppContext;