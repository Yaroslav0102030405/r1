import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import Painting from "~/components/painting/painting";

interface MenuItem {
  href: string
  text: string
}

const menu: MenuItem[] = [{
    href: "https://cdn.pixabay.com/photo/2018/10/22/17/13/background-3765811_640.jpg",
    text: "Головна",
}, {href: "https://cdn.pixabay.com/photo/2018/10/22/17/16/cake-3765821_640.jpg",
    text: "Переваги"
}]

export function Welcome () {
  
  return (
   <>
   <Painting menu={menu} />
      </>   
  );
}

