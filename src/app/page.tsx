import Image from "next/image";
import styles from "./page.module.css";
import Aside from "@/components/aside";
import Svg from "@/components/Svg";

export default function Home() {
    return (
        <main className={styles.main}>
            <Aside/>
            <div className={styles.TcuCfd}>
                <Svg/>
                <div className={styles.severer}>
                    <div className={styles.leftHalf}>
                        <h1><span style={{fontSize: '2.25rem', fontWeight: 400, marginTop: 24}}>Вход</span></h1>
                        <div style={{fontSize: '1rem', fontWeight: 400, marginTop: 16}}>
                            <span>Используйте аккаунт Google</span></div>
                    </div>
                    <div>
                        <input aria-label='Телефон или адрес эл. почты'/>
                    </div>
                </div>
            </div>

            <div className={styles.wmGw4}>
            </div>
        </main>
    );
}
