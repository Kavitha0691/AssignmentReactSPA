import Image from '../../assets/mainBackground.jpg'
import CardOverlay from '../CardOverlay'
import styles from './homeMainContent.module.css'

const HomeMain = () => {
    return (
        <>
            <div className={styles.homeMainImage}>
                <CardOverlay />
            </div>
        </>
    )
}

export default HomeMain