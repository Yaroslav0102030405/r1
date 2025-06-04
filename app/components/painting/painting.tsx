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
            <img width="300" src={href} alt={text} />
      </li>
    ))}
  </ul>
);

export default Painting;