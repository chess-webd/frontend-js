import React from 'react'
// import  './index.module.css'
import styles from './index.module.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookF,faInstagram,faYoutube,faTwitter} from '@fortawesome/free-brands-svg-icons'
import Copyright from '@material-ui/icons/Copyright'
function Footer() {
    return (
        <div>
            <div className={styles.footer}>
                <div className={styles.link} id={styles.home}>
                    <div className={styles.line} id={styles.homeline}></div>
                    <a href="#" className={styles.linktext} id={styles.hometext}>Home</a>
                </div>
                <div className={styles.link} id={styles.chemethans}>
                    <div className={styles.line}  id={styles.chemethansline}></div>
                    <a href="#" className={styles.linktext} id={styles.chemethanstext}>Chem-E-Thans</a>
                </div>
                <div className={styles.link} id={styles.team}>
                    <div className={styles.line} id={styles.teamline}></div>
                    <a href="#" className={styles.linktext} id={styles.teamtext}>Team</a>
                </div>
                <div className={styles.link} id={styles.event}>
                    <div className={styles.line} id={styles.eventline}></div>
                    <a href="#" className={styles.linktext} id={styles.eventtext}>Event</a>
                </div>
                <div className={styles.link} id={styles.department}>
                    <div className={styles.line} id={styles.departmentline}></div>
                    <a href="#" className={styles.linktext} id={styles.departmenttext}>Department</a>
                </div>
                <div className={styles.link} id={styles.contactus}>
                    <div className={styles.line} id={styles.contactusline}></div>
                    <a href="#" className={styles.linktext} id={styles.contactustext}>Contact-Us</a>
                </div>
                <div className={styles.chesslogo}>
                    <div className={styles.ChessText}>
                        ChESS
                    </div>
                    <div className={styles.iitrtext}>
                        IITR
                    </div>
                </div>
                <a className={styles.socialicon} id={styles.fb} href="https://www.facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebookF} classNameName={styles.vector} style={{color:"gray"}}></FontAwesomeIcon></a>
                <a className={styles.socialicon} id={styles.insta} href="https://www.instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} classNameName={styles.vector} style={{color:"gray"}}></FontAwesomeIcon></a>
                <a className={styles.socialicon} id={styles.twitter} href="https://www.twitter.com" target="_blank"><FontAwesomeIcon icon={faTwitter} classNameName={styles.vector} style={{color:"gray"}}></FontAwesomeIcon></a>
                <a className={styles.socialicon} id={styles.yt} href="https://www.youtube.com" target="_blank"><FontAwesomeIcon icon={faYoutube} classNameName={styles.vector} style={{color:"gray"}}></FontAwesomeIcon></a>
                <div className={styles.footer1}><Copyright/><div className={styles.footer1text}>Chess IIR 2021</div></div>
            </div>
            
        </div>
    )
}

export default Footer
