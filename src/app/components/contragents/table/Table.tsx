import React from "react";

import './table.css';
import {Counterparty} from "../../../model/Counterparty";

import closeIcon from '../../../../resources/close-icon.svg';

type TableProps = {
    openModal: (counterparty: Counterparty) => void;
    dropCounterparty: (counterparty: Counterparty) => void;
    counterparties: Array<Counterparty>;
}

export const Table: React.FC<TableProps> = (props:TableProps) => {
    return (
        <div className={"t-container-div"}>
            <table>
                <thead className={"t-head"}>
                <tr>
                    <th className={"t-column-w-3"}>Наименование</th>
                    <th className={"t-column-w-2"}>ИНН</th>
                    <th className={"t-column-w-2"}>Адрес</th>
                    <th className={"t-column-w-2"}>КПП</th>
                    <th className={"t-column-w-1"}>Удалить</th>
                </tr>
                </thead>
                <tbody>
                {
                    props.counterparties.map(c => {
                        return <tr onDoubleClick={() => props.openModal(c)} key={c.id}>
                            <th>{c.name}</th>
                            <th>{c.inn}</th>
                            <th>{c.address}</th>
                            <th>{c.kpp}</th>
                            <th scope="row" onClick={() => props.dropCounterparty(c)}>
                                <button className={"t-tr-delete"} type={"button"}>
                                    <img src={closeIcon} alt={"Удалить"} width={10} height={10}/>
                                </button>
                            </th>
                        </tr>
                    })
                }
                </tbody>
            </table>
        </div>
    )
}