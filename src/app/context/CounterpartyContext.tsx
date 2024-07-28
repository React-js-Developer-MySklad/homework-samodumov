import {useContext} from "react";
import {CounterpartyContext} from "./AppContextProvider";

export const useCounterpartyContext = () => {
    return useContext(CounterpartyContext);
};