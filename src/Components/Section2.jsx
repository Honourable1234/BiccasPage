import Vector32 from "./../assets/Images/Vector32.png"
import Group141 from "./../assets/Images/Group141.png"
import Group142 from "./../assets/Images/Group142.png"
import Group144 from "./../assets/Images/Group144.png"
import Group145 from "./../assets/Images/Group145.png"
import Group146 from "./../assets/Images/Group146.png"
import Group138 from "./../assets/Images/Group138.png"
import styles from "./../styles/Section2.module.css"
import {FaRegPlayCircle} from "react-icons/fa"
import Appbtn from "./AppBtn"
function Section2() {
  return (
    <div>
      <div className={styles.Section2}>
      <div className={styles.firstPart}>
        <h1 className={styles.sentence}>We’re here to Increase your Productivity</h1>
        <img className={styles.Vector32} src={Vector32} alt="Vector32" />
        <p className={styles.paragraph}>Let's make your work more organize and easily using the Taskio Dashboard with many of the latest featuresin managing work every day.</p>
        <div className={styles.buttons}>
            <Appbtn text={"Try Free Trial"} bgColor={"#54BD95"} textColor={"#FFFF"} borderRadius={"18px"} width={"60%"} height={"40px"}/>
           <div className={styles.demo}>
               <FaRegPlayCircle size={20} color="#A6A6A6"  />
               <p>Play Demo</p>
           </div>
        </div>
      </div>
      <div className={styles.Group138}>
        <img src={Group138} alt="Group138" />
      </div>
    </div>
    <div className={styles.more}>
      <h2>More than 25,000 teams use Collabs</h2>
      <div className={styles.logos}>
        <div><img src={Group141} alt="Group141" /></div>
        <div> <img src={Group142} alt="Group142" /></div>
        <div><img src={Group144} alt="Group144" /></div>
        <div><img src={Group145} alt="Group145" /></div>
        <div><img src={Group146} alt="Group146" /></div>
      </div>
    </div>
    </div>
  )
}

export default Section2
