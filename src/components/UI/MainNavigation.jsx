import { FaGithub } from 'react-icons/fa';
import styles from './MainNavigation.module.css'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

const logoVariants = {
    start: {y: '-100vh', type:'spring', stiffness: '100'},
    end: {y:0,
    transition:{duration:0.5}}
    
}
const MainHeader = () => {
    return (
        <header className={styles.container}>
         <div className={styles.header}>
             <Link to="/"><motion.h2 variants={logoVariants} initial='start' animate='end'>Travel Calculator</motion.h2></Link>
         </div>
           <motion.a whileHover={{ rotate: 180, scale:1.1}}  variants={logoVariants} initial='start' animate='end' target ="_blank" href="https://github.com/Jakub-Chojnacki/Map-Project-task"><FaGithub className={styles.github}/></motion.a>
        </header>
    )
}

export default MainHeader;