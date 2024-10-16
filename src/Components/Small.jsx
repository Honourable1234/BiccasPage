import { useState, useEffect } from "react"
function Small({image, bigtext, smallText}) {
  const [isSmall, setIsSmall] = useState(window.innerWidth < 450)
  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth < 450);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{...styles.container, width: isSmall? "100%" : "370px", marginTop: isSmall? "10px" : "25px"}}>
      <div style={{...styles.logoDiv}}>
        <img src={image} alt="" />
      </div>
      <div style={{...styles.texts, width: isSmall? "80%": "300px"}}>
        <h4>{bigtext}</h4>
        <p style={{...styles.p, fontSize: isSmall? "10px": "15px"}}>{smallText}</p>
      </div>
    </div>
  )
}

const styles = {
  container: {
      height: "80px",
      display: "flex",
      justifyContent: "space-between",
      border: "none",
      padding: "10px",
  },
  logoDiv: {
      width: "30px",
      height: "30px",
      backgroundColor: "#ffffff",
      boxShadow: "0px 2px 4px 0px",
  },
  p: {
    marginTop: "5px"
  }
}

export default Small
