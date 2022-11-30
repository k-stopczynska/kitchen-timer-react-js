import React from 'react';
import react from 'react';
import classes from './TimerForm.modue.css';

const TimerForm = () => {

    const submitFormHandler = () => {
        console.log('submitting')
    }
    return (
        <React.Fragment>
            <h2>top-left-plate</h2>
        <form className={classes.form__control} type='submit' onSubmit={submitFormHandler}>
            <label htmlFor="user__input">set time in minutes</label>
            <input id="user__input" type="number" min="1" max="14000" step="1"></input>
            <button type="submit"></button>
        </form>
        </React.Fragment>
    )
}