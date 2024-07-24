import React from "react";

import './modal.css';
import {Counterparty} from "../../../model/Counterparty";

import closeIcon from '../../../../resources/close-icon.svg';

import {FormCounterparty} from "./form/Form";

type ModalProps = {
    close : () => void;
    counterparty?: Counterparty
}

export const Modal: React.FC<ModalProps> = (props:ModalProps) => {
    return (
        <>
        <div tabIndex={-1} className="modal">
            <div className="m-sub">
                <div className="m-content">
                    <div className="m-header">
                        <h3 className="m-header-title">Контрагент</h3>
                        <button type="button" onClick={props.close} className="m-header-close-button">
                            <img src={closeIcon} alt={"Закрыть"} width="10" height="10"/>
                        </button>
                    </div>
                    <FormCounterparty counterparty={props.counterparty} closeModal={props.close}/>
                </div>
            </div>
        </div>
        <div className={"m-back"}></div>
        </>
    )
}