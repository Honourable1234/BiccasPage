import styles from "./../styles/Footer.module.css"
import Circle from "./../assets/Images/Circle.png"
function Footer() {
  return (
    <div className={styles.Footer}>
       <div className={styles.firstPart}>
        <div className={styles.box1}>
            <h2>People are Saying About DoWhith</h2>
            <p>Everything you need to accept to payment and grow your money of manage anywhere on planet</p>
            <h1>"</h1>
            <p>
            I am very helped by this E-wallet application , my days are very easy to use this application and its very helpful in my life , even I can pay a short time 😍 <br /><br />_ Aria Zinanrio
            </p>
        </div>
        <div className={styles.box2}>
            <div className={styles.circleDiv}>
                <img src={Circle} alt="" />
            </div>
            <p className={styles.p}>Get started</p>
            <div className={styles.form}>
               <label for="firstName">Email</label><br />
               <input type="text" id="firstName" placeholder="Enter your first Email" /><br />
               <label for="lastName">Message</label><br />
               <input type="text" id="lastName" placeholder="What are you say?" /><br />
               <button className={styles.btnL}>Submit</button>
           </div>
        </div>
       </div>
       <div className={styles.secondPart}>
         <div className={styles.box3}>
            <h2>Biccas</h2>
            <p>Get started noew try our product</p>
            <input type="text" id="lastName" placeholder="Enter your email here" />
         </div>
         <div className={styles.box4}>
            <div>
                <p>Support</p>
                <ul>
                    <li>Health Center</li>
                    <li>Account Information</li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div>
                <p>Help and Solution</p>
                <ul>
                    <li>Talk to Support</li>
                    <li>Support Docs</li>
                    <li>System Status</li>
                    <li>Covid Response</li>
                </ul>
            </div>
            <div>
                <p>Product</p>
                <ul>
                    <li>Update</li>
                    <li>Security</li>
                    <li>Beta Test</li>
                    <li>Pricing Products</li>
                </ul>
            </div>
         </div>
       </div>
    </div>
  )
}

export default Footer
