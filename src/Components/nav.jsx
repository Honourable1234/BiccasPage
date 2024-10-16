import Appbtn from "./AppBtn.jsx"
import styles from "./../styles/Nav.module.css"
import {FaBars} from "react-icons/fa"
function nav() {
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <div>
            <h1 className={styles.logo}>Biccas</h1>
        </div>
        <div className={styles.navPs}>
            <p>Home</p>
            <p>Products</p>
            <p>FAQ</p>
            <p>Blog</p>
            <p>About Us</p>
        </div>
        <div className={styles.buttons}>
            <Appbtn text={'Login'} bgColor={"#FFFF"} textColor={"#A6A6A6"} borderRadius={"8px"} width={"80px"}/>
            <Appbtn text={"SignUp"} bgColor={"#54BD95"} textColor={"#FFFF"} borderRadius={"8px"} width={"80px"}/>
        </div>
        <div  className={styles.bars}>
          <FaBars size={20} color="#A6A6A6"  className={styles.FaBars}/>
          <div className={styles.navPVert}>
            <p>Home</p>
            <p>Products</p>
            <p>FAQ</p>
            <p>Blog</p>
            <p>About Us</p>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default nav