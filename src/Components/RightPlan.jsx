import styles from "./../styles/RightPlan.module.css"
import {FaCheck} from "react-icons/fa"

function RightPlan() {
  return (
    <div className={styles.rightPlan}>
      <div className={styles.firstPart}>
        <h2>Choose Plan <br /> That's Right for you</h2>
        <p>Choose plan that works best for you, feel free to contact us</p>
      </div>
      <div className={styles.btns}>
        <button className={styles.btn}>Bill Monthly</button>
        <button className={styles.btn}>Bill Yearly</button>
      </div>
      <div className={styles.banners}>
        <div className={styles.banner}>
            <h3 className={styles.text1}>Free</h3>
            <p className={styles.text2}>Have a go and test your super power</p>
            <h2 className={styles.text3}>$0</h2>
            <div className={styles.smallBox}>
            <ul>
            <li className={styles.list}>
                <div className={styles.circle}>
                  <FaCheck size={7} color="#ffffff"/>
                </div>
                2 Users
            </li>
            <li className={styles.list}>
                <div className={styles.circle}>
                  <FaCheck size={7} color="#ffffff"/>  
                </div>
                2 Files
            </li>
            <li className={styles.list}>
                <div className={styles.circle}>
                  <FaCheck size={7} color="#ffffff"/>
                </div>
                Public Share & Comments
            </li>
            <li className={styles.list}>
                <div className={styles.circle}>
                  <FaCheck size={7} color="#ffffff"/>
                </div>
                Chat Support
            </li>
            <li className={styles.list}>
                <div className={styles.circle}>
                  <FaCheck size={7} color="#ffffff"/>
                </div>
                New Income Apps
            </li>
        </ul>
                <button className={styles.btn2}>Sign up for Free</button>
            </div>
        </div>
        <div className={styles.banner}>
            <h3 className={styles.text1}>Pro</h3>
            <p className={styles.text2}>Experiment the Power of Infinite Possibilities</p>
            <h2 className={styles.text3}>$8</h2>
            <div className={styles.smallBox}>
            <ul>
            <li className={styles.list}>
                <div className={styles.circle}>
                  <FaCheck size={7} color="#ffffff"/>
                </div>
                4 Users
            </li>
            <li className={styles.list}>
                <div className={styles.circle}>
                  <FaCheck size={7} color="#ffffff"/>  
                </div>
                All Apps
            </li>
            <li className={styles.list}>
                <div className={styles.circle}>
                  <FaCheck size={7} color="#ffffff"/>
                </div>
                Unlimited Editable Exports
            </li>
            <li className={styles.list}>
                <div className={styles.circle}>
                  <FaCheck size={7} color="#ffffff"/>
                </div>
                Folders and Collaboration
            </li>
            <li className={styles.list}>
                <div className={styles.circle}>
                  <FaCheck size={7} color="#ffffff"/>
                </div>
                All Incoming Apps
            </li>
        </ul>
                <button className={styles.btn2}>Go to Pro</button>
            </div>
        </div>
        <div className={styles.banner}>
            <h3 className={styles.text1}>Business</h3>
            <p className={styles.text2}>Unveil new superpowers and join the Design Leaque</p>
            <h2 className={styles.text3}>$16</h2>
            <div className={styles.smallBox}>
            <ul>
            <li className={styles.list}>
                <div className={styles.circle}>
                  <FaCheck size={7} color="#ffffff"/>
                </div>
                All the Features of Pro Plan
            </li>
            <li className={styles.list}>
                <div className={styles.circle}>
                  <FaCheck size={7} color="#ffffff"/>  
                </div>
                Account Success Manager
            </li>
            <li className={styles.list}>
                <div className={styles.circle}>
                  <FaCheck size={7} color="#ffffff"/>
                </div>
                Single Sign On (SSO)
            </li>
            <li className={styles.list}>
                <div className={styles.circle}>
                  <FaCheck size={7} color="#ffffff"/>
                </div>
                Co-Conception Program
            </li>
            <li className={styles.list}>
                <div className={styles.circle}>
                  <FaCheck size={7} color="#ffffff"/>
                </div>
                Collaboration (soon)
            </li>
        </ul>
                <button className={styles.btn2}>Go to Business</button>
            </div>
        </div>
      </div>
      <div className={styles.banners2}>
        <button className={styles.banner2}><p>Go To Free</p></button>
        <button className={styles.banner2}><p>Go To PRO</p></button>
        <button className={styles.banner2}><p>Go To Business</p></button>
      </div>
    </div>
  )
}

export default RightPlan
