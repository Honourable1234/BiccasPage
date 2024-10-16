import AppBtn from "./AppBtn"
import styles from "./../styles/Features.module.css"
import Collaboration from "./Collaboration"
import Frame247 from "./../assets/Images/Frame247.png"
import Frame53 from "./../assets/Images/Frame53.png"
import Frame54 from "./../assets/Images/Frame54.png"

function Features() {
  return (
    <div className={styles.container}>
      <div className={styles.firstDiv}>
        <h2>Our Features we can get</h2>
        <p>We offer a variety of interesting features that you can help increase yor productivity at work and manage your projrct esaly</p>
        <AppBtn text={"Get Started"} bgColor={"#54BD95"} textColor={"#FFFF"} borderRadius={"25px"} width={"120px"} height={"50px"} className={styles.button}/>
      </div>
      <div className={styles.secondDiv}>
        <Collaboration image={Frame247} bigText={"Collaboration Teams"} smallText={"Here you can handle projects together with team virtually"}/>
        <Collaboration image={Frame53} bigText={"Cloud Storage"} smallText={"No nedd to worry about storage because we provide storage up to 2 TB"}/>
        <Collaboration image={Frame54} bigText={"Daily Analytics"} smallText={"We always provide useful informatin to make it easier for you every day"}/>
      </div>
    </div>
  )
}

export default Features
