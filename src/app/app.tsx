import React, {useEffect, useState} from "react";

import {Header} from "./components/header/Header";
import {Modal} from "./components/contragents/modal/Modal";

import {ensureCounterparty, getAllCounterparties, removeCounterparty} from "./backend/BackendService";
import {Table} from "./components/contragents/table/Table";
import {Counterparty} from "./model/Counterparty";

import './app.css';
import {Footer} from "./components/footer/Footer";

export const App: React.FC = () => {

    const [isModalVisible, setShowModal] = useState(false);
    const [selectedCounterparty, setSelectedCounterparty] = useState<Counterparty>();
    const [counterparties, setCounterparties] = useState<Counterparty[]>([]);

    useEffect(() => {
        getAllCounterparties().then(setCounterparties);
    }, []);

    function openModalWithSelectedCounterparty(counterparty?: Counterparty) {
        setSelectedCounterparty(counterparty);
        setShowModal(true);
    }

    function dropCounterparty(counterparty: Counterparty) {
        removeCounterparty(counterparty).then(setCounterparties);
    }

    function saveCounterparty(counterparty: Counterparty) {
        ensureCounterparty(counterparty).then(setCounterparties)
    }

    return (
        <>
            <Header openModal={openModalWithSelectedCounterparty}/>
            <main>
                <Table openModal={openModalWithSelectedCounterparty} dropCounterparty={dropCounterparty} counterparties={counterparties}></Table>
            </main>
            {isModalVisible && <Modal counterparty={selectedCounterparty} close={() => setShowModal(false)} saveCounterparty={saveCounterparty}></Modal>}
            <Footer/>
        </>
    )
}