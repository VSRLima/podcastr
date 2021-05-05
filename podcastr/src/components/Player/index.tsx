import { useContext } from 'react';
import { PlayerContext } from '../../contexts/PlayerContext';
import styles from './style.module.scss';

export function Player() {
    const player = useContext(PlayerContext)

    return (
        <div className={styles.playerContainer}>
            <header>
                <img src="/playing.svg" alt=""/>
                <strong>Tocando agora {player}</strong>
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
                        <img src="/shuffle.svg"/>
                    </button>
                    <button type="button">
                        <img src="/play-previous.svg"/>
                    </button>
                    <button type="button">
                        <img src="/play.svg" />
                    </button>
                    <button type="button">
                        <img src="/play-next.svg" />
                    </button>
                    <button type="button">
                        <img src="/repeat.svg" />
                    </button>
                </div>
            </footer>
        </div>
    );
}