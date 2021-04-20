import styles from './style.module.scss';

export function Player() {
    

    return (
        <div className={styles.playerContainer}>
            <header>
                <img src="../../public/playing.svg" alt=""/>
                <strong>Tocando agora</strong>
            </header>
            <div className={styles.emptyPlayer}>
                <strong>Selecione um podcast para ouvir</strong>
            </div>

            <footer className={styles.empty}>
                <div className={styles.progress}>
                    <span>00.00</span>
                    <div className={styles.slider}>
                        <div className={styles.emptySlider}/>
                    </div>
                    <span>00:00</span>
                    
                </div>
                <div className={styles.buttons}>
                    <button type="button">
                        <img src="../../public/shuffle.svg"/>
                    </button>
                    <button type="button">
                        <img src="../../public/play-previous.svg"/>
                    </button>
                    <button type="button">
                        <img src="../../public/play.svg" />
                    </button>
                    <button type="button">
                        <img src="../../public/play-next.svg" />
                    </button>
                    <button type="button">
                        <img src="../../public/repeat.svg" />
                    </button>
                </div>
            </footer>
        </div>
    );
}