import React, {useContext}  from 'react'
import {DarkContext} from '../../container/Container'
import styles from './login.module.scss'

export default function LoginUmix(
    {
        className,
        style,
        onClick,
        type,
        dark,
    }) {

    const darkContainer = useContext(DarkContext)
    
    return (
        <div
            style={style}
            className={
                styles.main + " " +
                (className ? className : "")
            }
            onClick={onClick}
        >
            {
                type === 'fill'
                ?
                    <svg width={35} height={35} viewBox="0 0 35 35" fill="none">
                        <g clipPath="url(#clip0)">
                            <path className={styles.path} d="M15.3125 30.6248H21.1458C21.5483 30.6248 21.875 30.2981 21.875 29.8956C21.875 29.4931 21.5483 29.1665 21.1458 29.1665H15.3125C14.1065 29.1665 13.125 28.185 13.125 26.979V23C13.125 22.5975 12.7983 22.2002 12.3958 22.2002C11.9933 22.2002 11.6667 22.5975 11.6667 23V26.979C11.6667 28.9886 13.3015 30.6248 15.3125 30.6248Z" fill={(dark === undefined ? (darkContainer ? "white" : "#292929") : (dark ? "white" : "#292929"))} />
                            <path className={styles.path} d="M15.3125 16.0413H0.729166C0.326666 16.0413 0 15.7147 0 15.3122C0 14.9097 0.326666 14.583 0.729166 14.583H15.3125C15.715 14.583 16.0417 14.9097 16.0417 15.3122C16.0417 15.7147 15.715 16.0413 15.3125 16.0413Z" fill={(dark === undefined ? (darkContainer ? "white" : "#292929") : (dark ? "white" : "#292929"))} />
                            <path className={styles.path} d="M23.3333 35C23.6542 35 23.9677 34.946 24.2638 34.841L32.9992 31.9287C34.195 31.5306 35 30.4194 35 29.1667V2.91667C35 1.30813 33.6919 0 32.0833 0C31.7596 0 31.4446 0.0539583 31.1515 0.160417L22.4175 3.07125C21.2217 3.46792 20.4167 4.57917 20.4167 5.83333V32.0833C20.4167 33.6919 21.7248 35 23.3333 35Z" fill={(dark === undefined ? (darkContainer ? "white" : "#292929") : (dark ? "white" : "#292929"))} />
                            <path className={styles.path} d="M12.3958 8.37C12.7983 8.37 13.125 7.9025 13.125 7.5V3.64583C13.125 2.43979 14.1065 1.45833 15.3125 1.45833H32.0833C32.4858 1.45833 32.8125 1.13167 32.8125 0.729167C32.8125 0.326667 32.4858 0 32.0833 0H15.3125C13.3015 0 11.6667 1.63625 11.6667 3.64583V7.5C11.6667 7.9025 11.9933 8.37 12.3958 8.37Z" fill={(dark === undefined ? (darkContainer ? "white" : "#292929") : (dark ? "white" : "#292929"))} />
                            <path className={styles.path} d="M10.7293 20.87C10.5426 20.87 10.3559 20.8094 10.213 20.6896C10.2131 18.5793 10.2128 16.9676 10.2129 15.2338C10.2129 13.5 10.2129 11.2523 10.213 9.93074C10.4974 9.68975 10.9597 9.68975 11.2441 9.93074L17.0774 14.8739C17.3618 15.1149 17.3618 15.5066 17.0774 15.7476L11.2441 20.6908C11.1026 20.8094 10.9159 20.87 10.7293 20.87Z" fill={(dark === undefined ? (darkContainer ? "white" : "#292929") : (dark ? "white" : "#292929"))} />
                        </g>
                    </svg>
                :
                    <svg width={35} height={35} viewBox="0 0 35 35" fill="none">
                        <g clipPath="url(#clip0)">
                            <path className={styles.path} d="M15.3125 30.6248H21.1458C21.5483 30.6248 21.875 30.2981 21.875 29.8956C21.875 29.4931 21.5483 29.1665 21.1458 29.1665H15.3125C14.1065 29.1665 13.125 28.185 13.125 26.979V23C13.125 22.5975 12.7983 22.2002 12.3958 22.2002C11.9933 22.2002 11.6667 22.5975 11.6667 23V26.979C11.6667 28.9886 13.3015 30.6248 15.3125 30.6248Z" fill={(dark === undefined ? (darkContainer ? "white" : "#292929") : (dark ? "white" : "#292929"))} />
                            <path className={styles.path} d="M15.3125 16.0413H0.729166C0.326666 16.0413 0 15.7147 0 15.3122C0 14.9097 0.326666 14.583 0.729166 14.583H15.3125C15.715 14.583 16.0417 14.9097 16.0417 15.3122C16.0417 15.7147 15.715 16.0413 15.3125 16.0413Z" fill={(dark === undefined ? (darkContainer ? "white" : "#292929") : (dark ? "white" : "#292929"))} />
                            <path className={styles.path} d="M23.3333 35C23.6542 35 23.9677 34.946 24.2638 34.841L32.9992 31.9287C34.195 31.5306 35 30.4194 35 29.1667V2.91667C35 1.30813 33.6919 0 32.0833 0C31.7596 0 31.4446 0.0539583 31.1515 0.160417L22.4175 3.07125C21.2217 3.46792 20.4167 4.57917 20.4167 5.83333V32.0833C20.4167 33.6919 21.7248 35 23.3333 35ZM32.0833 1.45833C32.8883 1.45833 33.5417 2.11313 33.5417 2.91667V29.1667C33.5417 29.7908 33.1392 30.345 32.5383 30.5462L23.7883 33.4629C22.8317 33.8027 21.875 33.0371 21.875 32.0833V5.83333C21.875 5.20771 22.2775 4.65354 22.8783 4.45521L31.6283 1.53854C31.7785 1.48458 31.9317 1.45833 32.0833 1.45833Z" fill={(dark === undefined ? (darkContainer ? "white" : "#292929") : (dark ? "white" : "#292929"))} />
                            <path className={styles.path} d="M12.3958 8.37C12.7983 8.37 13.125 7.9025 13.125 7.5V3.64583C13.125 2.43979 14.1065 1.45833 15.3125 1.45833H32.0833C32.4858 1.45833 32.8125 1.13167 32.8125 0.729167C32.8125 0.326667 32.4858 0 32.0833 0H15.3125C13.3015 0 11.6667 1.63625 11.6667 3.64583V7.5C11.6667 7.9025 11.9933 8.37 12.3958 8.37Z" fill={(dark === undefined ? (darkContainer ? "white" : "#292929") : (dark ? "white" : "#292929"))} />
                            <path className={styles.path} d="M10.7295 20.87C10.5429 20.87 10.3562 20.8094 10.2133 20.6896C9.92891 20.4486 9.92891 20.0568 10.2133 19.8159L15.5304 15.3102L10.2133 10.8044C9.92891 10.5635 9.92891 10.1717 10.2133 9.93074C10.4977 9.68975 10.96 9.68975 11.2443 9.93074L17.0777 14.8739C17.362 15.1149 17.362 15.5066 17.0777 15.7476L11.2443 20.6908C11.1029 20.8094 10.9162 20.87 10.7295 20.87V20.87Z" fill={(dark === undefined ? (darkContainer ? "white" : "#292929") : (dark ? "white" : "#292929"))} />
                        </g>
                    </svg>
            }
        </div>
    )
}