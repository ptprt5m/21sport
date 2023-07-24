import React from 'react'
import classes from './Preloader.module.css'

export const Preloader = ({width = ''}) => (
        <div className={classes.ldsRollerWrapper}>
            <div className={classes.ldsRoller}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )