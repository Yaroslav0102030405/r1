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

export function Welcome () {
  
  return (
   <>
   <Painting menu={menu} />
      </>   
  );
}

