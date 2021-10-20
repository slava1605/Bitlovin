import React from 'react';
import { createContext, useState, useEffect, useRef, useMemo } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState();
	const [auth, setAuth] = useState(false);

	return (
		<AuthContext.Provider
			value={{ auth, setAuth, user, setUser, loading, setLoading }}
		>
			{children}
		</AuthContext.Provider>
	)
};
