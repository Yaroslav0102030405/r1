import { it } from "node:test";

interface MenuItem {
  href: string;
  text: string;
}

interface PaintingProps {
  menu: MenuItem[];
}

const Painting: React.FC<PaintingProps> = ({ menu }) => (
  <ul>
    {menu.map(({href, text}) => (
      <li key={href}>
        <a href={href}>{text}
            <img src={href} alt={text} />
        </a>
      </li>
    ))}
  </ul>
);

export default Painting;