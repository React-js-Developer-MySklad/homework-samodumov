import {Counterparty} from "../model/Counterparty";

export interface CounterpartyContextType {
    counterparties: Counterparty[];
    saveCounterparty: (counterparty: Counterparty) => void;
    dropCounterparty: (counterparty: Counterparty) => void;
}