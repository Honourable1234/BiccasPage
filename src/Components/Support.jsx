import styles from "./../styles/support.module.css"
import Activity1 from "./../assets/Images/Activity1.png"
import pieChart1 from "./../assets/Images/pieChart1.png"
import Command1 from "./../assets/Images/Command1.png"
import Group152 from "./../assets/Images/Group152.png"
import Group153 from "./../assets/Images/Group153.png"
import Small from "./Small"
function support() {
  return (
    <div className={styles.support}>
      <div className={styles.firstPart}>
        <h2>How we support our pratner all over the world</h2>
        <p>SaaS become a common delivery model for many business application, including office software, messaging software, payroll processing software, DBMS software, management software</p>
        <div className={styles.smalls}>
            <div>
                <img src={Group152} alt="Group152" />
                <h6>4.9 / 5 rating</h6>
                <p>Data Bricks</p>
            </div>
            <div>
                <img src={Group153} alt="Group152" />
                <h6>4.8 / 5 rating</h6>
                <p>Chain Analysis</p>
            </div>
        </div>
      </div>
      <div className={styles.secondPart}>
        <Small image={Activity1} bigtext={"Publishing"} smallText={"Plan, collaborate, and publishing your contetn that drivees meaningful engagement and growth for your barnd"}/>
        <Small image={pieChart1} bigtext={"Analytics"} smallText={"Analyze your performance and create goegeous report"}/>
        <Small image={Command1} bigtext={"Engagement"} smallText={"Quiuckly navigate you anda engage with your adience"}/>
      </div>
    </div>
  )
}

export default support
