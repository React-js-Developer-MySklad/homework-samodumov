import React, {useContext, useState} from "react";

import './modal.css';
import {Counterparty} from "../../../model/Counterparty";

import closeIcon from '../../../../resources/close-icon.svg';
import {Button} from "../../button/Button";
import {CounterpartyContext} from "../../../context/AppContextProvider";

type ModalProps = {
    close : () => void;
    counterparty?: Counterparty
}

export const Modal: React.FC<ModalProps> = (props:ModalProps) => {

    const [counterparty, setCounterparty] = useState<Counterparty>(props.counterparty);

    const {saveCounterparty} = useContext(CounterpartyContext);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        saveCounterparty(
            new Counterparty(
                counterparty.id,
                counterparty.name,
                counterparty.inn,
                counterparty.address,
                counterparty.kpp
            )
        );

        props.close();
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setCounterparty({ ...counterparty, [name]: value });
    }

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
                    <form className="m-form" onSubmit={handleSubmit}>
                        <div className="m-form-sub">
                            <div className={"m-form-field-container"}>
                                <label className={"m-form-field-label"}>Имя</label>
                                <input type="text" className={"m-form-field-input"} name="name" placeholder={"Введите имя"} required={true} value={counterparty && counterparty.name || ""} onChange={handleChange}/>
                                <label className={"m-form-field-label"}>ИНН</label>
                                <input type="number" className={"m-form-field-input"} name="inn" placeholder={"Введите ИНН"} required={true} value={counterparty && counterparty.inn || ""} onChange={handleChange}/>
                                <label className={"m-form-field-label"}>Адрес</label>
                                <input type="text" className={"m-form-field-input"} name="address" placeholder={"Введите адрес"} required={true} value={counterparty && counterparty.address || ""} onChange={handleChange}/>
                                <label className={"m-form-field-label"}>КПП</label>
                                <input type="number" className={"m-form-field-input"} name="kpp" placeholder={"Введите КПП"} required={true} value={counterparty && counterparty.kpp || ""} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className={"m-button-container"}>
                            <Button label={props.counterparty && props.counterparty.id ? "Обновить Контрагента" : "Создать Контрагента"} type={"submit"} click={() => {}}/>
                            {props.counterparty && props.counterparty.id && <Button label={"Отменить"} type={"button"} click={props.close}/>}
                        </div>
                    </form>

                </div>
            </div>
        </div>
        <div className={"m-back"}></div>
        </>
    )
}