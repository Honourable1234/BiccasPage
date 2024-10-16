import {useState, useEffect} from 'react'

function Collaboration({image, bigText, smallText}) { const [isSmall, setIsSmall] = useState(window.innerWidth < 1020 && window.innerWidth> 700 || window.innerWidth < 400)
   
  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth < 1020 && window.innerWidth> 700 || window.innerWidth < 400);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div style={{...styles.wrapper, width: isSmall? "200px" : "300px"}}>
      <div>
        <img src={image} alt="" style={{...styles.image, width: isSmall? "200px" : "300px"}}/>
      </div>
      <h4 style={{...styles.bigText}}>{bigText}</h4>
      <p style={{...styles.smallText}}>{smallText}</p>
    </div>
  )
}
const styles = {
    wrapper: {
        height: "500px",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto"
    },
    bigText: {
        marginTop: "25px"
    }
}
export default Collaboration
