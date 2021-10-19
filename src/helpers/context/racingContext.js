import React from 'react';
import { createContext, useState, useEffect, useRef, useMemo } from "react";
import * as racingData from "../testRacing";

export const RacingContext = createContext({});

export const RacingProvider = ({ children }) => {
	const [headerFocus, setHeaderFocus] = useState(false);
	const [loading, setLoading] = useState(false);
	
	return (
		<RacingContext.Provider
			value={{
				entryRacingData: racingData.entryRacingData,
				scheduledRacingData: racingData.scheduledRacingData,
				resultsRacingData: racingData.resultsRacingData,
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
