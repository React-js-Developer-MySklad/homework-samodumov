import React, {useContext, useState} from "react";

import '../modal.css';

import {Form, Field} from 'react-final-form'
import {Counterparty} from "../../../../model/Counterparty";
import {CounterpartyContext} from "../../../../context/AppContextProvider";
import {Button} from "../../../button/Button";

type FormProps = {
    closeModal : () => void;
    counterparty?: Counterparty
}

type FormValues = {
    name: string,
    inn: string,
    address: string,
    kpp: string
}

export const FormCounterparty: React.FC<FormProps> = (props:FormProps) => {

    const counterpartyId = props.counterparty ? props.counterparty.id : undefined;

    const [values, setValues] = useState<FormValues>({
        name: props.counterparty.name,
        inn: props.counterparty.inn,
        address: props.counterparty.address,
        kpp: props.counterparty.kpp
    });

    const {saveCounterparty} = useContext(CounterpartyContext);

    const handleSubmit = (values: FormValues) => {

        setValues(values);

        saveCounterparty(
            new Counterparty(
                counterpartyId,
                values.name,
                values.inn,
                values.address,
                values.kpp
            )
        );

        props.closeModal();
    }

    const nameValidator = (value:string) => {
        const requiredValidatorResult = requiredValidator(value);
        if (requiredValidatorResult) {
            return requiredValidatorResult;
        }

        if (!/^[a-zA-Zа-яА-я]+$/.test(value)) {
            return "Должны быть только буквы";
        }

        return undefined;
    }

    const requiredValidator = (value: any) => {
        if (!value) {
            return "Обязательное поле";
        }
        return undefined;
    }

    const innValidator = (value: number) => {
        const requiredValidatorResult = requiredValidator(value);
        if (requiredValidatorResult) {
           return requiredValidatorResult;
        }

        if (isNaN(value)) {
            return "Должно быть число";
        }

        if (value.toString().length !== 3) {
            return "Неправильное количество символов (должно быть 3)";
        }

        return undefined;
    }

    const addressValidator = (value: string) => {
       if (value && !value.includes('Москва')) {
           return "Адрес только Москва";
       }

        return undefined;
    }

    const kppValidator = (value: number) => {
        const requiredValidatorResult = requiredValidator(value);
        if (requiredValidatorResult) {
            return requiredValidatorResult;
        }

        if (isNaN(value)) {
            return "Должно быть число";
        }

        if (value.toString().length !== 6) {
            return "Неправильное количество символов (должно быть 6)";
        }

        return undefined;
    }

    return (
        <>
        {values && <Form onSubmit={handleSubmit} initialValues={values} keepDirtyOnReinitialize >
            { ({handleSubmit}) => {
                return (
                    <form className="m-form" onSubmit={handleSubmit}>
                        <div className="m-form-sub">
                            <div className={"m-form-field-container"}>
                                <Field name="name" type={"text"} validate={nameValidator}>
                                    {({input, meta}) => {
                                        return (
                                            <>
                                                <label className={"m-form-field-label"}>Имя</label>
                                                <input {...input} className={"m-form-field-input"} placeholder="Введите имя"/>
                                                {meta.error && meta.touched && <span>{meta.error}</span>}
                                            </>
                                        )
                                    }}
                                </Field>
                                <Field name="inn" type={"number"} validate={innValidator}>
                                    {({input, meta}) => {
                                        return (
                                            <>
                                                <label className={"m-form-field-label"}>ИНН</label>
                                                <input {...input} className={"m-form-field-input"} placeholder="Введите ИНН"/>
                                                {meta.error && meta.touched && <span>{meta.error}</span>}
                                            </>
                                        )
                                    }}
                                </Field>
                                <Field name="address" type={"text"} validate={addressValidator}>
                                    {({input, meta}) => {
                                        return (
                                            <>
                                                <label className={"m-form-field-label"}>Адрес</label>
                                                <input {...input} className={"m-form-field-input"} placeholder="Введите адрес"/>
                                                {meta.error && meta.touched && <span>{meta.error}</span>}
                                            </>
                                        )
                                    }}
                                </Field>
                                <Field name="kpp" type={"number"} validate={kppValidator}>
                                    {({input, meta}) => {
                                        return (
                                            <>
                                                <label className={"m-form-field-label"}>ИНН</label>
                                                <input {...input} className={"m-form-field-input"} placeholder="Введите КПП"/>
                                                {meta.error && meta.touched && <span>{meta.error}</span>}
                                            </>
                                        )
                                    }}
                                </Field>
                            </div>
                        </div>
                        <div className={"m-button-container"}>
                            <Button label={counterpartyId ? "Обновить Контрагента" : "Создать Контрагента"} type={"submit"} click={() => {}}/>
                            {counterpartyId && <Button label={"Отменить"} type={"button"} click={props.closeModal}/>}
                        </div>
                    </form>
                )
            }}
        </Form>
        }
        </>
    )
}