import React from 'react';
import { createContext, useState, useEffect, useRef, useMemo } from "react";

export const RacingContext = createContext({});

export const RacingProvider = ({ children }) => {
	const [headerFocus, setHeaderFocus] = useState(false);
	const [loading, setLoading] = useState(false);

	return (
		<RacingContext.Provider
			value={{
				headerFocus,
				setHeaderFocus,
				loading,
				setLoading
			}}
		>
			{children}
		</RacingContext.Provider>
	)
};
