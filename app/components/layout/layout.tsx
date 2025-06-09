import Button from "../button/Button";

interface ChildrenElement {
  children: React.ReactNode;
  title: string
}

const Layout = ({children, title}: ChildrenElement) => {
    return ( <>
    <main>
      {title && <h2>{title}</h2>}
{children}


        </main></> );
}
 
export default Layout;