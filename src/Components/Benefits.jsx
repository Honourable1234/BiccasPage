import styles from "./../styles/Benefits.module.css"
import Rectangle48 from "./../assets/Images/Rectangle48.png"
import Group111 from "./../assets/Images/Group111.png"
import Group112 from "./../assets/Images/Group112.png"
import Group113 from "./../assets/Images/Group113.png"
import Group114 from "./../assets/Images/Group114.png"
import {FaCheck} from "react-icons/fa"
function Benefits() {
  return (
    <div className={styles.benefits}>
      <div className={styles.part1}>
        <h2>What Benifit Will You Get</h2>
        <ul>
            <li className={styles.list}>
                <div className={styles.circle}>
                  <FaCheck size={10} color="#ffffff"/>
                </div>
                Free Consulting With Experet Saving Money
            </li>
            <li className={styles.list}>
                <div className={styles.circle}>
                  <FaCheck size={10} color="#ffffff"/>  
                </div>
                Online Banking
            </li>
            <li className={styles.list}>
                <div className={styles.circle}>
                  <FaCheck size={10} color="#ffffff"/>
                </div>
                Investment Report Every Month
            </li>
            <li className={styles.list}>
                <div className={styles.circle}>
                  <FaCheck size={10} color="#ffffff"/>
                </div>
                Saving Money For The Future
            </li>
            <li className={styles.list}>
                <div className={styles.circle}>
                  <FaCheck size={10} color="#ffffff"/>
                </div>
                Online Transection
            </li>
        </ul>
        </div>
      <div className={styles.part2}>
        <img src={Rectangle48} alt="Rectangle" className={styles.bigImg} />
        <div>
          <img src={Group111} alt="Group111" className={styles.smallImg1} />
          <img src={Group112} alt="Group112" className={styles.smallImg2}/>
          <img src={Group113} alt="Group113" className={styles.smallImg3}/>
          <img src={Group114} alt="Group114" className={styles.smallImg4}/>
        </div>
      </div>
    </div>
  )
}

export default Benefits
