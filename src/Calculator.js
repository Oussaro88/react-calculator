import React, { useState } from 'react'
// import Addition from './Addition';

export default function Calculator() {
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
        } else {
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
            res = addition().toString();
            setFormValue(res);
            setIsAdding(false);
            setFormEntry1(res);
        }
        else if (isSubtracting) {
            res = subtraction().toString();
            setFormValue(res);
            setIsSubstracting(false);
            setFormEntry1(res);
        }
        else if (isMultiplying) {
            res = multiplication().toString();
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

    const addition = () => {
        return Number(formEntry1) + Number(formEntry2);
    }

    const subtraction = () => {
        return Number(formEntry1) - Number(formEntry2);
    }

    const multiplication = () => {
        return Number(formEntry1) * Number(formEntry2);
    }

    const division = () => {
        if (formEntry2 === '0') {
            setFormValue("ERROR");
        }
        else {
            return Number(formEntry1) / Number(formEntry2);
        }
    }

    const onAddition = () => { //when cliking on button
        if (!isAdding) {
            setIsAdding(true);
            setFormValue('0');
        }
        else {
            setFormEntry1(formValue);
        }
    }
    const onSubtraction = () => { //when cliking on button
        if (!isSubtracting) {
            setIsSubstracting(true);
            setFormValue('0');
        }
        else {
            setFormEntry1(formValue);
        }
    }
    const onMultiplication = () => { //when cliking on button
        if (!isMultiplying) {
            setIsMultiplying(true);
            setFormValue('0');
        }
        else {
            setFormEntry1(formValue);
        }
    }
    const onDivision = () => { //when cliking on button
        if (!isDividing) {
            setIsDiving(true);
            setFormValue('0');
        }
        else {
            setFormEntry1(formValue);
        }
    }

    console.log("fv", formValue);
    console.log("F", formEntry1);
    console.log("S", formEntry2);

    return (
        <div className="row">
            <div className='col-md-8 col-lg-5 my-5 mx-auto border border-5 text-center'>
                <span className="h1 text-center text-info">CALCULATOR</span>
                <form className='text-center my-5'>
                    <input type="number"
                        className='form-control-lg text-end h1'
                        value={formValue}
                        disabled />
                </form>
                <div className="card d-flex flex-row my-3">
                    <div className="col">
                        <div className='d-flex flex-row flex-wrap text-center'>
                            <div className="col-4">
                                <button className="btn btn-primary  btn-lg rounded rounded-pill my-2"
                                    onClick={updateFormValue}
                                    value='1'
                                >1</button>
                            </div>
                            <div className="col-4">
                                <button className="btn btn-primary  btn-lg rounded rounded-pill my-2"
                                    onClick={updateFormValue}
                                    value='2'
                                >2</button>
                            </div>
                            <div className="col-4">
                                <button className="btn btn-primary  btn-lg rounded rounded-pill my-2"
                                    onClick={updateFormValue}
                                    value='3'
                                >3</button>
                            </div>
                            <div className="col-4">
                                <button className="btn btn-primary  btn-lg rounded rounded-pill my-2"
                                    onClick={updateFormValue}
                                    value='4'
                                >4</button>
                            </div>
                            <div className="col-4">
                                <button className="btn btn-primary  btn-lg rounded rounded-pill my-2"
                                    onClick={updateFormValue}
                                    value='5'
                                >5</button>
                            </div>
                            <div className="col-4">
                                <button className="btn btn-primary  btn-lg rounded rounded-pill my-2"
                                    onClick={updateFormValue}
                                    value='6'
                                >6</button>
                            </div>
                            <div className="col-4">
                                <button className="btn btn-primary  btn-lg rounded rounded-pill my-2"
                                    onClick={updateFormValue}
                                    value='7'
                                >7</button>
                            </div>
                            <div className="col-4">
                                <button className="btn btn-primary  btn-lg rounded rounded-pill my-2"
                                    onClick={updateFormValue}
                                    value='8'
                                >8</button>
                            </div>
                            <div className="col-4">
                                <button className="btn btn-primary  btn-lg rounded rounded-pill my-2"
                                    onClick={updateFormValue}
                                    value='9'
                                >9</button>
                            </div>
                            <div className="col-4">
                                <button className="btn btn-primary  btn-lg rounded rounded-pill my-2"
                                    onClick={updateFormValue}
                                    value='0'
                                >0</button>
                            </div>
                            <div className="col-4">
                                <button className="btn btn-primary  btn-lg rounded rounded-pill my-2"
                                    onClick={updateFormValue}
                                    value='.'
                                >.</button>
                            </div>
                            <div className="col-4">
                                <button className="btn btn-primary  btn-lg rounded rounded-pill my-2"
                                    onClick={deleteLastEntry}
                                >C</button>
                            </div>
                            <div className="col-6">
                                <button className="btn btn-danger  btn-lg rounded rounded-pill my-2 w-75"
                                    onClick={clearForm}
                                >RESET</button>
                            </div>
                            <div className="col-6">
                                <button className="btn btn-success  btn-lg rounded rounded-pill my-2 w-75"
                                    onClick={result}
                                    value="="
                                >=</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 d-flex flex-column text-center border">
                        <div className="col">
                            <div
                                onClick={onAddition}
                                className="btn btn-warning  btn-lg rounded rounded-pill my-2">+</div>
                        </div>
                        <div className="col">
                            <div
                                onClick={onSubtraction}
                                className="btn btn-warning  btn-lg rounded rounded-pill my-2">-</div>
                        </div>
                        <div className="col">
                            <div
                                onClick={onMultiplication}
                                className="btn btn-warning  btn-lg rounded rounded-pill my-2">x</div>
                        </div>
                        <div className="col">
                            <div
                                onClick={onDivision}
                                className="btn btn-warning  btn-lg rounded rounded-pill my-2">/</div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}