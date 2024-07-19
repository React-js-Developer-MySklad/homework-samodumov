import React, {createContext, ReactNode, useEffect, useState,} from 'react';

import {Counterparty} from "../model/Counterparty";
import {CounterpartyContextType} from "./CounterpartyContextType";
import {
    ensureCounterparty,
    getAllCounterparties,
    removeCounterparty,
} from "../backend/BackendService";


export const CounterpartyContext = createContext<CounterpartyContextType>(undefined);

export const CounterpartyContextProvider = ({ children }: { children: ReactNode }) => {

    const [counterparties, setCounterparties] = useState<Counterparty[]>([]);

    useEffect(() => {
        getAllCounterparties().then(res => res.json()).then(setCounterparties);
    }, []);

    const dropCounterparty = (counterparty: Counterparty) => {
        removeCounterparty(counterparty)
            .then(res => res.json())
            .then(ignore => setCounterparties(counterparties.filter(c => c.id !== counterparty.id)));
    }

    const saveCounterparty = (counterparty: Counterparty) => {
        ensureCounterparty(counterparty)
            .then(res => res.json())
            .then(c => {
                const existingCounterparty = counterparties.find(e => e.id === c.id);
                if (existingCounterparty !== undefined) {
                    setCounterparties(counterparties.map(el => {
                        if (el.id === c.id) {
                            return c;
                        }
                        return el;
                    }))
                } else {
                    setCounterparties([c, ...counterparties]);
                }
            })
    }

    return (
        <CounterpartyContext.Provider value={{counterparties, dropCounterparty, saveCounterparty}}>
            {children}
        </CounterpartyContext.Provider>
    );
};