
import { useState, useEffect } from "react"
function appBtn({text, textColor, bgColor, borderRadius, width, height, fontSize}) {
  const [isSmall, setIsSmall] = useState(window.innerWidth < 550)
  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth < 550);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <button style = {{...styles.btn, color: textColor, backgroundColor: bgColor, borderRadius: borderRadius,  width: isSmall? "80px" : width, height: isSmall? "20px" : height, fontSize: isSmall? "8px": fontSize}}>
        {text}
    </button>
  )
}

const styles = {
    btn: {
        border: "none",
        cursor: "pointer",
        height: "40px"
    },
}

export default appBtn
