import Image from '../../assets/disneyHotel.jpg'
import CardOverlay from '../CardOverlay'
import styles from './homeMainContent.module.css'

const HomeMain = () => {
    return (
        <>
            <div className={styles.homeMainImage} style={{ backgroundImage: `url(${Image})` }}>
                <CardOverlay />
            </div>
        </>
    )
}

export default HomeMain