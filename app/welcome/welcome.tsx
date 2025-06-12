// import { useState } from "react";

import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import Painting from "~/components/painting/painting";
import ImageCard1 from "./../images/card1.jpg";
import ImageCard2 from "./../images/card2.jpg";
import ImageCard3 from "./../images/card3.jpg";


interface MenuItem {
  href: string
  text: string
}

const menu: MenuItem[] = [{
    href: ImageCard1,
    text: "Головна",
}, {href: ImageCard2,
    text: "Переваги"
}, {href: ImageCard3,
    text: "Переваги"
}]

interface Props {
  click: number;
  setClick: React.Dispatch<React.SetStateAction<number>>

}

const Welcome: React.FC<Props> = ({click, setClick} ) => {
  // const [click, setClick] = useState<number>(0)

  const handleClick = () => {
    setClick(prev => prev + 1)
  }
  
  return (
   <>
   <button onClick={handleClick}>Збільшити значення: {click}</button>
   <Painting menu={menu} />
      </>   
  );
}

export default Welcome;
