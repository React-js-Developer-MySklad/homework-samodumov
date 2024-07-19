import React, {useState} from "react";

import {Header} from "./components/header/Header";
import {Modal} from "./components/contragents/modal/Modal";

import {Table} from "./components/contragents/table/Table";
import {Counterparty} from "./model/Counterparty";

import './app.css';
import {Footer} from "./components/footer/Footer";
import {CounterpartyContextProvider} from "./context/AppContextProvider";

export const App: React.FC = () => {

    const [isModalVisible, setShowModal] = useState(false);
    const [selectedCounterparty, setSelectedCounterparty] = useState<Counterparty>();

    function openModalWithSelectedCounterparty(counterparty?: Counterparty) {
        setSelectedCounterparty(counterparty);
        setShowModal(true);
    }

    return (
        <CounterpartyContextProvider>
            <Header openModal={openModalWithSelectedCounterparty}/>
            <main>
                <Table openModal={openModalWithSelectedCounterparty}></Table>
            </main>
            {isModalVisible && <Modal counterparty={selectedCounterparty} close={() => setShowModal(false)}></Modal>}
            <Footer/>
        </CounterpartyContextProvider>
    )
}