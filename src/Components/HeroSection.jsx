import Nav from "./nav"
import Section2 from "./Section2"
import styles from "./../styles/HeroSection.module.css"
function HeroSection() {
  return (
    <div className={styles.container}>
      <Nav />
      <Section2 />
    </div>
  )
}

export default HeroSection
