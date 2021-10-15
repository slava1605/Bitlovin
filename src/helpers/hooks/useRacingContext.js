import React from 'react';
import { useContext } from "react";
import { RacingContext } from "../context/racingContext";

export const useRacingContext = () => {
  const context = useContext(RacingContext);
  return context;
};
