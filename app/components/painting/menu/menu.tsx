interface MenuItem {
  href: string
  text: string
}

const menu: MenuItem[] = [{
    href: "#section1",
    text: "Про нас",
}, {href: "#section2",
    text: "Переваги"
}, {href: "#section3",
    text: "Послуги"
}, {href: "#section4",
    text: "Контакти"
}]

const Menu = () => {
    return ( <>
    <ul>
      {menu.map(({href, text}) => (
        <li key={text}><a href={href}>{text}</a></li>
      ))}
    </ul>
    </> );
}
 
export default Menu;