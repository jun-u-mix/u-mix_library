/* eslint-disable prettier/prettier */
import React, { createContext } from 'react'
import styles from './container.module.scss'

export const DarkContext = createContext()

export default function ContainerUmix({
        children,
        dark,
    }) {

    return (
        <div className={styles.container + ' ' + (dark ? styles.container_dark : styles.container_light)}>
            <DarkContext.Provider value={dark}>
                {children}
            </DarkContext.Provider>
        </div>
    )
}