import React, { Fragment, useState } from 'react'
import { NavLink } from 'react-router-dom'
import IconUmix from '../icons/Icon'
import BurgerUmix from '../icons/burger/Burger'
import styles from './leftBar.module.scss'

let isLoaded = false;

export default function LeftBarUmix({
    darkContainer,
    dark,
    params,
    conditionIs,
    profileImg,
    profileLink,
    profileName,
    profileInfo,
    style,
    className
}) {

    const toggle = () => {
        setIsMenu(prev => !prev)
        isLoaded = true;
    }

    const [isMenu, setIsMenu] = useState(false);
    const [link, setLink] = useState(0);

    let links = params.map((param, i) => {
        if(conditionIs === param.condition) return <NavLink 
                    key={i} 
                    to={param.route}
                    className={
                        styles.full_link + " " +
                        (dark == undefined ? (darkContainer ? styles.dark : styles.light) : (dark ? styles.dark : styles.light)) + " " +
                        (param.danger ? styles.danger : "")
                    }
                    onClick={() => {
                        setIsMenu(false)
                        setLink(i);
                    }}
                >
                {param.text}
                <IconUmix 
                    dark={dark == undefined ? (darkContainer ? true : false) : (dark ? true : false)}
                    type={link === i ? "fill" : "outline"}
                    className={styles.icon}
                    name={param.name}
                />
            </NavLink>
    })

    return (
        <>
            <div className={styles.margin}></div>
            <div
                style={style}
                className={
                    styles.leftBar + " " +
                    (dark == undefined ? (darkContainer ? styles.dark : styles.light) : (dark ? styles.dark : styles.light)) + " " +
                    (isMenu ? styles.maxBar : styles.minBar) + " " +
                    (isLoaded ? styles.animate : "") + " " +
                    (className ? className : "")
                }
            >
                <div>
                    <BurgerUmix
                        className={
                            styles.burger + " " +
                            (isMenu ? styles.right : styles.left) + " " +
                            (isLoaded ? styles.animate : "")
                        }
                        dark={(dark == undefined ? darkContainer : dark)}
                        onClick={toggle}
                    />
                    {links}
                </div>
                {
                    conditionIs === "logined" 
                    &&
                        <div
                            className={
                                styles.bottom + " " +
                                (isMenu ? styles.right : styles.left) + " " +
                                (isLoaded ? styles.animate : "")
                            }
                        >
                            <NavLink 
                                to={profileLink}
                                onClick={() => setIsMenu(false)}
                            >
                                <div 
                                    style={{
                                        backgroundImage: `url(${profileImg})`
                                    }} 
                                    className={styles.profile_img}
                                ></div>
                            </NavLink>
                            <NavLink 
                                to={profileLink}
                                onClick={() => setIsMenu(false)}
                            >
                                <div 
                                    className={
                                        styles.profile_name + " " +
                                        (dark == undefined ? (darkContainer ? styles.dark : styles.light) : (dark ? styles.dark : styles.light))
                                    }
                                >{profileName}</div>
                            </NavLink>
                            <div 
                                className={
                                    styles.profile_info + " " +
                                    (dark == undefined ? (darkContainer ? styles.dark : styles.light) : (dark ? styles.dark : styles.light))
                                }>{profileInfo}
                            </div>
                        </div>
                }
            </div>
        </>
    )
}