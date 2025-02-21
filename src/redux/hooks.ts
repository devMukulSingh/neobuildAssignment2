
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { TrootState } from "./store";

export const useAppSelector: TypedUseSelectorHook<TrootState> = useSelector;