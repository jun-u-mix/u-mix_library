/* eslint-disable prettier/prettier */
import React, {useContext, Fragment}  from 'react'
import {DarkContext} from '../container/Container'
import styles from './input.module.scss'

export default function InputUmix(
    {
        className,
        style,
        dark,
        onChange,
        stretched,
        type,
        placeholder,
    }) {

    const darkContainer  = useContext(DarkContext)
    
    return (
        <>
            <input 
                type="text"
                style={style} 
                className={
                    styles.input + " " + 
                    (dark == undefined ? (darkContainer ? styles.input_dark : styles.input_light) : (dark ? styles.input_dark : styles.input_light)) + " " +
                    (stretched ? styles.input_stretched : "") + " " +
                    (type === "rounded" ? styles.input_rounded : 
                        (type === "send_message" ? styles.input_send_message : "")
                    ) + " " +
                    (className ? className : "")
                }
                onChange={onChange}
                placeholder={placeholder}
            />
            {
                type === "send_message"
                ?
                    <div className={styles.send_btn}>
                        <svg width={25} height={25} viewBox="0 0 25 25" fill="none">
                            <path d="M0.0118862 1.78564L0 10.119L17.8571 12.4999L0 14.8809L0.0118862 23.2142L25 12.4999L0.0118862 1.78564Z" fill="#656565" />
                        </svg>
                    </div>
                :
                    null
            }
        </>
    )
}