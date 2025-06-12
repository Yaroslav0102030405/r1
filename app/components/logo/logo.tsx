import ImageLogo from "../../images/logo.png"

interface SrcAndAlt {
    src: string;
    alt: string;
}

const srcAndAlt: SrcAndAlt = {
    src: ImageLogo,
    alt: "logo",
};

interface Props {
  click: number;
  setClick: React.Dispatch<React.SetStateAction<number>>

}

const Logo: React.FC<Props>  = ({click, setClick}) => {
     const handleClick = () => {
    setClick(prev => prev + 1)
  }
  
    return (
    <>
     <button onClick={handleClick}>Збільшити значення: {click}</button>
    <a href="/"><img width="50" src={srcAndAlt.src} alt={srcAndAlt.alt} /></a>
    </>  );
}
 
export default Logo;