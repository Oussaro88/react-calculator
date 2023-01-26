import React, { useState } from 'react'
import { Btn } from './App';


export default function Calculator() {

    const digits = '1234567890';
    const operators = '+-x/'

    const [formValue, setFormValue] = useState('0');   //calculator screen
    const [formEntry1, setFormEntry1] = useState('0'); //a
    const [formEntry2, setFormEntry2] = useState('0'); //b

    const [isAdding, setIsAdding] = useState(false);
    const [isSubtracting, setIsSubstracting] = useState(false);
    const [isMultiplying, setIsMultiplying] = useState(false);
    const [isDividing, setIsDiving] = useState(false);


    const updateFormValue = (event) => {
        if (event.target.value === '.') {
            if (!formValue.includes('.')) {
                if (formValue === '0') { //no entry
                    if (!isAdding && !isSubtracting && !isMultiplying && !isDividing) {
                        setFormValue(event.target.value); //update calculator screen
                        setFormEntry1(event.target.value); //store a
                    } else {
                        setFormValue(event.target.value); //update calculator screen
                        setFormEntry2(event.target.value); //store b
                    }
                } else { //one entry or more
                    const res = formValue + "" + event.target.value.toString(); //concatenate a with the new entries
                    setFormValue(res); //update screen
                    setFormEntry1(res); //store a

                    if (formValue >= 99999999) {
                        setFormValue(formValue);
                    }
                }
            }
        }
        else {
            if (formValue === '0') { //no entry
                if (!isAdding && !isSubtracting && !isMultiplying && !isDividing) {
                    setFormValue(event.target.value); //update calculator screen
                    setFormEntry1(event.target.value); //store a
                } else {
                    setFormValue(event.target.value); //update calculator screen
                    setFormEntry2(event.target.value); //store b
                }
            } else { //one entry or more
                const res = formValue + "" + event.target.value.toString(); //concatenate a with the new entries
                setFormValue(res); //update screen
                setFormEntry1(res); //store a

                if (formValue >= 99999999) {
                    setFormValue(formValue);
                }
            }
        }
    }


    const clearForm = () => { //Reset the calculator
        setFormValue('0');
        setFormEntry1('0');
        setFormEntry2('0'); //store b
    }

    const deleteLastEntry = () => {
        const newFormValue = formValue.slice(0, -1); // hadi ghir n9altha 3taha lia chat gpt
        newFormValue.length <= 0 ? setFormValue('0') : setFormValue(newFormValue);
    }

    const result = () => {
        let res = '0';
        if (isAdding) {
            res = (Number(formEntry1) + Number(formEntry2)).toString();
            setFormValue(res);
            setIsAdding(false);
            setFormEntry1(res);
        }
        else if (isSubtracting) {
            res = (Number(formEntry1) - Number(formEntry2)).toString();
            setFormValue(res);
            setIsSubstracting(false);
            setFormEntry1(res);
        }
        else if (isMultiplying) {
            res = (Number(formEntry1) * Number(formEntry2)).toString();
            setFormValue(res);
            setIsMultiplying(false);
            setFormEntry1(res);

        }
        else if (isDividing) {
            res = division().toString();
            setFormValue(res);
            setIsDiving(false);
            setFormEntry1(res);

        }
    }

    const division = () => {
        if (formEntry2 === '0') {
            setFormValue("ERROR");
        }
        else {
            return Number(formEntry1) / Number(formEntry2);
        }
    }

    const onOperating = (opValue) => {
        switch (opValue) {
            case '+':
                if (!isAdding) {
                    setIsAdding(true);
                    setFormValue('0');
                }
                else {
                    setFormEntry1(formValue);
                }
                break;
            case '-':
                if (!isSubtracting) {
                    setIsSubstracting(true);
                    setFormValue('0');
                }
                else {
                    setFormEntry1(formValue);
                }
                break;
            case 'x':
                if (!isMultiplying) {
                    setIsMultiplying(true);
                    setFormValue('0');
                }
                else {
                    setFormEntry1(formValue);
                }
                break;
            case '/':
                if (!isDividing) {
                    setIsDiving(true);
                    setFormValue('0');
                }
                else {
                    setFormEntry1(formValue);
                }
                break;
            default:
                break;
        }
    }

    return (
        <div className="row">
            <div className='col-md-8 col-lg-5 my-5 mx-auto border border-5 text-center'>
                <span className="h1 text-center text-info">CALCULATOR</span>
                <form className='text-center my-5'>
                    <input type="text"
                        className='form-control-lg text-end h1'
                        value={formValue}
                        disabled />
                </form>
                <div className="card d-flex flex-row my-3">
                    <div className="col">
                        <div className='d-flex flex-row flex-wrap text-center'>
                            {
                                digits.split("").map((value) => (
                                    <Btn key={value} value={value} onselect={updateFormValue} style={"btn btn-primary btn-lg rounded rounded-pill my-2"} />
                                ))
                            }
                            <Btn value={'.'} onselect={updateFormValue} style={"btn btn-primary btn-lg rounded rounded-pill my-2"} />
                            <Btn value={'='} onselect={result} style={"btn btn-success btn-lg rounded rounded-pill my-2"} />
                        </div>

                        <div className='d-flex flex-row flex-wrap text-center border'>
                            <Btn value={'C'} onselect={deleteLastEntry} style={"btn btn-danger btn-lg rounded rounded-pill my-2"} />
                            <Btn value={'RESET'} onselect={clearForm} style={"btn btn-danger btn-lg rounded rounded-pill my-2"} />
                            <Btn value={'x'} style={"btn btn-dark btn-lg rounded rounded-pill my-2 text-dark"} />
                        </div>
                    </div>
                    <div className="col-3 d-flex flex-column text-center border align-items-center justify-content-around">
                        {
                            operators.split("").map((value) => (
                                <Btn key={value} value={value} onselect={() => onOperating(value)} style={"btn btn-warning btn-lg rounded rounded-pill my-2"} />
                            ))
                        }
                    </div>
                </div>
            </div >
        </div >
    )
}