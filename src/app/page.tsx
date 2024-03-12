'use client'
import styles from "./page.module.css";
import Svg from "@/components/Svg";
import {useState} from "react";
import Link from "next/link";

export default function Home() {
    const [value, setValue] = useState<string>('')
    return (
        <main className={styles.main}>
            <div className={styles.TcuCfd}>
                <Svg/>
                <div className={styles.severer}>
                    <div className={styles.leftHalf}>
                        <h1 style={{fontSize: '2rem', fontWeight: 400, marginTop: 24}}><span>Вход</span></h1>
                        <div style={{fontSize: '1rem', fontWeight: 400, marginTop: 16}}>
                            <span>Используйте аккаунт Google</span></div>
                    </div>
                    <div className={styles.rightHalf}>
                        <div className={styles.aboveSubmit}>
                            <div>
                                <div className={`${styles.input} ${value ? styles.inputIsntVoid : ''}`}
                                     data-label='Телефон или адрес эл. почты'>
                                    <input value={value} onChange={e => setValue(e.target.value)}/>
                                </div>
                                <div className={styles.aroundLink}>
                                    <Link className={styles.link} href='forgot'>Забыли адрес электронной почты?</Link>
                                </div>
                            </div>
                            <div style={{color: '#444746', fontSize: '0.875rem'}}>
                                Работаете на чужом компьютере? Используйте режим инкогнито.
                                <p><a href='https://support.google.com/accounts?p=signin_privatebrowsing&hl=ru'
                                      target='_blank' className={styles.someCringe}>
                                    Подробнее об использовании гостевого режима</a></p>
                            </div>
                        </div>
                        <div className={styles.submit}>
                            <Link href='create' className={styles.create}>Создать аккаунт</Link>
                            <Link href='congrat' className={styles.next}>Далее</Link>
                        </div>
                    </div>
                </div>
            </div>

            <footer className={styles.wmGw4}>
                <a href='https://support.google.com/accounts?hl=ru&p=account_iph'>
                    Русский
                </a>
                <div className={styles.secondHalf}>
                    <a target='_blank' href='https://support.google.com/accounts?hl=ru&p=account_iph'>
                        Справка
                    </a>
                    <a target='_blank' href='https://accounts.google.com/TOS?loc=UA&hl=ru&privacy=true'>
                        Конфиденциальность
                    </a>
                    <a target='_blank' href='https://accounts.google.com/TOS?loc=UA&hl=ru'>
                        Условия
                    </a>
                </div>
            </footer>
        </main>
    );
}
